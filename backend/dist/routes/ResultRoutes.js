"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const ResultController_1 = require("../controller/ResultController");
const router = express_1.default.Router();
router.post("/result", authMiddleware_1.verifyToken, ResultController_1.saveResult);
router.get("/result/:id", authMiddleware_1.verifyToken, ResultController_1.getResultById);
router.get("/result/dataset/:id", authMiddleware_1.verifyToken, ResultController_1.getResultsOfDataset);
router.get("/result/trends/:category", authMiddleware_1.verifyToken, ResultController_1.getResultsByTrends);
router.get("/result/patient/:id", authMiddleware_1.verifyToken, ResultController_1.getResultsByPatientId);
router.get("/result", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRole, ResultController_1.getAllResults);
exports.default = router;
//# sourceMappingURL=ResultRoutes.js.map