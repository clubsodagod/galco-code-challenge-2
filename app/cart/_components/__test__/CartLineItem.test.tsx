import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useCart } from '@/app/_context/CartContext';
import CartLineItem from '../cart/CartLineItem';

jest.mock('@/app/_context/CartContext', () => ({
    useCart: jest.fn(),
}));

describe('CartLineItem', () => {
    const mockItem = {
        id: '1',
        name: 'Test Product',
        price: 10.5,
        quantity: 2,
        image: '/test.jpg',
    };

    const increaseQuantity = jest.fn();
    const decreaseQuantity = jest.fn();

    beforeEach(() => {
        (useCart as jest.Mock).mockReturnValue({
            increaseQuantity,
            decreaseQuantity,
            cart: [mockItem],
        });
    });

    it('renders product info and total', () => {
        render(<CartLineItem item={mockItem} index={0} />);
        expect(screen.getByLabelText(/Product name/i)).toHaveTextContent('Test Product');
        expect(screen.getByLabelText(/Product price/i)).toHaveTextContent('$10.50');
        expect(screen.getByLabelText(/Quantity of Test Product/i)).toHaveTextContent('2');
        expect(screen.getByLabelText(/Line total/i)).toHaveTextContent((10.5 * 2).toFixed(2));
    });

    it('calls increaseQuantity when + button is clicked', () => {
        render(<CartLineItem item={mockItem} index={0} />);
        const increaseBtn = screen.getByLabelText(/Increase quantity of Test Product/i);
        fireEvent.click(increaseBtn);
        expect(increaseQuantity).toHaveBeenCalledWith('1');
    });

    it('calls decreaseQuantity when - button is clicked', () => {
        render(<CartLineItem item={mockItem} index={0} />);
        const decreaseBtn = screen.getByLabelText(/Decrease quantity of Test Product/i);
        fireEvent.click(decreaseBtn);
        expect(decreaseQuantity).toHaveBeenCalledWith('1');
    });
});
