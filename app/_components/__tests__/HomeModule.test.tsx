import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeModule from '../HomeModule';
import '@testing-library/jest-dom';

// Mock the ProductsContainer to isolate this test
jest.mock('../products-container/ProductsContainer', () => {
    const MockProductsContainer = () => (
        <div data-testid="mock-products-container">Mocked Products Container</div>
    );
    MockProductsContainer.displayName = 'MockProductsContainer';
    return MockProductsContainer;
});

describe('HomeModule', () => {
    it('renders the main heading and products container', () => {
        render(<HomeModule />);

        // Check for the heading
        const heading = screen.getByRole('heading', { name: /Products/i });
        expect(heading).toBeInTheDocument();

        // Check for the mocked ProductsContainer
        const container = screen.getByTestId('mock-products-container');
        expect(container).toBeInTheDocument();
    });

    it('uses semantic HTML roles', () => {
        render(<HomeModule />);

        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();

        const region = screen.getByRole('region', { name: /Home module container/i });
        expect(region).toBeInTheDocument();
    });
});
