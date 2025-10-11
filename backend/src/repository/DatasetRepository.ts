import mongoose from "mongoose";
import { IDataset } from "../interface/IDataset";
import { Dataset } from "../model/Dataset";

export class DatasetRepository {
    async saveDataset(dataset: Partial<IDataset>): Promise<IDataset | null> {
        const newDataset = new Dataset(dataset);
        return await newDataset.save();
    }

    async findById(id: mongoose.Types.ObjectId): Promise<IDataset | null> {
        return await Dataset.findById(id).exec();
    }

    async findByDatasetId(datasetId: string): Promise<IDataset | null> {
        return await Dataset.findOne({ datasetId }).exec();
    }

    async findRecordsOfPatient(patientId: mongoose.Types.ObjectId): Promise<IDataset[]> {
        return await Dataset.find({ patientId }).exec();
    }

    async findRecordsOfDoctor(doctorId: mongoose.Types.ObjectId): Promise<IDataset[]> {
        return await Dataset.find({ doctorId }).exec();
    }
    
    async getDatasetWithConsent(datasetId: string): Promise<IDataset | null> {
        return await Dataset.findOne({ datasetId }).populate('hash').exec();
    }

    async getAllDatasets(): Promise<IDataset[]> {
        return await Dataset.find().exec(); 
    }

    async deleteDataset(id: string): Promise<void> {
        await Dataset.findByIdAndDelete(id).exec();
    }
}