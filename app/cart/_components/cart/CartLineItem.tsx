import { CartItem, useCart } from "@/app/_context/CartContext";
import { IconButton } from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

/**
 * CartLineItem Component
 *
 * Renders a single line item in the shopping cart with controls to increase or decrease quantity.
 * Implements accessible, semantic layout using buttons and ARIA roles.
 *
 * @param {CartItem} item - The cart item to display.
 * @param {number} index - The index of the item in the cart array for styling purposes.
 * @returns {JSX.Element} The rendered line item.
 */
const CartLineItem: React.FC<{ item: CartItem; index: number }> = ({ item, index }) => {
    const { increaseQuantity, decreaseQuantity, cart } = useCart();

    return (
        <motion.div
            className={`min-w-full min-h-fit relative shadow-xl p-3 ${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-100'
                } flex gap-3 justify-between items-center text-sm ${index === 0 ? "rounded-t-4xl" : index === cart.length - 1 ? "rounded-b-4xl" : ''} h-fit text-black px-6`}
            role="row"
            aria-label={`Cart item row for ${item.name}`}
        >
            {/* Product Image */}
            <div className="min-w-1/6 h-[50px] flex justify-left" role="cell">
                <Image
                    alt={item.name}
                    src={item.image || ''}
                    sizes="100vw"
                    width={9}
                    height={16}
                    className="min-w-full min-h-full rounded-4xl object-cover"
                />
            </div>

            {/* Name and Price */}
            <div className="w-2/5 justify-center flex flex-col gap-1" role="cell">
                <p className="text-left font-bold" aria-label="Product name">{item.name}</p>
                <p className="text-left" aria-label="Product price">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="w-1/5 flex justify-center items-center gap-1" role="cell" aria-label="Quantity controls">
                <IconButton
                    size="small"
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label={`Decrease quantity of ${item.name}`}
                >
                    <RemoveCircleRoundedIcon fontSize="small" />
                </IconButton>
                <p className="text-center w-6" aria-label={`Quantity of ${item.name}`}>{item.quantity}</p>
                <IconButton
                    size="small"
                    onClick={() => increaseQuantity(item.id)}
                    aria-label={`Increase quantity of ${item.name}`}
                >
                    <AddCircleRoundedIcon fontSize="small" />
                </IconButton>
            </div>

            {/* Line Total */}
            <div className="w-1/5 justify-center" role="cell">
                <p className="text-right" aria-label="Line total">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </motion.div>
    );
};

export default CartLineItem;
