import { CardProps } from "@entities/user";
import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

export const CardCompact: FC<CardProps> = ({
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
    <div className="flex w-full h-40 mb-5 overflow-hidden bg-white shadow-lg rounded-xl">
      <div className="relative w-1/3">
        <Image
          src={imgSrc}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc("/placeholder.jpg")}
        />
        <div className="absolute flex flex-col gap-1 bottom-2 left-2">
          {property.isPetsAllowed && (
            <span className="px-2 py-1 text-xs font-semibold text-black rounded-full bg-white/80 w-fit">
              Pets
            </span>
          )}
          {property.isParkingIncluded && (
            <span className="px-2 py-1 text-xs font-semibold text-black rounded-full bg-white/80">
              Parking
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between w-2/3 p-4">
        <div>
          <div className="flex items-start justify-between">
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
            {showFavoriteButton && (
              <button
                className="p-1 bg-white rounded-full"
                onClick={onFavoriteToggle}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
                  }`}
                />
              </button>
            )}
          </div>
          <p className="mb-1 text-sm text-gray-600">
            {property?.location?.address}, {property?.location?.city}
          </p>
          <div className="flex items-center text-sm">
            <Star className="w-3 h-3 mr-1 text-yellow-400" />
            <span className="font-semibold">
              {property.averageRating.toFixed(1)}
            </span>
            <span className="ml-1 text-gray-600">
              ({property.numberOfReviews})
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex gap-2 text-gray-600">
            <span className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.beds}
            </span>
            <span className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {property.baths}
            </span>
            <span className="flex items-center">
              <House className="w-4 h-4 mr-1" />
              {property.squareFeet}
            </span>
          </div>

          <p className="text-base font-bold">
            ${property.pricePerMonth.toFixed(0)}
            <span className="text-xs font-normal text-gray-600"> /mo</span>
          </p>
        </div>
      </div>
    </div>
  );
};
