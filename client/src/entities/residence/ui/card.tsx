import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { CardProps } from "../types";

export const Card: FC<CardProps> = ({
  property,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  propertyLink,
}) => {
  const [imgSrc, setImgSrc] = useState(
    property.photoUrls?.[0] || "/placeholder.jpg",
  );

  return (
    <div className="w-full mb-5 overflow-hidden bg-white shadow-lg rounded-xl">
      <div className="relative">
        <div className="relative w-full h-48">
          <Image
            src={imgSrc}
            alt={property.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
        <div className="absolute flex gap-2 bottom-4 left-4">
          {property.isPetsAllowed && (
            <span className="px-2 py-1 text-xs font-semibold text-black rounded-full bg-white/80">
              Pets Allowed
            </span>
          )}
          {property.isParkingIncluded && (
            <span className="px-2 py-1 text-xs font-semibold text-black rounded-full bg-white/80">
              Parking Included
            </span>
          )}
        </div>
        {showFavoriteButton && (
          <button
            className="absolute p-2 bg-white rounded-full cursor-pointer bottom-4 right-4 hover:bg-white/90"
            onClick={onFavoriteToggle}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>
      <div className="p-4">
        <h2 className="mb-1 text-xl font-bold">
          {propertyLink ? (
            <Link
              href={propertyLink}
              className="hover:underline hover:text-blue-600"
              scroll={false}
            >
              {property.name}
            </Link>
          ) : (
            property.name
          )}
        </h2>
        <p className="mb-2 text-gray-600">
          {property?.location?.address}, {property?.location?.city}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            <span className="font-semibold">
              {property.averageRating.toFixed(1)}
            </span>
            <span className="ml-1 text-gray-600">
              ({property.numberOfReviews} Reviews)
            </span>
          </div>
          <p className="mb-3 text-lg font-bold">
            ${property.pricePerMonth.toFixed(0)}{" "}
            <span className="text-base font-normal text-gray-600"> /month</span>
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4 mt-5 text-gray-600">
          <span className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            {property.beds} Bed
          </span>
          <span className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            {property.baths} Bath
          </span>
          <span className="flex items-center">
            <House className="w-5 h-5 mr-2" />
            {property.squareFeet} sq ft
          </span>
        </div>
      </div>
    </div>
  );
};
