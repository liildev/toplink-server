import dotenv from "dotenv";
dotenv.config();
import swaggerJsDoc from "swagger-jsdoc";
import { setup, serve } from "swagger-ui-express";
import { Router } from "express";

const router = Router();
const PORT = process.env.PORT;

const swaggerDocs = swaggerJsDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Toplink local server",
        variables: {
          port: {
            enum: [PORT],
            default: PORT,
          },
        },
      },
    ],
    info: {
      version: "1",
      title: "Toplink API",
      description: "Toplink API information",
    },
  },

  apis: [`${process.cwd()}/src/modules/swagger/components/**/*.yml`, `${process.cwd()}/src/modules/swagger/docs/**/*.yml`],
});

router.use("/docs", serve, setup(swaggerDocs));

export default router;
