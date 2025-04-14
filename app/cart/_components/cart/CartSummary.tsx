import { useCart } from '@/app/_context/CartContext';
import React, { JSX } from 'react';

/**
 * CartSummary Component
 *
 * Displays a financial breakdown of the current shopping cart, including subtotal,
 * taxes, discounts, shipping, and final total.
 *
 * @returns {JSX.Element} The cart summary section.
 */
const CartSummary = (): JSX.Element => {
    const { getCartTotal } = useCart();
    const subtotal = getCartTotal();
    const taxes = subtotal * 0.06;
    const discount = subtotal;
    const shipping = 0;
    const grandTotal = subtotal + taxes - discount + shipping;

    /**
     * SummaryRow Component
     *
     * Renders a single row in the summary breakdown.
     *
     * @param {string} label - Label for the row.
     * @param {string | number} value - Value to display next to the label.
     * @param {boolean} [isBold=false] - Whether the value text should be emphasized.
     * @param {'top' | 'bottom'} [rounded] - Controls border radius for visual styling.
     * @returns {JSX.Element} Summary row element.
     */
    const SummaryRow: React.FC<{
        label: string;
        value: string | number;
        isBold?: boolean;
        rounded?: 'top' | 'bottom';
    }> = ({ label, value, isBold = false, rounded }): JSX.Element => {
        const roundClass =
            rounded === 'top'
                ? 'rounded-tl-4xl'
                : rounded === 'bottom'
                    ? 'rounded-bl-4xl'
                    : '';

        return (
            <div className="flex justify-between items-center" role="row">
                <div className={`bg-gray-300 w-1/2 px-6 py-2 ${roundClass}`} role="cell">
                    <p className="text-white font-bold" aria-label={`${label} label`}>{label}</p>
                </div>
                <p
                    className={`w-1/2 mr-6 text-right ${isBold ? 'font-extrabold' : 'font-bold'}`}
                    aria-label={`${label} value`}
                    role="cell"
                >
                    {value}
                </p>
            </div>
        );
    };

    return (
        <div
            className="w-full flex flex-col shadow-gray-300 shadow-lg rounded-4xl md:w-1/2"
            role="table"
            aria-label="Cart summary breakdown"
        >
            <SummaryRow label="Cart Total" value={`$${subtotal.toFixed(2)}`} rounded="top" />
            <SummaryRow label="Taxes" value={`$${taxes.toFixed(2)}`} />
            <SummaryRow label="Shipping" value="FREE" />
            <SummaryRow label="Discounts" value={`-$${discount.toFixed(2)}`} />
            <SummaryRow
                label="Grand Total"
                value={`$${grandTotal.toFixed(2)}`}
                isBold
                rounded="bottom"
            />
        </div>
    );
};

export default CartSummary;
