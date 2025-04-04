export enum TENANT_ROUTES {
    BASE = "/tenants",
    GET_TENANT = "/:cognitoId",
    UPDATE_TENANT = "/:cognitoId",
    CREATE_TENANT = "/",
    GET_CURRENT_RESIDENCES = "/:cognitoId/current-residences",
    ADD_FAVORITE_PROPERTY = "/:cognitoId/favorites/:propertyId",
    REMOVE_FAVORITE_PROPERTY = "/:cognitoId/favorites/:propertyId",
}