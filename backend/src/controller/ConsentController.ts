import { Request, Response } from "express";
import { ConsentService } from "../service/ConsentService";

const consentService = new ConsentService();

export const giveConsent = async (req: Request, res: Response) => {
    try {
        const consent = await consentService.giveConsent(req.body);
        if(!consent) {
            return res.status(400).json({ success: false, message: "Failed to create consent" });
        }
        return res.status(200).json({ success: true, consent });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const grantConsent = async (req: Request, res: Response) => {
    try {
        const consentId = req.params.consentId;
        if (!consentId) {
            return res.status(400).json({ success: false, message: "consentId is required" });
        }
        const consent = await consentService.grantConsent(consentId);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const revokeConsent = async (req: Request, res: Response) => {
    try {
        const consentId = req.params.consentId;
        if (!consentId) {
            return res.status(400).json({ success: false, message: "consentId is required" });
        }
        const consent = await consentService.revokeConsent(consentId);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getConsentById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ success: false, message: "id is required" });
        }
        const consent = await consentService.findById(id);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getConsentByHash = async (req: Request, res: Response) => {
    try {
        const hash = req.params.hash;
        if (!hash) {
            return res.status(400).json({ success: false, message: "hash is required" });
        }
        const consent = await consentService.findByHash(hash);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getConsentByPatientAddress = async (req: Request, res: Response) => {
    try {
        const patientAddress = req.params.patientAddress;
        if (!patientAddress) {
            return res.status(400).json({ success: false, message: "patientAddress is required" });
        }
        const consent = await consentService.findByPatientAddress(patientAddress);
        if (!consent) {
            return res.status(404).json({ success: false, message: "Consent not found" });
        }
        return res.status(200).json({ success: true, consent });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getRevokedConsents = async (req: Request, res: Response) => {
    try {
        const consent = await consentService.findRevokedConsents();
        if (!consent) {
            return res.status(404).json({ success: false, message: "No revoked consents found" });
        }
        return res.status(200).json({ success: true, consent });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getAllConsents = async (req: Request, res: Response) => {
    try {
        const consents = await consentService.getAllConsents();
        return res.status(200).json({ success: true, consents });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};