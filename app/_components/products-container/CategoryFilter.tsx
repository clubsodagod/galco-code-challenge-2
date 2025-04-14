"use client";

import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

/**
 * Props for the CategoryFilter component.
 */
export interface CategoryFilterProps {
    categories: string[];
    selectedCategories: string[];
    openFilter: boolean;
    onCategoryToggle: (category: string) => void;
}

/**
 * CategoryFilter Component
 *
 * Renders a list of checkboxes for category filtering.
 *
 * @component
 * @param {CategoryFilterProps} props - Props including category data and toggle handler
 * @returns {JSX.Element} Rendered category filter UI
 */
const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    selectedCategories,
    openFilter,
    onCategoryToggle
}) => {
    return (
        <div className={`${openFilter ? "block" : "hidden"}`} aria-hidden={!openFilter}>
            <h3 className="font-semibold mb-2">Filter by Category</h3>
            <FormGroup>
                <div className="flex flex-wrap">
                    {categories.map((c, i) => (
                        <FormControlLabel
                            key={`${c}-${i}`}
                            control={
                                <Checkbox
                                    name={c}
                                    checked={selectedCategories.includes(c)}
                                    onChange={() => onCategoryToggle(c)}
                                    inputProps={{ 'aria-label': `${c} category` }}
                                />
                            }
                            label={c}
                            className="w-fit flex-auto"
                        />
                    ))}
                </div>
            </FormGroup>
        </div>
    );
};

export default CategoryFilter;
