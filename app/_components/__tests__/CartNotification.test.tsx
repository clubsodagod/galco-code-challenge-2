import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CartNotification from '../CartNotification';
import '@testing-library/jest-dom';

describe('CartNotification', () => {
    const mockItem = {
        id: '1',
        name: 'Test Product',
        price: 20,
        quantity: 1,
        image: '/test.jpg',
    };

    it('renders added message correctly', () => {
        render(<CartNotification item={mockItem} action="added" qty={2} />);
        expect(screen.getByRole('alert')).toHaveTextContent('2 Test Products added to cart.');
    });

    it('renders removed message correctly', () => {
        render(<CartNotification item={mockItem} action="removed" qty={1} />);
        expect(screen.getByRole('alert')).toHaveTextContent('1 Test Product removed from cart.');
    });

    it('auto-dismisses after 2500ms', async () => {
        render(<CartNotification item={mockItem} action="added" qty={1} />);
        const alert = screen.getByRole('alert');
        expect(alert).toBeInTheDocument();

        await waitFor(() => {
            expect(alert).not.toBeInTheDocument();
        }, { timeout: 3000 });
    });
});
