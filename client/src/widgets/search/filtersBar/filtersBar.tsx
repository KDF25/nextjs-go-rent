import {
  FILTER_BATHS,
  FILTER_BEDS,
  FILTER_MAX_PRICE,
  FILTER_MIN_PRICE,
  PropertyTypeIcons,
} from "@shared/config";
import { cleanParams, cn } from "@shared/lib";
import {
  FiltersState,
  setFilters,
  setViewMode,
  toggleFiltersFullOpen,
  useAppDispatch,
  useAppSelector,
  VIEW_MODE,
} from "@shared/store";
import { Button, CustomSelect, Input, ViewMode } from "@shared/ui";
import { debounce } from "lodash";
import { Filter, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FC, useState } from "react";

export const FiltersBar: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen,
  );
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const [searchInput, setSearchInput] = useState(filters.location);

  const updateURL = debounce((newFilters: FiltersState) => {
    const cleanFilters = cleanParams(newFilters);
    const updatedSearchParams = new URLSearchParams();

    Object.entries(cleanFilters).forEach(([key, value]) => {
      updatedSearchParams.set(
        key,
        Array.isArray(value) ? value.join(",") : value.toString(),
      );
    });

    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  });

  const handleFilterChange = (
    key: string,
    value: any,
    isMin: boolean | null,
  ) => {
    let newValue = value;

    if (key === "priceRange" || key === "squareFeet") {
      const currentArrayRange = [...filters[key]];
      if (isMin !== null) {
        const index = isMin ? 0 : 1;
        currentArrayRange[index] = value === "any" ? null : Number(value);
      }
      newValue = currentArrayRange;
    } else if (key === "coordinates") {
      newValue = value === "any" ? [0, 0] : value.map(Number);
    } else {
      newValue = value === "any" ? "any" : value;
    }

    const newFilters = { ...filters, [key]: newValue };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };

  const handleLocationSearch = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchInput,
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`,
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: searchInput,
            coordinates: [lng, lat],
          }),
        );
      }
    } catch (err) {
      console.error("Error search location:", err);
    }
  };

  return (
    <div className="flex items-center justify-between w-full py-5">
      {/* Filters */}
      <div className="flex items-center justify-between gap-4 p-2">
        {/* All Filters */}
        <Button
          variant="outline"
          className={cn(
            "gap-2 rounded-xl border-primary-400 hover:bg-primary-500 hover:text-primary-100",
            isFiltersFullOpen && "bg-primary-700 text-primary-100",
          )}
          onClick={() => dispatch(toggleFiltersFullOpen())}
        >
          <Filter className="w-4 h-4" />
          <span>All Filters</span>
        </Button>

        <div className="flex items-center">
          <Input
            placeholder="Search location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-40 border-r-0 rounded-r-none rounded-l-xl border-primary-400"
          />
          <Button
            onClick={handleLocationSearch}
            className={`rounded-r-xl rounded-l-none border-l-none border-primary-400 shadow-none 
                border hover:bg-primary-700 hover:text-primary-50`}
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>

        {/* Price Range */}
        <div className="flex gap-1">
          <CustomSelect
            value={filters.priceRange[0]?.toString() || "any"}
            onChange={(value) => handleFilterChange("priceRange", value, true)}
            placeholder="Min Price"
            className="w-22"
            options={[
              { label: "Any Min Price", value: "any" },
              ...FILTER_MIN_PRICE.map((p) => ({
                label: `$${p / 1000}k+`,
                value: p.toString(),
              })),
            ]}
          />

          {/* Maximum Price Selector */}
          <CustomSelect
            value={filters.priceRange[1]?.toString() || "any"}
            onChange={(value) => handleFilterChange("priceRange", value, false)}
            placeholder="Max Price"
            className="w-22"
            options={[
              { label: "Any Max Price", value: "any" },
              ...FILTER_MAX_PRICE.map((p) => ({
                label: `<$${p / 1000}k`,
                value: p.toString(),
              })),
            ]}
          />
        </div>

        {/* Beds and Baths */}
        <div className="flex gap-1">
          {/* Beds */}
          <CustomSelect
            value={filters.beds}
            onChange={(value) => handleFilterChange("beds", value, null)}
            placeholder="Beds"
            className="w-26"
            options={FILTER_BEDS}
          />

          {/* Baths */}
          <CustomSelect
            value={filters.baths}
            onChange={(value) => handleFilterChange("baths", value, null)}
            placeholder="Baths"
            className="w-26"
            options={FILTER_BATHS}
          />
        </div>

        {/* Property Type */}
        <CustomSelect
          value={filters.propertyType || "any"}
          onChange={(value) => handleFilterChange("propertyType", value, null)}
          placeholder="Home Type"
          className="w-32"
          options={[
            { label: "Any Property Type", value: "any" },
            ...Object.entries(PropertyTypeIcons).map(([type, Icon]) => ({
              label: type,
              value: type,
              icon: <Icon className="w-4 h-4" />,
            })),
          ]}
        />
      </div>

      {/* View Mode */}
      <div className="flex items-center justify-between gap-4 p-2">
        <ViewMode
          viewMode={viewMode}
          onClickList={() => dispatch(setViewMode(VIEW_MODE.LIST))}
          onClickGrid={() => dispatch(setViewMode(VIEW_MODE.GRID))}
        />
      </div>
    </div>
  );
};
