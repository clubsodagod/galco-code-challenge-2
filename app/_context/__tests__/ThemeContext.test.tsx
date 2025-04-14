import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { ThemeXProvider, useTheme } from '../ThemeContext';

const mockMatchMedia = () =>
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

describe('ThemeContext', () => {
    beforeEach(() => {
        localStorage.clear();
        mockMatchMedia();
    });

    it('defaults to light theme', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeXProvider>{children}</ThemeXProvider>
        );
        const { result } = renderHook(() => useTheme(), { wrapper });
        expect(result.current.theme).toBe('light');
    });

    it('toggles the theme and persists in localStorage', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeXProvider>{children}</ThemeXProvider>
        );
        const { result } = renderHook(() => useTheme(), { wrapper });

        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe('dark');
        expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('loads theme from localStorage if set', () => {
        localStorage.setItem('theme', 'dark');

        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeXProvider>{children}</ThemeXProvider>
        );
        const { result } = renderHook(() => useTheme(), { wrapper });

        expect(result.current.theme).toBe('dark');
    });
});
