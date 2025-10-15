import { Document, Types } from "mongoose";
export interface IResult extends Document {
    resultId: string;
    riskScore: number;
    predictedCondition: string;
    trendCategory: string;
    computedAt: Date;
    patientId?: Types.ObjectId;
    datasetId?: Types.ObjectId;
}
//# sourceMappingURL=IResult.d.ts.map