import { useCart } from '@/app/_context/CartContext';
import { Button, Snackbar } from '@mui/material';
import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartSummary from './CartSummary';
import CartLineItem from './CartLineItem';

/**
 * Cart Component
 *
 * Displays a list of items currently in the user's cart along with a summary and checkout CTA.
 * Implements semantic layout for item breakdown and utilizes ARIA for improved accessibility.
 *
 * @returns {JSX.Element} A complete cart view with item breakdown, summary, and checkout button.
 */
const Cart = (): JSX.Element => {
    const { cart, clearCart } = useCart();
    const router = useRouter();
    const [openSuccess, setOpenSuccess] = useState(false);

    const handleCheckout = () => {
        setOpenSuccess(true);            // show success message
        clearCart();                     // clear the cart

        setTimeout(() => {
            router.push('/');              // redirect after 2s
        }, 2000);
    };

    return (
        <div className='flex flex-col h-full pb-10' role='region' aria-label='Shopping cart container'>
            {/* Header Row */}
            <div className='w-full flex justify-between p-3 gap-3 h-fit' role='row' aria-label='Cart item headings'>
                <div className='flex-1/6 flex justify-center'>
                    <p className='text-left' role='columnheader'>Photo</p>
                </div>
                <div className='flex-2/5 justify-center'>
                    <p className='text-left' role='columnheader'>Name</p>
                </div>
                <div className='flex-1/5 justify-center'>
                    <p className='text-center' role='columnheader'>Quantity</p>
                </div>
                <div className='flex-1/5 justify-center'>
                    <p className='text-right' role='columnheader'>Total</p>
                </div>
            </div>

            {/* Cart Line Items */}
            {cart.length > 0 ? (
                cart.map((i, index) => (
                    <CartLineItem key={`${i.id} : ${i.name} key`} item={i} index={index} />
                ))
            ) : (
                <div className='w-full'>
                    <Link href='/'>
                        <p className='underline italic text-center'>There are no items in your cart. Shop Now!</p>
                    </Link>
                </div>
            )}

            {/* Summary + CTA */}
            <div className='w-full mt-10 flex flex-col md:justify-end md:items-end' aria-label='Cart summary and checkout'>
                <CartSummary />
                <div className='w-full mt-8 md:w-1/2 flex flex-col gap-4'>
                    <Button
                        variant='outlined'
                        color='secondary'
                        className='w-full'
                        onClick={() => {
                            // Optional confirmation
                            // if (window.confirm("Are you sure you want to clear the cart?")) {
                            clearCart();
                            // }
                        }}
                        role='button'
                        aria-label='Clear all items from your cart'
                    >
                        Clear Cart
                    </Button>
                    <Button
                        variant='contained'
                        className='w-full'
                        onClick={handleCheckout}
                        role='button'
                        aria-label='Proceed to checkout with Buy Now Pay Later option'
                    >
                        Checkout Now. Pay Later!
                    </Button>

                </div>

            </div>

            {/* Snackbar Notification */}
            <Snackbar
                open={openSuccess}
                onClose={() => setOpenSuccess(false)}
                autoHideDuration={2000}
                message="🎉 Checkout successful! Redirecting to homepage..."
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            />
        </div>
    );
};

export default Cart;
