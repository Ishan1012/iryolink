import { Types } from "mongoose";
import { IDataset } from "../interface/IDataset";
import { Dataset } from "../model/Dataset";

export class DatasetRepository {
    async saveDataset(dataset: Partial<IDataset>): Promise<IDataset | null> {
        const newDataset = new Dataset(dataset);
        return await newDataset.save();
    }

    async findById(id: Types.ObjectId): Promise<IDataset | null> {
        return await Dataset.findById(id).exec();
    }

    async findByDatasetId(datasetId: string): Promise<IDataset | null> {
        return await Dataset.findOne({ datasetId }).exec();
    }

    async findRecordsOfPatient(patientId: Types.ObjectId): Promise<IDataset[]> {
        return await Dataset.find({ patientId }).exec();
    }

    async findRecordsOfDoctor(doctorId: Types.ObjectId): Promise<IDataset[]> {
        return await Dataset.find({ doctorId }).exec();
    }

    async uploadFiles(datasetId: string, url: string): Promise<IDataset | null> {
        return await Dataset.findOneAndUpdate({ datasetId }, { $set: { uploadedAt: url }});
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