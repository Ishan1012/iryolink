"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const ConsentController_1 = require("../controller/ConsentController");
const router = express_1.default.Router();
router.post("/consents", authMiddleware_1.verifyToken, ConsentController_1.giveConsent);
router.put("/consents/grant/:consentId", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, ConsentController_1.grantConsent);
router.put("/consents/revoke/:consentId", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRoleOrDoctorRole, ConsentController_1.revokeConsent);
router.get("/consents/id/:id", authMiddleware_1.verifyToken, ConsentController_1.getConsentById);
router.get("/consents/hash/:hash", authMiddleware_1.verifyToken, ConsentController_1.getConsentByHash);
router.get("/consents/patient/:patientAddress", authMiddleware_1.verifyToken, ConsentController_1.getConsentByPatientAddress);
router.get("/consents/revoked", authMiddleware_1.verifyToken, ConsentController_1.getRevokedConsents);
router.get("/consents", authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRole, ConsentController_1.getAllConsents);
exports.default = router;
//# sourceMappingURL=ConsentRoutes.js.map