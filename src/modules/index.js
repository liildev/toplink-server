import { Router } from "express";
import authRoute from "./auth/router.js";
import accountRoute from "./account/router.js";
import swaggerRoute from "./swagger/index.js";

const router = Router();

//AUTH
router.use("/auth", authRoute);

//USERS
router.use("/account", accountRoute);

//SWAGGER
router.use('/', swaggerRoute)

export default router;
