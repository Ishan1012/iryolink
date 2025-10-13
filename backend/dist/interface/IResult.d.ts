import { Document, Types } from "mongoose";
export interface IResult extends Document {
    resultId: string;
    riskScore: number;
    predictedCondition: string;
    trandCategory: string;
    computedAt: Date;
    patientId?: Types.ObjectId;
    datasetId?: Types.ObjectId;
}
//# sourceMappingURL=IResult.d.ts.map