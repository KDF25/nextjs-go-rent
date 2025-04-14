"use client";

import {
  ApplicationCard,
  ROLES_APP,
  useGetApplicationsQuery,
  useGetAuthUserQuery,
} from "@entities/user";
import { Header, Loading } from "@shared/ui";
import { CircleCheckBig, Clock, Download, XCircle } from "lucide-react";

export default function ApplicationsPage() {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: applications,
    isLoading,
    isError,
  } = useGetApplicationsQuery({
    userId: authUser?.cognitoInfo?.userId,
    userType: "tenant",
  });

  if (isLoading) return <Loading />;
  if (isError || !applications) return <div>Error fetching applications</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Applications"
        subtitle="Track and manage your property rental applications"
      />
      <div className="w-full">
        {applications?.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            userType={ROLES_APP.RENTER}
          >
            <div className="flex justify-between w-full gap-5 px-4 pb-4">
              {application.status === "Approved" ? (
                <div className="flex items-center p-4 text-green-700 bg-green-100 grow">
                  <CircleCheckBig className="w-5 h-5 mr-2" />
                  The property is being rented by you until{" "}
                  {new Date(application.lease?.endDate).toLocaleDateString()}
                </div>
              ) : application.status === "Pending" ? (
                <div className="flex items-center p-4 text-yellow-700 bg-yellow-100 grow">
                  <Clock className="w-5 h-5 mr-2" />
                  Your application is pending approval
                </div>
              ) : (
                <div className="flex items-center p-4 text-red-700 bg-red-100 grow">
                  <XCircle className="w-5 h-5 mr-2" />
                  Your application has been denied
                </div>
              )}

              <button
                className={`bg-white border border-gray-300 text-gray-700 py-2 px-4
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Agreement
              </button>
            </div>
          </ApplicationCard>
        ))}
      </div>
    </div>
  );
}
