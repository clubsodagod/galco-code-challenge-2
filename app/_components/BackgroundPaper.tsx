"use client"

import { Paper } from '@mui/material';
import React from 'react'


const BackgroundPaper: React.FC<{
    children:React.ReactNode;
}> = ({
    children
    }) => {

    
    return (
        <Paper
            className="background-paper px-6 py-3"
        >
            {children}
        </Paper>
    )
}



export default BackgroundPaper;