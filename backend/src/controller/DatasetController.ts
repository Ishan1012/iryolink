import { Request, Response } from "express";
import { DatasetService } from "../service/DatasetService";
import { Types } from "mongoose";

const datasetService = new DatasetService();

export const createDataset = async (req: Request, res: Response) => {
    try {
        const dataset = await datasetService.saveDataset(req.body);
        return res.status(200).json({ success: true, dataset });
    } catch(error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
};

export const getDataset = async (req: Request, res: Response) => {
    try {
        const { datasetId } = req.params;
        if (!datasetId) {
            return res.status(400).json({ success: false, message: "datasetId is required" });
        }
        const dataset = await datasetService.findByDatasetId(datasetId);
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
};

export const getDatasetWithConsent = async (req: Request, res: Response) => {
    try {
        const { datasetId } = req.params;
        if (!datasetId) {
            return res.status(400).json({ success: false, message: "datasetId is required" });
        }
        const dataset = await datasetService.getDatasetWithConsent(datasetId);
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
};

export const getAllDatasets = async (req: Request, res: Response) => {
    try {
        const datasets = await datasetService.getAllDatasets();
        return res.status(200).json({ success: true, datasets });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
};

export const findRecordsOfPatient = async (req: Request, res: Response) => {
    try {
        const { patientId } = req.params;
        if(!patientId) {
            return res.status(200).json({ success: false, message: "patientId is required" });
        }
        const objectId = new Types.ObjectId(patientId);
        const dataset = await datasetService.findRecordsOfPatient(objectId);
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
}

export const findRecordsOfDoctor = async (req: Request, res: Response) => {
    try {
        const { doctorId } = req.params;
        if(!doctorId) {
            return res.status(200).json({ success: false, message: "doctorId is required" });
        }
        const objectId = new Types.ObjectId(doctorId);
        const dataset = await datasetService.findRecordsOfDoctor(objectId);
        return res.status(200).json({ success: true, dataset });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
}