import { Types } from "mongoose";
import { IResult } from "../interface/IResult";
export declare class ResultRepository {
    saveResult(result: Partial<IResult>): Promise<IResult | null>;
    addDatasetToResult(resultId: string, datasetId: Types.ObjectId): Promise<IResult | null>;
    findById(id: Types.ObjectId): Promise<IResult | null>;
    findByResultId(resultId: string): Promise<IResult | null>;
    findByTrends(trendCategory: string): Promise<IResult[]>;
    findResultsOfDataset(datasetId: Types.ObjectId): Promise<any[]>;
    findByPatientId(patientId: string): Promise<IResult[]>;
    getAllResults(): Promise<IResult[]>;
}
//# sourceMappingURL=ResultRepository.d.ts.map