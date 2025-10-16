import express from "express";
import { requireAdminRole, requireAdminRoleOrDoctorRole, verifyToken } from "../middleware/authMiddleware";
import { getAllConsents, getConsentByHash, getConsentById, getConsentByPatientAddress, getRevokedConsents, giveConsent, grantConsent, revokeConsent } from "../controller/ConsentController";

const router = express.Router();

router.post("/consents", verifyToken, giveConsent);
router.put("/consents/grant/:consentId", verifyToken, requireAdminRoleOrDoctorRole, grantConsent);
router.put("/consents/revoke/:consentId", verifyToken, requireAdminRoleOrDoctorRole, revokeConsent);
router.get("/consents/id/:id", verifyToken, getConsentById);
router.get("/consents/hash/:hash", verifyToken, getConsentByHash);
router.get("/consents/patient/:patientAddress", verifyToken, getConsentByPatientAddress);
router.get("/consents/revoked", verifyToken, getRevokedConsents);
router.get("/consents", verifyToken, requireAdminRole, getAllConsents);

export default router;