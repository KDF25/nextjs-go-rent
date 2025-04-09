"use client";

import { useGetAuthUserQuery } from "@entities/user";
import {
  ApplicationModal,
  Contact,
  ImagePreviews,
  PropertyDetails,
  PropertyLocation,
  PropertyOverview,
} from "@widgets/listing";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { id } = useParams();
  const propertyId = Number(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: authUser } = useGetAuthUserQuery();

  return (
    <div>
      <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      />
      <div className="flex flex-col justify-center gap-10 mx-10 mt-16 mb-8 md:flex-row md:w-2/3 md:mx-auto">
        <div className="order-2 md:order-1">
          <PropertyOverview propertyId={propertyId} />
          <PropertyDetails propertyId={propertyId} />
          <PropertyLocation propertyId={propertyId} />
        </div>

        <div className="order-1 md:order-2">
          <Contact onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </div>

      {authUser && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          propertyId={propertyId}
        />
      )}
    </div>
  );
}
