import { Router } from "express";
import validation from "../../middlewares/validation.middleware.js";
import controller from "./controller.js";

const router = Router();

router.post("/forgot-password", validation, controller.FORGOT);

router.post("/reset-password/:id/:token", validation, controller.RESET);

export default router;
