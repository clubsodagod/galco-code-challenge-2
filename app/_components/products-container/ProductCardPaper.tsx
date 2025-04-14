"use client"

import { Paper } from '@mui/material';
import React from 'react'


const ProductCardPaper: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {

    return (

        <Paper
            elevation={3}
            className='product-card'
        >
            {
                children
            }
        </Paper>
    )
}



export default ProductCardPaper;