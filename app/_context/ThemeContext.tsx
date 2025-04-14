"use client";

import React, { createContext, useContext, useEffect } from 'react';
import { Theme, useColorScheme } from '@mui/material';
import lightTheme from '../_library/themes/light-theme';
import darkTheme from '../_library/themes/dark-theme';

// Type for theme mode
type ThemeMode = 'light' | 'dark';

/**
 * ThemeContextType defines the values provided by the theme context
 */
type ThemeContextType = {
    mode: ThemeMode | 'system' | undefined;
    theme: Theme;
    toggleTheme: () => void;
    systemMode: 'light' | 'dark' | undefined;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeXProvider wraps the app in a theme context with MUI and Tailwind sync.
 */
export const ThemeXProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { mode, systemMode, setMode } = useColorScheme();
    const fallbackMode: ThemeMode | "system"  = mode ?? 'light';


    useEffect(() => {
        const html = document.documentElement;
        const appliedMode = fallbackMode || 'light';

        html.setAttribute('data-theme', appliedMode);
        localStorage.setItem('theme', appliedMode);

        // Sync Tailwind `dark` class
        if (appliedMode === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [fallbackMode]);

    const toggleTheme = () => {
        if (fallbackMode === 'light' || fallbackMode === 'dark') {
            setMode(fallbackMode === 'light' ? 'dark' : 'light');
        }
    };

    const theme = fallbackMode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ mode:fallbackMode, systemMode, theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Custom hook to access the theme context.
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeXProvider');
    return context;
};
