"use client";

import React, { JSX } from 'react';
import Cart from './cart/Cart';
import { AnimatePresence, motion } from 'framer-motion'; 

/**
 * CartModule Component
 *
 * Displays the cart page with smooth page transitions and accessible layout.
 *
 * @returns {JSX.Element} A React component that renders the full cart view.
 */
const CartModule = (): JSX.Element => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="cart-module"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex flex-col h-full py-5"
                role="region"
                aria-label="Cart module container"
            >
                <main className="flex flex-col w-full grow gap-12" role="main" aria-label="Cart content area">
                    <header>
                        <h1 className="text-6xl" tabIndex={0} aria-label="Cart heading">
                            Cart
                        </h1>
                    </header>

                    <section aria-label="Cart items and summary section">
                        <Cart />
                    </section>
                </main>
            </motion.div>
        </AnimatePresence>
    );
};

export default CartModule;
