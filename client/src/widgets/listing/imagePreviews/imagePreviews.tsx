"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";

interface ImagePreviewsProps {
  images: string[];
}

export const ImagePreviews: FC<ImagePreviewsProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[450px] w-full">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Property Image ${index + 1}`}
            fill
            priority={index == 0}
            className="object-cover transition-transform duration-500 ease-in-out cursor-pointer"
          />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-0 p-2 transform -translate-y-1/2 bg-opacity-50 rounded-full top-1/2 bg-primary-700 focus:outline-none focus:ring focus:ring-secondary-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 p-2 transform -translate-y-1/2 bg-opacity-50 rounded-full top-1/2 bg-primary-700 focus:outline-none focus:ring focus:ring-secondary-300"
        aria-label="Previous image"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
};
