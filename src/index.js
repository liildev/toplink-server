import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from 'cors'
import mainModule from "./modules/index.js"
import errorsMiddleware from './middlewares/errors.middleware.js';
const app = express();


// For parsing application/json
app.use(express.json());

// Cors
app.use(cors());

app.use("/api", mainModule);

// Error processing
app.use(errorsMiddleware);

app.listen(process.env.PORT, () => console.log(`*${process.env.PORT}`));
