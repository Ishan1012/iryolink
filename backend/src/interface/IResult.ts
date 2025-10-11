import mongoose, { Document } from "mongoose";

export interface IResult extends Document {
    resultId: string;
    riskScore: number;
    predictedCondition: string;
    trandCategory: string;
    computedAt: Date;
    patientId?: mongoose.Types.ObjectId;
    datasetId?: mongoose.Types.ObjectId;
}