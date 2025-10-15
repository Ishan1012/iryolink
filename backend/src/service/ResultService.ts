import { Types } from "mongoose";
import { ResultRepository } from "../repository/ResultRepository";

export class ResultService {
    private resultRepository: ResultRepository;

    constructor() {
        this.resultRepository = new ResultRepository();
    }

    async saveResult(result: Partial<any>): Promise<any | null> {
        return this.resultRepository.saveResult(result);
    }

    async findById(id: string): Promise<any | null> {
        const ids = new Types.ObjectId(id);
        return this.resultRepository.findById(ids);
    }

    async findByResultId(datasetId: string): Promise<any | null> {
        return this.resultRepository.findByResultId(datasetId);
    }

    async findResultsOfDataset(datasetId: string): Promise<any[]> {
        const datasetIds = new Types.ObjectId(datasetId);
        return this.resultRepository.findResultsOfDataset(datasetIds);
    }

    async findByTrends(trendCategory: string): Promise<any[]> {
        return this.resultRepository.findByTrends(trendCategory);
    }

    async findByPatientId(patientId: string): Promise<any[]> {
        return this.resultRepository.findByPatientId(patientId);
    }

    async getAllResults(): Promise<any[]> {
        return this.resultRepository.getAllResults();
    }
}