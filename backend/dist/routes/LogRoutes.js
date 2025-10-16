"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const LogController_1 = require("../controller/LogController");
const router = express_1.default.Router();
router.post("/logs", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, LogController_1.saveLog);
router.get("/logs/:id", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, LogController_1.getLogById);
router.get("/logs/doctor/:doctorId", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, LogController_1.getLogsByDoctorId);
router.get("/logs/:date", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, LogController_1.getLogsOnDate);
router.put("/logs/status", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, LogController_1.updateLogStatus);
router.get("/logs", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRole, LogController_1.getAllLogs);
exports.default = router;
//# sourceMappingURL=LogRoutes.js.map