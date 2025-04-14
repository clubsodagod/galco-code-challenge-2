"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Represents a single item in the cart.
 */
export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}

/**
 * Describes the shape of the cart context value.
 */
interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    getTotalItems: () => number;
    getCartTotal: () => number;
}

// Local storage key
const LOCAL_STORAGE_KEY = "shopping-cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Provider component that wraps the app with access to the cart state.
 *
 * Syncs cart data to localStorage.
 */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    /**
     * Load cart data from localStorage when the provider mounts.
     */
    useEffect(() => {
        const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                }
            } catch (error) {
                console.error("Failed to parse cart from localStorage:", error);
            }
        }
    }, []);

    /**
     * Save the cart to localStorage whenever it changes.
     */
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    /**
     * Adds an item to the cart or updates its quantity if it already exists.
     *
     * @param item - The item to add or update in the cart.
     */
    const addToCart = (item: CartItem): void => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            } else {
                return [...prev, item];
            }
        });
    };

    /**
     * Removes an item from the cart by its ID.
     *
     * @param id - The ID of the item to remove.
     */
    const removeFromCart = (id: string): void => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    /**
     * Clears the entire cart.
     */
    const clearCart = (): void => {
        setCart([]);
    };

    /**
     * Increases the quantity of a specific cart item by 1.
     *
     * @param id - The ID of the item to increment.
     */
    const increaseQuantity = (id: string): void => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    /**
     * Decreases the quantity of a specific cart item by 1.
     * Removes the item if its quantity becomes 0.
     *
     * @param id - The ID of the item to decrement.
     */
    const decreaseQuantity = (id: string): void => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    /**
     * Gets the total number of items (sum of all quantities) in the cart.
     *
     * @returns The total item count.
     */
    const getTotalItems = (): number =>
        cart.reduce((total, item) => total + item.quantity, 0);

    /**
     * Gets the total monetary value of the cart.
     *
     * @returns The total price.
     */
    const getCartTotal = (): number =>
        cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseQuantity,
                decreaseQuantity,
                getTotalItems,
                getCartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

/**
 * Custom hook to access the cart context.
 *
 * @returns The cart context value.
 * @throws If used outside of CartProvider.
 */
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
