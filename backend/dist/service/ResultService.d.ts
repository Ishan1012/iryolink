import { IResult } from "../interface/IResult";
export declare class ResultService {
    private resultRepository;
    constructor();
    saveResult(result: Partial<IResult>): Promise<IResult | null>;
    addDatasetToResult(resultId: string, datasetId: string): Promise<IResult | null>;
    findById(id: string): Promise<IResult | null>;
    findByResultId(datasetId: string): Promise<IResult | null>;
    findResultsOfDataset(datasetId: string): Promise<IResult[]>;
    findByTrends(trendCategory: string): Promise<IResult[]>;
    findByPatientId(patientId: string): Promise<IResult[]>;
    getAllResults(): Promise<IResult[]>;
}
//# sourceMappingURL=ResultService.d.ts.map