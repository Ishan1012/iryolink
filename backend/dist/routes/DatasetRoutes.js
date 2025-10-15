"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DatasetController_1 = require("../controller/DatasetController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post("/dataset", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, DatasetController_1.createDataset);
router.get("/dataset/:id", authMiddleware_1.verifyToken, DatasetController_1.getDataset);
router.get("/dataset/consent/:id", authMiddleware_1.verifyToken, DatasetController_1.getDatasetWithConsent);
router.get("/dataset/patient/:id", authMiddleware_1.verifyToken, DatasetController_1.findRecordsOfPatient);
router.get("/dataset/doctor/:id", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, DatasetController_1.findRecordsOfDoctor);
router.get("/dataset", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRole, DatasetController_1.getAllDatasets);
exports.default = router;
//# sourceMappingURL=DatasetRoutes.js.map