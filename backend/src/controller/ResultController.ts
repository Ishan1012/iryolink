import { Request, Response } from "express";
import { ResultService } from "../service/ResultService";

const resultService = new ResultService();

export const saveResult = async (req: Request, res: Response) => {
    try {
        const result = await resultService.saveResult(req.body);
        if(!result) {
            return res.status(400).json({ success: false, message: "Failed to save result" });
        }
        return res.status(201).json({ success: true, result });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to save result", error: String(error) });
    }
};

export const getResultById = async (req: Request, res: Response) => {
    try {
        const resultId = req.params.id as string;
        const result = await resultService.findByResultId(resultId);
        if (!result) {
            return res.status(404).json({ success: false, message: "Result not found" });
        }
        return res.status(200).json({ success: true, result });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch result", error: String(error) });
    }
}

export const getResultsOfDataset = async (req: Request, res: Response) => {
    try {
        const datasetId = req.params.id as string;
        const results = await resultService.findResultsOfDataset(datasetId);
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found" });
        }
        return res.status(200).json({ success: true, results });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
}

export const getResultsByTrends = async (req: Request, res: Response) => {
    try {
        const trendCategory = req.params.category as string;
        const results = await resultService.findByTrends(trendCategory);
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found" });
        }
        return res.status(200).json({ success: true, results });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
}

export const getResultsByPatientId = async (req: Request, res: Response) => {
    try {
        const patientId = req.params.id as string;
        const results = await resultService.findByPatientId(patientId);
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found", results });
        }
        return res.status(200).json({ success: true, results });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
}

export const getAllResults = async (req: Request, res: Response) => {
    try {
        const results = await resultService.getAllResults();
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found" });
        }
        return res.status(200).json({ success: true, results });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
}