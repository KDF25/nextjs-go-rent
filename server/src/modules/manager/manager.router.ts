import express from "express";
import {
    createManager,
    getManager,
    getManagerProperties,
    updateManager,
} from "./manager.controller";
import { MANAGER_ROUTES } from "./manager.routes";

const router = express.Router();

router.get(MANAGER_ROUTES.GET_MANAGER, getManager);
router.put(MANAGER_ROUTES.UPDATE_MANAGER, updateManager);
router.get(MANAGER_ROUTES.GET_PROPERTIES, getManagerProperties);
router.post(MANAGER_ROUTES.CREATE_MANAGER, createManager);

export default router;