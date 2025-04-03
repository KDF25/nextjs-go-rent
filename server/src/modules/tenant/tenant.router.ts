import express from "express";
import {
  addFavoriteProperty,
  createTenant,
  getCurrentResidences,
  getTenant,
  removeFavoriteProperty,
  updateTenant,
} from "./tenant.controller";
import { TENANT_ROUTES } from "./tenant.routes";

const router = express.Router();

router.get(TENANT_ROUTES.GET_TENANT, getTenant);
router.put(TENANT_ROUTES.UPDATE_TENANT, updateTenant);
router.post(TENANT_ROUTES.CREATE_TENANT, createTenant);
router.get(TENANT_ROUTES.GET_CURRENT_RESIDENCES, getCurrentResidences);
router.post(TENANT_ROUTES.ADD_FAVORITE_PROPERTY, addFavoriteProperty);
router.delete(TENANT_ROUTES.REMOVE_FAVORITE_PROPERTY, removeFavoriteProperty);

export default router ;