"use client";

import { DiscoverCard, DiscoverCardsData } from "@entities/landing";
import {
  DiscoverContainerVariants,
  DiscoverItemVariants,
} from "@shared/config";
import { motion } from "framer-motion";
import { FC } from "react";

export const DiscoverSection: FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={DiscoverContainerVariants}
      className="py-12 mb-16 bg-white"
    >
      <div className="max-w-6xl px-6 mx-auto xl:max-w-7xl sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          variants={DiscoverItemVariants}
          className="my-12 text-center"
        >
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find your Dream Rental Property Today!
          </p>
          <p className="max-w-3xl mx-auto mt-2 text-gray-500">
            Searching for your dream rental property has never been easier. With
            our user-friendly search feature, you can quickly find the perfect
            home that meets all your needs. Start your search today and discover
            your dream rental property!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 lg:gap-12 xl:gap-16">
          {DiscoverCardsData.map((card, index) => (
            <motion.div key={index} variants={DiscoverItemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
