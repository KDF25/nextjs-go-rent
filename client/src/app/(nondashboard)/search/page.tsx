"use client";

import { Suspense } from "react";
import { cleanParams } from "@shared/lib";
import { setFilters, useAppDispatch, useAppSelector } from "@shared/store";
import { FiltersBar, FiltersFull, Listings, Map } from "@widgets/search";
import { useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";

const SearchPage: FC = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen,
  );
  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange" || key === "squareFeet") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
        } else if (key === "coordinates") {
          acc[key] = value.split(",").map(Number);
        } else {
          acc[key] = value === "any" ? null : value;
        }

        return acc;
      },
      {},
    );

    const cleanedFilters = cleanParams(initialFilters);
    dispatch(setFilters(cleanedFilters));
  }, [searchParams, dispatch]);

  return (
    <div
      className="flex flex-col w-full px-5 mx-auto"
      style={{
        height: `calc(100vh - var(--height-navbar))`,
      }}
    >
      <FiltersBar />
      <div className="flex justify-between flex-1 gap-3 mb-5 overflow-hidden">
        <div
          className={`h-full overflow-auto transition-all duration-300 ease-in-out ${
            isFiltersFullOpen
              ? "w-3/12 opacity-100 visible"
              : "w-0 opacity-0 invisible"
          }`}
        >
          <FiltersFull />
        </div>
        <Map />
        <div className="overflow-y-auto basis-4/12">
          <Listings />
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
}
