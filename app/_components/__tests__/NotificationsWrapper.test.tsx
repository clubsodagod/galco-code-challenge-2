import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationsWrapper from '../NotificationsWrapper';
import '@testing-library/jest-dom';
import { useCart } from '@/app/_context/CartContext';

jest.mock('@/app/_context/CartContext', () => ({
    useCart: jest.fn(),
}));

jest.mock('../CartNotification', () => ({
    __esModule: true,
    default: ({ item, action, qty }: { item: { name: string }; action: 'added' | 'removed'; qty: number }) => (
        <div data-testid="cart-notification">
            {action === 'added' ? `Added ${qty} ${item.name}` : `Removed ${qty} ${item.name}`}
        </div>
    ),
}));


describe('NotificationsWrapper', () => {
    const baseItem = {
        id: '1',
        name: 'Test Product',
        price: 10,
        image: '/test.jpg',
        quantity: 1,
    };

    it('renders children without notifications by default', () => {
        (useCart as jest.Mock).mockReturnValue({ cart: [] });

        render(
            <NotificationsWrapper>
                <div>Child Component</div>
            </NotificationsWrapper>
        );

        expect(screen.getByText('Child Component')).toBeInTheDocument();
        expect(screen.queryByTestId('cart-notification')).not.toBeInTheDocument();
    });

    it('shows notification when item is added to cart', () => {
        (useCart as jest.Mock).mockReturnValueOnce({ cart: [] }) // initial
            .mockReturnValue({ cart: [{ ...baseItem, quantity: 2 }] }); // simulate add

        const { rerender } = render(
            <NotificationsWrapper>
                <div>Test</div>
            </NotificationsWrapper>
        );

        rerender(
            <NotificationsWrapper>
                <div>Test</div>
            </NotificationsWrapper>
        );

        expect(screen.getByTestId('cart-notification')).toHaveTextContent('Added 2 Test Product');
    });

    it('shows notification when item is removed from cart', () => {
        (useCart as jest.Mock).mockReturnValueOnce({ cart: [{ ...baseItem, quantity: 2 }] }) // initial
            .mockReturnValue({ cart: [] }); // simulate removal

        const { rerender } = render(
            <NotificationsWrapper>
                <div>Test</div>
            </NotificationsWrapper>
        );

        rerender(
            <NotificationsWrapper>
                <div>Test</div>
            </NotificationsWrapper>
        );

        expect(screen.getByTestId('cart-notification')).toHaveTextContent('Removed 2 Test Product');
    });
});
