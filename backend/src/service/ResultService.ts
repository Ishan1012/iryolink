import { Types } from "mongoose";
import { ResultRepository } from "../repository/ResultRepository";
import { IResult } from "../interface/IResult";

export class ResultService {
    private resultRepository: ResultRepository;

    constructor() {
        this.resultRepository = new ResultRepository();
    }

    async saveResult(result: Partial<IResult>): Promise<IResult | null> {
        return await this.resultRepository.saveResult(result);
    }

    async addDatasetToResult(resultId: string, datasetId: string): Promise<IResult | null> {
        const datasetIds = new Types.ObjectId(datasetId);
        return await this.resultRepository.addDatasetToResult(resultId, datasetIds);
    }

    async findById(id: string): Promise<IResult | null> {
        const ids = new Types.ObjectId(id);
        return await this.resultRepository.findById(ids);
    }

    async findByResultId(datasetId: string): Promise<IResult | null> {
        return await this.resultRepository.findByResultId(datasetId);
    }

    async findResultsOfDataset(datasetId: string): Promise<IResult[]> {
        const datasetIds = new Types.ObjectId(datasetId);
        return await this.resultRepository.findResultsOfDataset(datasetIds);
    }

    async findByTrends(trendCategory: string): Promise<IResult[]> {
        return await this.resultRepository.findByTrends(trendCategory);
    }

    async findByPatientId(patientId: string): Promise<IResult[]> {
        return await this.resultRepository.findByPatientId(patientId);
    }

    async getAllResults(): Promise<IResult[]> {
        return await this.resultRepository.getAllResults();
    }
}