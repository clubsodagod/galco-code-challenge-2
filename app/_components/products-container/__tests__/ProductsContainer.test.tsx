import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsContainer from '../ProductsContainer';
import '@testing-library/jest-dom';

jest.mock('../InfiniteProductScroller', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="mock-scroller">Mocked Scroller</div>),
}));

jest.mock('@/app/_library/product.data', () => ({
    productData: [
        {
            id: '1',
            name: 'Product A',
            price: 100,
            product_category: { name: 'Electronics' },
        },
        {
            id: '2',
            name: 'Product B',
            price: 200,
            product_category: { name: 'Books' },
        },
    ],
}));

describe('ProductsContainer', () => {
    it('renders product count and filters', () => {
        render(<ProductsContainer />);
        expect(screen.getByText(/Products/i)).toBeInTheDocument();
        expect(screen.getByText(/Filter/i)).toBeInTheDocument();
    });

    it('opens filter options when Filter button is clicked', () => {
        render(<ProductsContainer />);
        const toggleButton = screen.getByRole('button', { name: /toggle filter options/i });
        fireEvent.click(toggleButton);

        expect(screen.getByText(/Filter by Category/i)).toBeVisible();
        expect(screen.getByText(/Filter by Price/i)).toBeVisible();
    });

    it('filters products by category when checkbox is selected', () => {
        render(<ProductsContainer />);
        fireEvent.click(screen.getByRole('button', { name: /toggle filter options/i }));

        const checkbox = screen.getByRole('checkbox', { name: 'Electronics category' });
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(screen.getByText(/1 Products/i)).toBeInTheDocument();
    });
});
