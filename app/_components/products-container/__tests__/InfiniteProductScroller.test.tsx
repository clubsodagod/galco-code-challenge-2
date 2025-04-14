import React from 'react';
import { render, screen } from '@testing-library/react';
import InfiniteProductScroller from '../InfiniteProductScroller';
import '@testing-library/jest-dom';
import { Product } from '@/app/_library/product.data';

const mockProducts:Product[] = [
    {
        id: '1',
        name: 'Mock Product A',
        description: 'A great item',
        price: 100,
        image: '/mock-image-a.jpg',
        product_category: { 
            id: 'cat1', 
            name: 'Test', 
            created_at: '2023-01-01T00:00:00Z', 
            updated_at: '2023-01-02T00:00:00Z' 
        },
        product_category_id: 'cat1',
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-02T00:00:00Z',
        manufacturer: 'MockCo',
    },
    {
        id: '2',
        name: 'Mock Product B',
        description: 'Another item',
        price: 200,
        image: '/mock-image-b.jpg',
        product_category: {
            id: 'cat2', 
            name: 'Test 2', 
            created_at: '2023-01-01T00:00:00Z', 
            updated_at: '2023-01-02T00:00:00Z' 
        },
        product_category_id: 'cat2',
        created_at: '2023-01-03T00:00:00Z',
        updated_at: '2023-01-04T00:00:00Z',
        manufacturer: 'MockCo',
    },
];

jest.mock('next/image', () => ({
    __esModule: true,
    // eslint-disable-next-line @next/next/no-img-element
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img alt={props.alt} {...props} />,
}));

jest.mock('@/app/_context/CartContext', () => ({
    useCart: () => ({
        addToCart: jest.fn(),
    }),
}));

describe('InfiniteProductScroller', () => {
    it('renders product cards', () => {
        render(
            <InfiniteProductScroller
                products={mockProducts}
                loading={false}
                hasMore={true}
            />
        );

        expect(screen.getByLabelText('Product card for Mock Product A')).toBeInTheDocument();
        expect(screen.getByLabelText('Product card for Mock Product B')).toBeInTheDocument();
    });

    it('shows loading spinner when loading is true', () => {
        render(
            <InfiniteProductScroller
                products={[]}
                loading={true}
                hasMore={true}
            />
        );

        expect(screen.getByLabelText('Loading spinner')).toBeInTheDocument();
    });

    it('shows end-of-list message when hasMore is false and loading is false', () => {
        render(
            <InfiniteProductScroller
                products={[]}
                loading={false}
                hasMore={false}
            />
        );

        expect(screen.getByText(/All products are loaded/i)).toBeInTheDocument();
    });
});
