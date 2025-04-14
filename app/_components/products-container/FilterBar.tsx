"use client";

import React from 'react';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

/**
 * Props for the FilterBar component.
 */
export interface FilterBarProps {
    productCount: number;
    openFilter: boolean;
    onToggleFilter: () => void;
}

/**
 * FilterBar Component
 *
 * Displays the product count and a toggle button to show/hide filter options.
 *
 * @component
 * @param {FilterBarProps} props - Props including product count and filter toggle handler
 * @returns {JSX.Element} Rendered filter bar UI
 */
const FilterBar: React.FC<FilterBarProps> = ({ productCount, openFilter, onToggleFilter }) => {
    return (
        <div className="w-full flex justify-between" role="region" aria-label="Filter bar">
            <div>
                <p>
                    <span className="font-bold">{productCount}</span> Products
                </p>
            </div>
            <div>
                <span
                    onClick={onToggleFilter}
                    className={`${openFilter ? "text-violet-500 font-bold" : ""}`}
                    role="button"
                    aria-pressed={openFilter}
                >
                    Filter
                    <button aria-label="Toggle filter options">
                        <FilterAltRoundedIcon />
                    </button>
                </span>
            </div>
        </div>
    );
};

export default FilterBar;
