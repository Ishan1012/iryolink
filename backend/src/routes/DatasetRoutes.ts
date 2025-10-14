import express from "express";
import { createDataset, findRecordsOfDoctor, findRecordsOfPatient, getAllDatasets, getDataset, getDatasetWithConsent } from "../controller/DatasetController";
import { requireAdminRole, requireAdminRoleOrDoctorRole, verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/dataset", verifyToken, createDataset);
router.get("/dataset/:id", verifyToken, getDataset);
router.get("/dataset/consent/:id", verifyToken, getDatasetWithConsent);
router.get("/dataset/patient/:id", verifyToken, findRecordsOfPatient);
router.get("/dataset/doctor/:id", verifyToken, requireAdminRoleOrDoctorRole, findRecordsOfDoctor);
router.get("/dataset", verifyToken, requireAdminRole, getAllDatasets);

export default router;