"use client";

import { Button, Input } from "@shared/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

export const HeroSection: FC = () => {
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
                onChange={() => {}}
                value="search query"
                placeholder="Search by city, neighborhood and address"
                className="w-full h-12 max-w-lg bg-white border-none rounded-none rounded-l-xl"
              />
              <Button className="h-12 text-white border-none rounded-none rounded-r-xl bg-secondary-500 hover:bg-secondary-600">
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
