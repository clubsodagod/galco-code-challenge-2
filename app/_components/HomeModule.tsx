"use client";

import React, { JSX } from "react";
import ProductsContainer from "./products-container/ProductsContainer";
import { AnimatePresence, motion } from "framer-motion"; // Use framer-motion not motion/react

/**
 * HomeModule Component
 *
 * This component serves as the landing layout for the products page.
 * It utilizes semantic HTML elements to organize the page structure,
 * follows accessibility best practices, and includes entrance/exit animations.
 *
 * @component
 * @returns {JSX.Element} A React component that renders the home module layout.
 */
const HomeModule = (): JSX.Element => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="home-module" // required by AnimatePresence
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex flex-col h-full"
                role="region"
                aria-label="Home module container"
            >
                <main
                    className="flex flex-col w-full grow gap-12"
                    role="main"
                    aria-label="Main content area"
                >
                    <h1
                        className="text-6xl"
                        tabIndex={0}
                        aria-label="Products heading"
                    >
                        Products
                    </h1>

                    <section aria-labelledby="products-listing">
                        <h2 id="products-listing" className="sr-only">
                            List of available products
                        </h2>
                        <ProductsContainer />
                    </section>
                </main>
            </motion.div>
        </AnimatePresence>
    );
};

export default HomeModule;
