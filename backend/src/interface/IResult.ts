import { Document } from "mongoose";

export interface IResult extends Document {
    resultId: string;
    riskScore: number;
    predictedCondition: string;
    trandCategory: string;
    computedAt: Date;
    patientId: string;
    datasetId: string;
}