import { Tenant, Manager } from "@shared/database/prisma/types";

export { Tenant, Manager };

export interface User {
  cognitoInfo: AuthUser;
  userInfo: Tenant | Manager;
  userRole: JsonObject | JsonPrimitive | JsonArray;
}
