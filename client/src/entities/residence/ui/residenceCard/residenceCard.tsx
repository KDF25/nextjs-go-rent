import { Lease, Property } from "@entities/user";
import { Download, MapPin, User } from "lucide-react";
import { FC } from "react";

interface ResidenceCardProps {
  property: Property;
  currentLease: Lease;
}

export const ResidenceCard: FC<ResidenceCardProps> = ({
  property,
  currentLease,
}) => {
  return (
    <div className="flex flex-col justify-between flex-1 p-6 overflow-hidden bg-white shadow-md rounded-xl">
      {/* Header */}
      <div className="flex gap-5">
        <div className="object-cover w-64 h-32 bg-slate-500 rounded-xl"></div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="px-4 py-1 text-sm font-semibold text-white bg-green-500 rounded-full w-fit">
              Active Leases
            </div>

            <h2 className="my-2 text-2xl font-bold">{property.name}</h2>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-1" />
              <span>
                {property.location.city}, {property.location.country}
              </span>
            </div>
          </div>
          <div className="text-xl font-bold">
            ${currentLease.rent}{" "}
            <span className="text-sm font-normal text-gray-500">/ night</span>
          </div>
        </div>
      </div>
      {/* Dates */}
      <div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <div className="xl:flex">
            <div className="mr-2 text-gray-500">Start Date: </div>
            <div className="font-semibold">
              {new Date(currentLease.startDate).toLocaleDateString()}
            </div>
          </div>
          <div className="border-[0.5px] border-primary-300 h-4" />
          <div className="xl:flex">
            <div className="mr-2 text-gray-500">End Date: </div>
            <div className="font-semibold">
              {new Date(currentLease.endDate).toLocaleDateString()}
            </div>
          </div>
          <div className="border-[0.5px] border-primary-300 h-4" />
          <div className="xl:flex">
            <div className="mr-2 text-gray-500">Next Payment: </div>
            <div className="font-semibold">
              {new Date(currentLease.endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      {/* Buttons */}
      <div className="flex justify-end w-full gap-2">
        <button className="flex items-center justify-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-primary-700 hover:text-primary-50">
          <User className="w-5 h-5 mr-2" />
          Manager
        </button>
        <button className="flex items-center justify-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-primary-700 hover:text-primary-50">
          <Download className="w-5 h-5 mr-2" />
          Download Agreement
        </button>
      </div>
    </div>
  );
};
