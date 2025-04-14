import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useCart } from '@/app/_context/CartContext';
import Cart from '../cart/Cart';

jest.mock('@/app/_context/CartContext', () => ({
    useCart: jest.fn(),
}));

jest.mock('../CartLineItem', () => {
    const MockCartLineItem = ({ item, index }: { item: { name: string }; index: number }) => (
        <div data-testid="cart-line-item">{item.name} - {index}</div>
    );
    MockCartLineItem.displayName = 'MockCartLineItem';
    return MockCartLineItem;
});

jest.mock('../CartSummary', () => {
    const MockCartSummary = () => <div data-testid="cart-summary">Summary Component</div>;
    MockCartSummary.displayName = 'MockCartSummary';
    return MockCartSummary;
});

describe('Cart component', () => {
    const mockCart = [
        { id: '1', name: 'Item A', price: 10, quantity: 1, image: '/a.jpg' },
        { id: '2', name: 'Item B', price: 20, quantity: 2, image: '/b.jpg' },
    ];

    beforeEach(() => {
        (useCart as jest.Mock).mockReturnValue({ cart: mockCart });
    });

    it('renders the column headers', () => {
        render(<Cart />);
        expect(screen.getByRole('columnheader', { name: /Photo/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /Name/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /Quantity/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /Total/i })).toBeInTheDocument();
    });

    it('renders all cart items', () => {
        render(<Cart />);
        expect(screen.getAllByTestId('cart-line-item')).toHaveLength(2);
    });

    it('includes the summary and checkout button', () => {
        render(<Cart />);
        expect(screen.getByTestId('cart-summary')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /checkout now/i })).toBeInTheDocument();
    });

    it('has accessible structure', () => {
        render(<Cart />);
        expect(screen.getByRole('region', { name: /shopping cart container/i })).toBeInTheDocument();
    });
});
