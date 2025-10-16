"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllConsents = exports.getRevokedConsents = exports.getConsentByPatientAddress = exports.getConsentByHash = exports.getConsentById = exports.revokeConsent = exports.grantConsent = exports.giveConsent = void 0;
const ConsentService_1 = require("../service/ConsentService");
const consentService = new ConsentService_1.ConsentService();
const giveConsent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consent = yield consentService.giveConsent(req.body);
        if (!consent) {
            return res.status(400).json({ success: false, message: "Failed to create consent" });
        }
        return res.status(200).json({ success: true, consent });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.giveConsent = giveConsent;
const grantConsent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consentId = req.params.consentId;
        if (!consentId) {
            return res.status(400).json({ success: false, message: "consentId is required" });
        }
        const consent = yield consentService.grantConsent(consentId);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.grantConsent = grantConsent;
const revokeConsent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consentId = req.params.consentId;
        if (!consentId) {
            return res.status(400).json({ success: false, message: "consentId is required" });
        }
        const consent = yield consentService.revokeConsent(consentId);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.revokeConsent = revokeConsent;
const getConsentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ success: false, message: "id is required" });
        }
        const consent = yield consentService.findById(id);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getConsentById = getConsentById;
const getConsentByHash = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hash = req.params.hash;
        if (!hash) {
            return res.status(400).json({ success: false, message: "hash is required" });
        }
        const consent = yield consentService.findByHash(hash);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getConsentByHash = getConsentByHash;
const getConsentByPatientAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patientAddress = req.params.patientAddress;
        if (!patientAddress) {
            return res.status(400).json({ success: false, message: "patientAddress is required" });
        }
        const consent = yield consentService.findByPatientAddress(patientAddress);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getConsentByPatientAddress = getConsentByPatientAddress;
const getRevokedConsents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consent = yield consentService.findRevokedConsents();
        if (!consent) {
            return res.status(404).json({ success: false, message: "No revoked consents found" });
        }
        return res.status(200).json({ success: true, consent });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getRevokedConsents = getRevokedConsents;
const getAllConsents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consents = yield consentService.getAllConsents();
        return res.status(200).json({ success: true, consents });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getAllConsents = getAllConsents;
//# sourceMappingURL=ConsentController.js.map