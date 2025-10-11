import mongoose from "mongoose";
import { IResult } from "../interface/IResult";
import { Result } from "../model/Result";

export class ResultRepository {
    async saveResult(result: Partial<IResult>): Promise<IResult | null> {
        const newResult = new Result(result);
        return await newResult.save();
    }

    async findById(id: mongoose.Types.ObjectId): Promise<IResult | null> {
        return await Result.findById(id).exec();
    }

    async findByResultId(resultId: string): Promise<IResult | null> {
        return await Result.findOne({ resultId }).exec();
    }

    async findByTrends(trendCategory: string): Promise<IResult[]> {
        return await Result.find({ trendCategory }).exec();
    }

    async findByPatientId(patientId: string): Promise<IResult[]> {
        return await Result.find({ patientId }).exec();
    }

    async getAllResults(): Promise<IResult[]> {
        return await Result.find().exec();
    }
}