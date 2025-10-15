import { Request, Response } from "express";
import { DatasetService } from "../service/DatasetService";
import { Types } from "mongoose";

const datasetService = new DatasetService();

export const createDataset = async (req: Request, res: Response) => {
    try {
        const dataset = await datasetService.saveDataset(req.body);
        if(!dataset) {
            return res.status(400).json({ success: false, message: "Failed to create dataset" });
        }
        return res.status(200).json({ success: true, dataset });
    } catch(error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getDataset = async (req: Request, res: Response) => {
    try {
        const datasetId = req.params.id;
        if (!datasetId) {
            return res.status(400).json({ success: false, message: "datasetId is required" });
        }
        const dataset = await datasetService.findByDatasetId(datasetId);
        if(!dataset) {
            return res.status(404).json({ success: false, message: "Dataset not found" });
        }
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getDatasetWithConsent = async (req: Request, res: Response) => {
    try {
        const datasetId = req.params.id;
        if (!datasetId) {
            return res.status(400).json({ success: false, message: "datasetId is required" });
        }
        const dataset = await datasetService.getDatasetWithConsent(datasetId);
        if(!dataset) {
            return res.status(404).json({ success: false, message: "Dataset not found" });
        }
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getAllDatasets = async (req: Request, res: Response) => {
    try {
        const datasets = await datasetService.getAllDatasets();
        if(!datasets || datasets.length === 0) {
            return res.status(404).json({ success: false, message: "Datasets not found" });
        }
        return res.status(200).json({ success: true, datasets });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const findRecordsOfPatient = async (req: Request, res: Response) => {
    try {
        const patientId = req.params.id;
        if(!patientId) {
            return res.status(200).json({ success: false, message: "patientId is required" });
        }
        const objectId = new Types.ObjectId(patientId);
        const dataset = await datasetService.findRecordsOfPatient(objectId);
        if(!dataset) {
            return res.status(404).json({ success: false, message: "Dataset not found" });
        }
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
}

export const findRecordsOfDoctor = async (req: Request, res: Response) => {
    try {
        const doctorId = req.params.id;
        if(!doctorId) {
            return res.status(200).json({ success: false, message: "doctorId is required" });
        }
        const objectId = new Types.ObjectId(doctorId);
        const dataset = await datasetService.findRecordsOfDoctor(objectId);
        if(!dataset) {
            return res.status(404).json({ success: false, message: "Dataset not found" });
        }
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
}