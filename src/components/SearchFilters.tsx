import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ConfigContext } from '../contexts/ConfigContext';
import { Car } from '../types';

interface SearchFiltersProps {
  isHomepage?: boolean;
  initialFilters?: FilterState;
  onSearch?: (filters: FilterState) => void;
  allCars?: Car[];
}

export interface FilterState {
  minPrice: string | number;
  maxPrice: string | number;
  minYear: string | number;
  maxYear: string | number;
  minMileage: string | number;
  maxMileage: string | number;
  make: string;
  model: string;
  trim: string;
  fuelType: string;
  transmission: string;
  engine: string;
  color: string;
  bodyStyle: string;
  orderBy: string;
}

export const MIN_PRICE = 0;
export const MAX_PRICE = 1_000_000;
export const MIN_YEAR = 2000;
export const MAX_YEAR = new Date().getFullYear() - 15;
export const MIN_MILEAGE = 0;
export const MAX_MILEAGE = 200_000;

const defaultFilterState: FilterState = {
  minPrice: MIN_PRICE.toString(),
  maxPrice: MAX_PRICE.toString(),
  minYear: MIN_YEAR.toString(),
  maxYear: MAX_YEAR.toString(),
  minMileage: MIN_MILEAGE.toString(),
  maxMileage: MAX_MILEAGE.toString(),
  make: '',
  model: '',
  trim: '',
  fuelType: '',
  transmission: '',
  engine: '',
  color: '',
  bodyStyle: '',
  orderBy: 'popularity',
};

export function SearchFilters({
  isHomepage = false,
  initialFilters,
  onSearch,
  allCars = [],
}: SearchFiltersProps) {
  const navigate = useNavigate();
  const config = useContext(ConfigContext);

  // 1. Lazy-initialize state from initialFilters (or use defaults)
  const [filters, setFilters] = useState<FilterState>(() => ({
    ...defaultFilterState,
    ...initialFilters,
  }));

  // 2. Sync when initialFilters changes
  const prevInitial = useRef(initialFilters);
  useEffect(() => {
    if (initialFilters && prevInitial.current !== initialFilters) {
      prevInitial.current = initialFilters;
      setFilters({ ...defaultFilterState, ...initialFilters });
    }
  }, [initialFilters]);

  // 3. Memoize dropdown data
  const makes = useMemo(() => [...new Set(allCars.map((c) => c.make))].sort(), [allCars]);
  const models = useMemo(() => {
    if (!filters.make) return [];
    return [...new Set(allCars.filter((c) => c.make === filters.make).map((c) => c.model))].sort();
  }, [allCars, filters.make]);
  const trims = useMemo(() => {
    if (!filters.make || !filters.model) return [];
    return [...new Set(
      allCars
        .filter((c) => c.make === filters.make && c.model === filters.model)
        .map((c) => c.trim)
    )]
      .filter(Boolean)
      .sort();
  }, [allCars, filters.make, filters.model]);

  // 4. helper to update state + immediately invoke onSearch
  const runSearch = (next: FilterState) => {
    setFilters(next);
    onSearch?.(next);
  };

  // 5. Clear all filters
  const clearFilters = () => {
    setFilters({ ...defaultFilterState });
    onSearch?.({ ...defaultFilterState });
  };

  // 6. Detect active filters
  const hasActiveFilters = useMemo(() => {
    return (
      filters.make !== '' ||
      filters.model !== '' ||
      filters.trim !== '' ||
      filters.fuelType !== '' ||
      filters.transmission !== '' ||
      filters.engine !== '' ||
      filters.color !== '' ||
      filters.bodyStyle !== '' ||
      filters.minPrice !== MIN_PRICE.toString() ||
      filters.maxPrice !== MAX_PRICE.toString() ||
      filters.minYear !== MIN_YEAR.toString() ||
      filters.maxYear !== MAX_YEAR.toString() ||
      filters.minMileage !== MIN_MILEAGE.toString() ||
      filters.maxMileage !== MAX_MILEAGE.toString()
    );
  }, [filters]);

  return (
    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Make */}
        <div>
          <label htmlFor="make" className="block text-sm font-medium text-gray-300 mb-2">
            Make
          </label>
          <select
            id="make"
            value={filters.make}
            onChange={(e) =>
              runSearch({ ...filters, make: e.target.value, model: '', trim: '' })
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Any Make</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-2">
            Model
          </label>
          <select
            id="model"
            value={filters.model}
            onChange={(e) =>
              runSearch({ ...filters, model: e.target.value, trim: '' })
            }
            disabled={!filters.make}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Any Model</option>
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Order By */}
        <div>
          <label htmlFor="orderBy" className="block text-sm font-medium text-gray-300 mb-2">
            Order By
          </label>
          <select
            id="orderBy"
            value={filters.orderBy}
            onChange={(e) =>
              runSearch({ ...filters, orderBy: e.target.value })
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="popularity">Popularity</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="yearAsc">Year: Oldest to Newest</option>
            <option value="yearDesc">Year: Newest to Oldest</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">
            Total Price ($CAD)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) =>
                runSearch({ ...filters, minPrice: e.target.value })
              }
              className="w-1/2 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) =>
                runSearch({ ...filters, maxPrice: e.target.value })
              }
              className="w-1/2 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* (Add remaining filters like Year, Mileage, Trim, Fuel, Transmission, Engine, Color, BodyStyle as needed) */}
      </div>

      {/* Clear All */}
      {hasActiveFilters && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg border border-red-600/20 hover:bg-red-600/30 transition-colors flex items-center gap-2"
          >
            <X size={20} />
            <span>Clear All</span>
          </button>
        </div>
      )}
    </div>
  );
}
