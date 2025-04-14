"use client";

import React, { JSX, useEffect } from 'react';
import { Product, productData } from '@/app/_library/product.data';
import InfiniteProductScroller from './InfiniteProductScroller';
import lightTheme from '@/app/_library/themes/light-theme';
import { ThemeProvider } from '@mui/material';
import CategoryFilter from './CategoryFilter';
import FilterBar from './FilterBar';
import PriceFilter from './PriceFilter';

/**
 * ProductsContainer Component
 *
 * Renders a list of products with infinite scroll and filters.
 * Users can filter by category and price range.
 * Includes accessible design and responsive layout.
 *
 * @component
 * @returns {JSX.Element} The product listing UI with filters and infinite scroll.
 */
const ProductsContainer = (): JSX.Element => {
    const productsData = productData;
    const allPrices = productsData.map(p => p.price);
    const minProductPrice = Math.min(...allPrices);
    const maxProductPrice = Math.max(...allPrices);

    const productContainerRef = React.useRef<HTMLDivElement>(null);

    const [productCount, setProductCount] = React.useState<number>(productsData.length);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [products, setProducts] = React.useState<Product[]>(productData);
    const [displayProducts, setDisplayProducts] = React.useState<Product[]>(productsData.slice(0, 5));
    const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = React.useState<number>(1);
    const [hasMore, setHasMore] = React.useState<boolean>(true);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [categories, setCategories] = React.useState<string[]>([]);
    const [priceRange, setPriceRange] = React.useState<number[]>([minProductPrice, maxProductPrice]);
    const [openFilter, setOpenFilter] = React.useState<boolean>(false);

    const debounceTimeout = React.useRef<NodeJS.Timeout | null>(null);
    const itemsPerPage = 5;

    /**
     * Extracts all unique product categories.
     * @returns {string[]} Array of unique category names.
     */
    const productCategories = (): string[] => {
        const allCategories = products.flatMap((p) => p.product_category.name);
        return [...new Set(allCategories)];
    };

    /**
     * Loads additional products as user scrolls.
     */
    const loadMore = React.useCallback(() => {
        if (displayProducts.length >= filteredProducts.length) return;
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        setLoading(true);
        debounceTimeout.current = setTimeout(() => {
            const start = displayProducts.length;
            const end = start + itemsPerPage;
            const nextItems = filteredProducts.slice(start, end);
            if (nextItems.length > 0) {
                setDisplayProducts(prev => [...prev, ...nextItems]);
                if (start + nextItems.length >= filteredProducts.length) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
            setLoading(false);
        }, 500);
    }, [itemsPerPage, filteredProducts, displayProducts.length]);

    /**
     * Toggles a category filter.
     * @param category The category name.
     */
    const handleCategoryToggle = (category: string): void => {
        setCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    /**
     * Handles price range filter change.
     * @param newRange The updated range.
     */
    const handlePriceChange = (newRange: number[]): void => {
        setPriceRange(newRange);
    };

    /**
     * Applies filters to the product list.
     */
    const handleFilter = React.useCallback(() => {
        const filtered = products.filter((product) => {
            const inCategory =
                categories.length === 0 || categories.includes(product.product_category.name);
            const inPriceRange =
                product.price >= priceRange[0] && product.price <= priceRange[1];
            return inCategory && inPriceRange;
        });
        setFilteredProducts(filtered);
        setDisplayProducts(filtered.slice(0, itemsPerPage));
        setProductCount(filtered.length);
        setHasMore(filtered.length > itemsPerPage);
    }, [categories, priceRange, products, itemsPerPage]);

    useEffect(() => {
        setDisplayProducts(products.slice(0, itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleFilter();
    }, [categories, handleFilter, priceRange]);

    useEffect(() => {
        let debounceTimeout: NodeJS.Timeout;
        const handleScroll = () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                const scrollPosition = window.innerHeight + window.scrollY;
                const threshold = document.body.scrollHeight - 25;
                if (scrollPosition >= threshold && !loading) {
                    loadMore();
                }
            }, 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(debounceTimeout);
        };
    }, [loading, page, loadMore]);

    return (
        <div className="w-full flex flex-col" role="region" aria-label="Products container">
            <FilterBar
                productCount={productCount}
                openFilter={openFilter}
                onToggleFilter={() => setOpenFilter(!openFilter)}
            />
            <PriceFilter
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                openFilter={openFilter}
                min={minProductPrice}
                max={maxProductPrice}
            />
            <CategoryFilter
                categories={productCategories()}
                selectedCategories={categories}
                openFilter={openFilter}
                onCategoryToggle={handleCategoryToggle}
            />
            <InfiniteProductScroller
                loading={loading}
                products={displayProducts}
                ref={productContainerRef}
                id="product-scroll-container"
                hasMore={hasMore}
            />
        </div>
    );
};

/**
 * ToggleColorMode wrapper that provides MUI Theme context.
 * @returns {JSX.Element} Theme wrapped ProductsContainer.
 */
export default function ToggleColorMode(): JSX.Element {
    return (
        <ThemeProvider theme={lightTheme}>
            <ProductsContainer />
        </ThemeProvider>
    );
}
