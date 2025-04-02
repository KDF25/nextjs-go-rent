"use client";

import { FeaturesCard, FeaturesCardsData } from "@entities/landing";
import {
  FeaturesContainerVariants,
  FeaturesItemVariants,
} from "@shared/config";
import { motion } from "framer-motion";
import { FC } from "react";

export const FeaturesSection: FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={FeaturesContainerVariants}
      className="px-6 py-24 bg-white sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-4xl mx-auto xl:max-w-6xl">
        <motion.h2
          variants={FeaturesItemVariants}
          className="w-full mx-auto mb-12 text-3xl font-bold text-center sm:w-2/3"
        >
          Quickly find the home you want using our effective search filters!
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 xl:gap-16">
          {FeaturesCardsData.map((card, index) => (
            <motion.div key={index} variants={FeaturesItemVariants}>
              <FeaturesCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
