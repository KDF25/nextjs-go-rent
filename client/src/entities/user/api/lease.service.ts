import { baseApi } from "@shared/api";
import { Lease, Payment } from "../types";

export const leaseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLeases: build.query<Lease[], number>({
      query: () => "leases",
      providesTags: ["Leases"],
    }),

    getPropertyLeases: build.query<Lease[], number>({
      query: (propertyId) => `properties/${propertyId}/leases`,
      providesTags: ["Leases"],
    }),

    getPayments: build.query<Payment[], number>({
      query: (leaseId) => `leases/${leaseId}/payments`,
      providesTags: ["Payments"],
    }),
  }),
});

export const {
  useGetLeasesQuery,
  useGetPropertyLeasesQuery,
  useGetPaymentsQuery,
} = leaseApi;
