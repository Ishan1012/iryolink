import { Types } from "mongoose";
import { IDataset } from "../interface/IDataset";
import { DatasetRepository } from "../repository/DatasetRepository";

export class DatasetService {
    private datasetRepository: DatasetRepository;

    constructor() {
        this.datasetRepository = new DatasetRepository();
    }

    async saveDataset(dataset: Partial<IDataset>): Promise<IDataset | null> {
        return await this.datasetRepository.saveDataset(dataset);
    }

    async findById(id: Types.ObjectId): Promise<IDataset | null> {
        return await this.datasetRepository.findById(id);
    }

    async findByDatasetId(datasetId: string): Promise<IDataset | null> {
        return await this.datasetRepository.findByDatasetId(datasetId);
    }

    async updloadFiles(datasetId: string, url: string): Promise<IDataset | null> {
        return await this.datasetRepository.uploadFiles(datasetId, url);
    }

    async findRecordsOfPatient(patientId: Types.ObjectId): Promise<IDataset[]> {
        return await this.datasetRepository.findRecordsOfPatient(patientId);
    }

    async findRecordsOfDoctor(doctorId: Types.ObjectId): Promise<IDataset[]> {
        return await this.datasetRepository.findRecordsOfDoctor(doctorId);
    }

    async getDatasetWithConsent(datasetId: string): Promise<IDataset | null> {
        return await this.datasetRepository.getDatasetWithConsent(datasetId);
    }

    async getAllDatasets(): Promise<IDataset[]> {
        return await this.datasetRepository.getAllDatasets();
    }

    async deleteDataset(id: string): Promise<void> {
        return await this.datasetRepository.deleteDataset(id);
    }
}