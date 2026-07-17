import React from 'react';

interface FilterBarProps {
  categories: string[];
  locations: string[];
  selectedCategory: string;
  selectedLocation: string;
  onCategoryChange: (val: string) => void;
  onLocationChange: (val: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  locations,
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationChange,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <div className="flex flex-col">
        <label htmlFor="category-select" className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Filter by Category</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="block w-full py-3 px-4 border border-slate-200 bg-white rounded-xl text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm shadow-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="location-select" className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Filter by Sector Area</label>
        <select
          id="location-select"
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="block w-full py-3 px-4 border border-slate-200 bg-white rounded-xl text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm shadow-sm"
        >
          <option value="">All Sectors / Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
    </div>
  );
};