import express from "express";
import { authMiddleware } from "../../middlewares/auth";
import { ROLES } from "./../../constants/roles";
import {
    createApplication,
    listApplications,
    updateApplicationStatus,
} from "./application.controller";
import { APPLICATION_ROUTES } from "./application.routes";

const router = express.Router();

router.post(APPLICATION_ROUTES.CREATE_APPLICATION, authMiddleware([ROLES.TENANT]), createApplication);
router.put(APPLICATION_ROUTES.UPDATE_APPLICATION, authMiddleware([ROLES.MANAGER]), updateApplicationStatus);
router.get(APPLICATION_ROUTES.GET_APPLICATIONS, authMiddleware([ROLES.MANAGER, ROLES.TENANT]), listApplications);

export default router;