import express from "express";
import { getLeasePayments, getLeases } from "./lease.controller";
import { LEASE_ROUTES } from "./lease.routes";

const router = express.Router();

router.get(LEASE_ROUTES.GET_LEASES,  getLeases);
router.get(LEASE_ROUTES.GET_PAYMENTS, getLeasePayments);

export default router;