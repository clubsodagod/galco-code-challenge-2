"use client";

import { CartItem, useCart } from "@/app/_context/CartContext";
import React, { useEffect, useRef, useState } from "react";
import CartNotification from "./CartNotification";

/**
 * Notification type for tracking cart changes.
 */
type Notification = {
    item: CartItem;
    action: "added" | "removed";
    qty: number;
};

/**
 * NotificationsWrapper Component
 *
 * Wraps application content and listens to changes in cart state.
 * Renders accessible notifications for items being added or removed.
 *
 * @param {React.ReactNode} children - The children components wrapped inside the notification handler.
 * @returns {JSX.Element} - The UI wrapper with cart notifications and children content.
 */
const NotificationsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const { cart } = useCart();

    // Track previous cart state
    const prevCartRef = useRef<CartItem[]>([]);

    /**
     * Detects added/removed items in cart on each cart change.
     * Updates notification state accordingly.
     */
    useEffect(() => {
        const prevCart:CartItem[] = prevCartRef.current;
        const newCart:CartItem[] = cart;

        // Detect added items or quantity increases
        newCart.forEach((newItem) => {
            const oldItem = prevCart.find((item) => item.id === newItem.id);
            if (!oldItem) {
                setNotifications((n) => [...n, { item: newItem, action: "added", qty: newItem.quantity }]);
            } else if (newItem.quantity > oldItem.quantity) {
                setNotifications((n) => [...n, {
                    item: newItem,
                    action: "added",
                    qty: newItem.quantity - oldItem.quantity
                }]);
            }
        });

        // Detect removed items or quantity decreases
        prevCart.forEach((oldItem) => {
            const newItem = newCart.find((item) => item.id === oldItem.id);
            if (!newItem) {
                setNotifications((n) => [...n, { item: oldItem, action: "removed", qty: oldItem.quantity }]);
            } else if (newItem.quantity < oldItem.quantity) {
                setNotifications((n) => [...n, {
                    item: oldItem,
                    action: "removed",
                    qty: oldItem.quantity - newItem.quantity
                }]);
            }
        });

        // Update previous cart reference for next effect run
        prevCartRef.current = cart;
    }, [cart]);

    return (
        <>
            {notifications.map((notification, index) => (
                <CartNotification
                    key={`${notification.item.id}-${notification.action}-${index}`}
                    item={notification.item}
                    action={notification.action}
                    qty={notification.qty}
                    aria-live="polite"
                />
            ))}
            <div role="main" aria-label="Application content">
                {children}
            </div>
        </>
    );
};

export default NotificationsWrapper;
