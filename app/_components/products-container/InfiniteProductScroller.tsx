"use client";

import { Product } from '@/app/_library/product.data';
import React, { JSX } from 'react';
import { CircularProgress } from '@mui/material';
import ProductCard from './ProductCard';

/**
 * InfiniteProductScroller Component
 *
 * Displays a list of product cards in a responsive grid layout.
 * Implements infinite scrolling and shows a loading spinner or
 * an end-of-list message based on scroll state.
 *
 * @param {Object} props - Component props
 * @param {Product[]} props.products - List of products to render
 * @param {string} [props.id] - Optional ID for container element
 * @param {boolean} props.loading - Whether products are currently loading
 * @param {boolean} props.hasMore - Whether more products are available
 * @param {React.Ref<HTMLDivElement>} ref - Scroll container reference
 * @returns {JSX.Element} Infinite scroll grid of products
 */
const InfiniteProductScroller = React.forwardRef<HTMLDivElement, {
    products: Product[];
    id?: string;
    loading: boolean;
    hasMore: boolean;
}>(
    ({ products, id, loading, hasMore }, ref): JSX.Element => {
        return (
            <div id={id} ref={ref} className="w-full flex flex-col mt-12" aria-label="Product scroller section">
                <div
                    className="flex flex-wrap justify-evenly gap-3 gap-y-12"
                    role="list"
                    aria-label="List of products"
                >
                    {products.map((p, i) => (
                        <div
                            key={`${p.manufacturer}-${i}`}
                            className="sm:max-w-1/2 sm:flex-1/2 md:flex-1/3 sm:w-1/2 md:w-1/3 xl:flex-1/4 xl:w-1/4 xl:max-w-1/4"
                            role="listitem"
                        >
                            <ProductCard product={p} index={i} />
                        </div>
                    ))}
                </div>

                {loading && (
                    <div className="flex justify-center py-6" aria-label="Loading spinner">
                        <CircularProgress aria-busy="true" />
                    </div>
                )}

                {!loading && !hasMore && (
                    <p className="text-center text-sm text-gray-500 py-4" role="status" aria-live="polite">
                        All products are loaded.
                    </p>
                )}
            </div>
        );
    }
);

InfiniteProductScroller.displayName = 'InfiniteProductScroller';


export default InfiniteProductScroller;