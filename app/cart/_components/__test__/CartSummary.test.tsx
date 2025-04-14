import React from 'react';
import { render, screen } from '@testing-library/react';
import CartSummary from '../cart/CartSummary';
import '@testing-library/jest-dom';
import { useCart } from '@/app/_context/CartContext';

jest.mock('@/app/_context/CartContext', () => ({
    useCart: jest.fn(),
}));

describe('CartSummary', () => {
    beforeEach(() => {
        (useCart as jest.Mock).mockReturnValue({
            getCartTotal: () => 100,
        });
    });

    it('renders all summary rows with correct values', () => {
        render(<CartSummary />);
        expect(screen.getByLabelText(/Cart Total value/i)).toHaveTextContent('$100.00');
        expect(screen.getByLabelText(/Taxes value/i)).toHaveTextContent('$6.00');
        expect(screen.getByLabelText(/Shipping value/i)).toHaveTextContent('FREE');
        expect(screen.getByLabelText(/Discounts value/i)).toHaveTextContent('-$100.00');
        expect(screen.getByLabelText(/Grand Total value/i)).toHaveTextContent('$6.00');
    });

    it('uses accessible table structure', () => {
        render(<CartSummary />);
        expect(screen.getByRole('table', { name: /cart summary breakdown/i })).toBeInTheDocument();
        expect(screen.getAllByRole('row')).toHaveLength(5); // One row per SummaryRow
    });
});
