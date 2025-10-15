import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/AuthRoutes";
import datasetRoutes from "./routes/DatasetRoutes";
import resultRoutes from "./routes/ResultRoutes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', authRoutes);
app.use('/api/v1', datasetRoutes);
app.use('/api/v1', resultRoutes);

export default app;