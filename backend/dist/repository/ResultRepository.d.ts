import { Types } from "mongoose";
import { IResult } from "../interface/IResult";
export declare class ResultRepository {
    saveResult(result: Partial<IResult>): Promise<IResult | null>;
    findById(id: Types.ObjectId): Promise<IResult | null>;
    findByResultId(resultId: string): Promise<IResult | null>;
    findByTrends(trendCategory: string): Promise<IResult[]>;
    findByPatientId(patientId: string): Promise<IResult[]>;
    getAllResults(): Promise<IResult[]>;
}
//# sourceMappingURL=ResultRepository.d.ts.map