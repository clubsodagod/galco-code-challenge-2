"use client";

import React, { JSX } from 'react';
import { Slider, ThemeProvider } from '@mui/material';
import lightTheme from '@/app/_library/themes/light-theme';

/**
 * Props for the PriceFilter component.
 */
export interface PriceFilterProps {
    priceRange: number[];
    onPriceChange: (newRange: number[]) => void;
    openFilter: boolean;
    min: number;
    max: number;
}

/**
 * PriceFilter Component
 *
 * Renders a slider to filter products by price range.
 *
 * @component
 * @param {PriceFilterProps} props - Props including price range state and handlers
 * @returns {JSX.Element} Rendered price slider
 */
const PriceFilter: React.FC<PriceFilterProps> = ({
    priceRange,
    onPriceChange,
    openFilter,
    min,
    max
}: PriceFilterProps): JSX.Element => {
    const valuetext = (value: number) => `$${value.toFixed(2)}`;

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        onPriceChange(newValue as number[]);
    };



    return (
        <ThemeProvider theme={lightTheme}>
            <div className={`${openFilter ? "block" : "hidden"} w-full mt-4 md:w-1/2`} aria-hidden={!openFilter}>
                <h3 className="font-semibold mb-2">Filter by Price</h3>
                <div className="w-full py-6 px-6" >
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        onChange={handleSliderChange}
                        valueLabelDisplay="on"
                        valueLabelFormat={valuetext}
                        getAriaValueText={valuetext}
                        min={min}
                        max={max}
                        disableSwap
                    />
                </div>
            </div>
        </ThemeProvider>

    );
};


export default PriceFilter