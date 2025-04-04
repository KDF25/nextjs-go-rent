import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ROLES } from "../../constants/roles";

interface  DecodedToken extends JwtPayload {
    sub: string;
    "custom:role"?: ROLES;
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: ROLES;
            };
        }
    }
}

export const authMiddleware =  (allowedRoles: ROLES[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {   
            res.status(401).json({ message: "Unauthorized" });
            return 
        }
        try {
            const decoded = jwt.decode(token) as DecodedToken;
            const userRole = decoded["custom:role"] || "";
            req.user = {
              id: decoded.sub,
              role: userRole as ROLES,
            };
      
            const hasAccess = allowedRoles.includes(userRole.toLowerCase() as ROLES) ;
            if (!hasAccess) {
              res.status(403).json({ message: "Access Denied" });
              return;
            }
          } catch (err) {
            console.error("Failed to decode token:", err);
            res.status(400).json({ message: "Invalid token" });
            return;
          }
      
          next();
        };
};