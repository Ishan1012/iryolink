import express from "express";
import { requireAdminRole, requireAdminRoleOrDoctorRole, verifyToken } from "../middleware/authMiddleware";
import { getAllLogs, getLogById, getLogsByDoctorId, getLogsOnDate, saveLog, updateLogStatus } from "../controller/LogController";

const router = express.Router();

router.post("/logs", verifyToken, requireAdminRoleOrDoctorRole, saveLog);
router.get("/logs/:id", verifyToken, requireAdminRoleOrDoctorRole, getLogById);
router.get("/logs/doctor/:doctorId", verifyToken, requireAdminRoleOrDoctorRole, getLogsByDoctorId);
router.get("/logs/:date", verifyToken, requireAdminRoleOrDoctorRole, getLogsOnDate);
router.put("/logs/status", verifyToken, requireAdminRoleOrDoctorRole, updateLogStatus);
router.get("/logs", verifyToken, requireAdminRole, getAllLogs);

export default router;