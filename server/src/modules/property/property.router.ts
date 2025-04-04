
import { ROLES } from "@constants";
import { authMiddleware } from "@middlewares";
import express from "express";
import multer from "multer";
import {
    createProperty,
    getProperties,
    getProperty,
} from "./property.controller";
import { PROPERTY_ROUTES } from "./property.routes";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get(PROPERTY_ROUTES.GET_PROPERTIES, getProperties);
router.get(PROPERTY_ROUTES.GET_PROPERTY, getProperty);
router.post(
  PROPERTY_ROUTES.CREATE_PROPERTY,
  authMiddleware([ROLES.MANAGER]),
  upload.array("photos"),
  createProperty
);

export default router;
