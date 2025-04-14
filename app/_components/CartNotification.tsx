"use client";

import React, { JSX } from 'react';
import { CartItem } from '../_context/CartContext';
import { Snackbar, SnackbarCloseReason } from '@mui/material';

/**
 * CartNotification Component
 *
 * Displays a temporary snackbar notification when a cart item is added or removed.
 *
 * @param {CartItem} item - The cart item involved in the action.
 * @param {"added" | "removed"} action - The type of action performed.
 * @param {number} qty - The quantity affected by the action.
 * @returns {JSX.Element} A MUI Snackbar component with accessible alert messaging.
 */
const CartNotification: React.FC<{
    item: CartItem;
    action: "added" | "removed";
    qty: number;
}> = ({ item, action, qty }): JSX.Element => {
    const [open, setOpen] = React.useState(true);

    /**
     * Handles closing of the Snackbar unless triggered by a clickaway event.
     *
     * @param {React.SyntheticEvent | Event} event - The closing event.
     * @param {SnackbarCloseReason} [reason] - Optional reason for closure.
     */
    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    /**
     * Generates the message displayed in the notification.
     * @returns {string} Formatted action message for the item.
     */
    const message = (): string => {
        const plural = qty > 1 ? 's' : '';
        return `${qty} ${item.name}${plural} ${action} to cart.`;
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={handleClose}
            message={message()}
            key="topcenter"
            autoHideDuration={2500}
            role="alert"
            aria-live="assertive"
        />
    );
};

export default CartNotification;