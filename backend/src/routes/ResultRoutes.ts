import express from "express";
import { requireAdminRole, verifyToken } from "../middleware/authMiddleware";
import { addDatasetToResult, getAllResults, getResultById, getResultsByPatientId, getResultsByTrends, getResultsOfDataset, saveResult } from "../controller/ResultController";

const router = express.Router();

router.post("/result", verifyToken, saveResult);
router.get("/result/:id", verifyToken, getResultById);
router.put("/result/:id", verifyToken, addDatasetToResult);
router.get("/result/dataset/:id", verifyToken, getResultsOfDataset);
router.get("/result/trends/:category", verifyToken, getResultsByTrends);
router.get("/result/patient/:id", verifyToken, getResultsByPatientId);
router.get("/result", verifyToken, requireAdminRole, getAllResults);

export default router;