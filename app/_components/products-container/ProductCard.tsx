"use client";

import React, { JSX, useRef } from "react";
import { useCart } from "@/app/_context/CartContext";
import { Product } from "@/app/_library/product.data";
import { Button, useColorScheme } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ProductCardPaper from "./ProductCardPaper";

/**
 * Props for ProductCard
 */
interface ProductCardProps {
    product: Product;
    index?: number; // Optional index for stagger animation
}

/**
 * ProductCard Component
 *
 * Renders a stylized product card with animation and accessible controls.
 *
 * @component
 * @param {ProductCardProps} props - The product and optional index
 * @returns {JSX.Element}
 */
const ProductCard: React.FC<ProductCardProps> = ({ product   }: ProductCardProps): JSX.Element => {
    const { addToCart } = useCart();
    const { mode } = useColorScheme();

    const cardRef = useRef(null);
    const isInView = useInView(cardRef, {
        once: true, // Only animate once per scroll session
        margin: "-10% 0px",
    });

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
                duration: 0.125,
                ease: "easeOut", // stagger based on position
            }}
            className="w-full min-h-full relative rounded-4xl shadow-xl"
            aria-label={`Product card for ${product.name}`}
        >
            <ProductCardPaper>
                <Image
                    alt={product.name}
                    src={product.image}
                    sizes="100vw"
                    width={9}
                    height={16}
                    className="w-full h-[200px] rounded-t-4xl object-cover"
                />
                <motion.div className="w-full h-full flex flex-col gap-12 justify-end px-6 py-3 dark:text-[#fafafa]">
                    <span className="font-extrabold" tabIndex={0} aria-label="Product name">
                        {product.name}
                    </span>
                    <p className="line-clamp-2" tabIndex={0} aria-label="Product description">
                        {product.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                        <span className="font-bold" aria-label="Product price">
                            ${product.price}
                        </span>
                        <Button
                            onClick={handleAddToCart}
                            aria-label={`Add ${product.name} to cart`}
                            className="underline dark:text-[#fafafa]"
                            sx={{ color: mode === "dark" ? "#fafafa" : "inherit" }}
                        >
                            Add to Cart <AddShoppingCartRoundedIcon className="dark:text-[#fafafa]" />
                        </Button>
                    </div>
                </motion.div>
            </ProductCardPaper>
        </motion.div>
    );
};

export default ProductCard;
