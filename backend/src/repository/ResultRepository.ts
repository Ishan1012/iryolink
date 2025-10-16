import { Types } from "mongoose";
import { IResult } from "../interface/IResult";
import { Result } from "../model/Result";

export class ResultRepository {
    async saveResult(result: Partial<IResult>): Promise<IResult | null> {
        const newResult = new Result(result);
        return await newResult.save();
    }

    async addDatasetToResult(resultId: string, datasetId: Types.ObjectId): Promise<IResult | null> {
        return await Result.findOneAndUpdate(
            { resultId },
            { datasetId },
            { new: true }
        ).exec();
    }

    async findById(id: Types.ObjectId): Promise<IResult | null> {
        return await Result.findById(id).exec();
    }

    async findByResultId(resultId: string): Promise<IResult | null> {
        return await Result.findOne({ resultId }).exec();
    }

    async findByTrends(trendCategory: string): Promise<IResult[]> {
        return await Result.find({ trendCategory }).exec();
    }

    async findResultsOfDataset(datasetId: Types.ObjectId): Promise<any[]> {
        return await Result.find({ datasetId }).exec();
    }

    async findByPatientId(patientId: string): Promise<IResult[]> {
        return await Result.find({ patientId }).exec();
    }

    async getAllResults(): Promise<IResult[]> {
        return await Result.find().exec();
    }
}