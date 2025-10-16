import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/AuthRoutes";
import datasetRoutes from "./routes/DatasetRoutes";
import resultRoutes from "./routes/ResultRoutes";
import logRoutes from "./routes/LogRoutes";
import consentRoutes from "./routes/ConsentRoutes";
import transactionRoutes from "./routes/TransactionRoutes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', authRoutes);
app.use('/api/v1', datasetRoutes);
app.use('/api/v1', resultRoutes);
app.use('/api/v1', logRoutes);
app.use('/api/v1', consentRoutes);
app.use('/api/v1', transactionRoutes);

export default app;