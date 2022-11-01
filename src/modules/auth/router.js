import { Router } from "express";
import validation from "../../middlewares/validation.middleware.js";
import controller from "./controller.js";

const router = Router();

router.post("/registration", validation, controller.REGISTER);
router.post("/login", validation, controller.LOGIN);

export default router;
