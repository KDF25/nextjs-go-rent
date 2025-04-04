import { ROLES } from "@constants";
import { authMiddleware } from "@middlewares";
import { APPLICATION_ROUTES, applicationRouter } from "@modules/application";
import { LEASE_ROUTES, leaseRouter } from "@modules/lease";
import { MANAGER_ROUTES, managerRouter } from "@modules/manager";
import { PROPERTY_ROUTES, propertyRouter } from "@modules/property";
import { TENANT_ROUTES, tenantRouter } from "@modules/tenant";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("SERVER IS STARTED");
});

app.use(PROPERTY_ROUTES.BASE, propertyRouter);
app.use(APPLICATION_ROUTES.BASE, applicationRouter);
app.use(LEASE_ROUTES.BASE, authMiddleware([ROLES.TENANT, ROLES.MANAGER]), leaseRouter);
app.use(TENANT_ROUTES.BASE, authMiddleware([ROLES.TENANT]), tenantRouter);
app.use(MANAGER_ROUTES.BASE, authMiddleware([ROLES.MANAGER]), managerRouter);

const port = Number(process.env.PORT) || 3002;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});