"use client"

import React from 'react'
import { ThemeXProvider } from '../_context/ThemeContext';


const ThemeWrapper: React.FC<{
    children: React.ReactNode;
}> = ({
    children
}) => {



        return (
            <ThemeXProvider>

                {children}
            </ThemeXProvider>

        )
    }



export default ThemeWrapper;