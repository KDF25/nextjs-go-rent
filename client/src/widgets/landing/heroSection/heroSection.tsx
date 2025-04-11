"use client";

import { PATHS } from "@shared/config";
import { setFilters } from "@shared/store";
import { Button, Input } from "@shared/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

export const HeroSection: FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery,
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`,
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lat, lng],
          }),
        );
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng,
        });
        router.push(`${PATHS.SEARCH}?${params.toString()}`);
      }
    } catch (error) {
      console.error("error search location:", error);
    }
  };
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Go Rent Image"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/3"
        >
          <div className="px-16 mx-auto max-m-4xl sm:px-12 ">
            <h1 className="mb-4 text-5xl font-bold text-white">
              Start your journey to finding the perfect place to call home
            </h1>
            <p className="mb-8 text-xl text-white">
              Explore our wide range of rental properties tailored to fit your
              lifestyle and needs!
            </p>
            <div className="flex justify-center">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, neighborhood and address"
                className="w-full h-12 max-w-lg bg-white border-none rounded-none rounded-l-xl"
              />
              <Button
                onClick={handleLocationSearch}
                className="h-12 text-white border-none rounded-none rounded-r-xl bg-secondary-500 hover:bg-secondary-600"
              >
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
