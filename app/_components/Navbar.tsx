"use client"

import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Link from 'next/link';
import { Switch, ThemeProvider, useColorScheme } from '@mui/material';
import lightTheme from '../_library/themes/light-theme'



const Navbar = ({ }) => {
    
    const { mode, setMode } = useColorScheme();

    const toggleDarkTheme = React.useCallback(() => {
        if (mode) {
            const currMode = mode === 'dark' ? 'light' : 'dark';
            setMode(currMode);
        }
    }, [mode, setMode])


    if (!mode) {
        return null
    }


    return (
        <nav
        >
            <div
                className='w-full flex justify-between items-center py-3  sticky'
            >

                {/* Logo - Store Name */}

                <Link href={"/"}>
                    <h1
                        className='text-2xl'
                    >
                        Hello World Shop
                    </h1>
                </Link>

                <div>

                    <Switch
                        checked={mode === 'dark'}
                        onChange={() => toggleDarkTheme()}
                        aria-label={" 'aria-label': 'Toggle dark mode' "}
                    />
                </div>


                {/* cart button */}

                <Link href={'/cart'}>
                    <ShoppingCartRoundedIcon
                        fontSize='large'
                    className='text-black dark:text-white'
                    />
                </Link>

            </div>

        </nav>
    )
}


export default function ToggleColorMode() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Navbar />
        </ThemeProvider>
    );
}