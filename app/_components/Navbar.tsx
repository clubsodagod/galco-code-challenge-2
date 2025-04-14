"use client";

import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Link from 'next/link';
import { Switch, ThemeProvider, useColorScheme } from '@mui/material';
import lightTheme from '../_library/themes/light-theme';

const Navbar = () => {
    const { mode, systemMode, setMode } = useColorScheme();

    // Determine effective color mode
    const effectiveMode = mode === 'system' ? systemMode : mode;

    // Cycle: light → dark → system → light
    const toggleDarkTheme = React.useCallback(() => {
        if (mode === 'light') {
            setMode('dark');
        } else if (mode === 'dark') {
            setMode('light');
        } else {
            if (systemMode) {
                setMode(systemMode.toLowerCase() === 'light' ? 'dark' : 'light');
            }
            
        }
    }, [mode, setMode]);

    if (!mode) return null;

    return (
        <nav>
            <div className="w-full flex justify-between items-center py-3 sticky">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-2xl">Hello World Shop</h1>
                </Link>

                {/* Theme Toggle */}
                <div className="flex items-center gap-2">
                    <Switch
                        checked={effectiveMode === 'dark'}
                        onChange={toggleDarkTheme}
                        aria-label="Toggle dark mode"
                    />
                    <span className="text-sm capitalize text-gray-500 dark:text-gray-300">
                        {mode}
                    </span>
                </div>

                {/* Cart Link */}
                <Link href="/cart">
                    <ShoppingCartRoundedIcon
                        fontSize="large"
                        className="text-black dark:text-white"
                    />
                </Link>
            </div>
        </nav>
    );
};

export default function ToggleColorMode() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Navbar />
        </ThemeProvider>
    );
}
