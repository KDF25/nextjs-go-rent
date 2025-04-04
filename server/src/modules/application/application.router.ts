import express from "express";
import {
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "./application.controller";
import { ROLES } from "@constants";
import { authMiddleware } from "@middlewares";
import { APPLICATION_ROUTES } from "./application.routes";

const router = express.Router();

router.post(APPLICATION_ROUTES.CREATE_APPLICATION, authMiddleware([ROLES.TENANT]), createApplication);
router.put(APPLICATION_ROUTES.UPDATE_APPLICATION, authMiddleware([ROLES.MANAGER]), updateApplicationStatus);
router.get(APPLICATION_ROUTES.GET_APPLICATIONS, authMiddleware([ROLES.MANAGER, ROLES.TENANT]), listApplications);

export default router;