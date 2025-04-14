"use client"

import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CartProvider } from '../_context/CartContext';
import ThemeWrapper from './ThemeWrapper';

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <AppRouterCacheProvider
            options={{ key: 'css', enableCssLayer: true }}
        >
                <ThemeWrapper>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </ThemeWrapper>

        </AppRouterCacheProvider>
    )
}



export default LayoutWrapper;

