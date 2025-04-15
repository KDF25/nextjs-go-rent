import { useGetPropertyQuery } from "@entities/residence";
import {
  AmenityEnum,
  AmenityIcons,
  HighlightEnum,
  HighlightIcons,
} from "@shared/config";
import { formatEnumString } from "@shared/lib";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui";
import { HelpCircle } from "lucide-react";
import React, { FC } from "react";

interface PropertyDetailsProps {
  propertyId: number;
}

export const PropertyDetails: FC<PropertyDetailsProps> = ({ propertyId }) => {
  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertyQuery(propertyId);

  if (isLoading) return <>Loading...</>;
  if (isError || !property) {
    return <>Property not Found</>;
  }

  return (
    <div className="mb-6">
      {/* Amenities */}
      <div>
        <h2 className="my-3 text-xl font-semibold">Property Amenities</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {property.amenities.map((amenity: AmenityEnum) => {
            const Icon = AmenityIcons[amenity as AmenityEnum] || HelpCircle;
            return (
              <div
                key={amenity}
                className="flex flex-col items-center px-4 py-8 border rounded-xl"
              >
                <Icon className="w-8 h-8 mb-2 text-gray-700" />
                <span className="text-sm text-center text-gray-700">
                  {formatEnumString(amenity)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-12 mb-16">
        <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
          Highlights
        </h3>
        <div className="grid w-full grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {property.highlights.map((highlight: HighlightEnum) => {
            const Icon =
              HighlightIcons[highlight as HighlightEnum] || HelpCircle;
            return (
              <div
                key={highlight}
                className="flex flex-col items-center px-4 py-8 border rounded-xl"
              >
                <Icon className="w-8 h-8 mb-2 text-primary-600 dark:text-primary-300" />
                <span className="text-sm text-center text-primary-600 dark:text-primary-300">
                  {formatEnumString(highlight)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabs Section */}
      <div>
        <h3 className="mb-5 text-xl font-semibold text-primary-800 dark:text-primary-100">
          Fees and Policies
        </h3>
        <p className="mt-2 text-sm text-primary-600 dark:text-primary-300">
          The fees below are based on community-supplied data and may exclude
          additional fees and utilities.
        </p>
        <Tabs defaultValue="required-fees" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="required-fees">Required Fees</TabsTrigger>
            <TabsTrigger value="pets">Pets</TabsTrigger>
            <TabsTrigger value="parking">Parking</TabsTrigger>
          </TabsList>
          <TabsContent value="required-fees" className="w-1/3">
            <p className="mt-5 mb-2 font-semibold">One time move in fees</p>
            <hr />
            <div className="flex justify-between py-2 bg-secondary-50">
              <span className="font-medium text-primary-700">
                Application Fee
              </span>
              <span className="text-primary-700">
                ${property.applicationFee}
              </span>
            </div>
            <hr />
            <div className="flex justify-between py-2 bg-secondary-50">
              <span className="font-medium text-primary-700">
                Security Deposit
              </span>
              <span className="text-primary-700">
                ${property.securityDeposit}
              </span>
            </div>
            <hr />
          </TabsContent>
          <TabsContent value="pets">
            <p className="mt-5 mb-2 font-semibold">
              Pets are {property.isPetsAllowed ? "allowed" : "not allowed"}
            </p>
          </TabsContent>
          <TabsContent value="parking">
            <p className="mt-5 mb-2 font-semibold">
              Parking is{" "}
              {property.isParkingIncluded ? "included" : "not included"}
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
