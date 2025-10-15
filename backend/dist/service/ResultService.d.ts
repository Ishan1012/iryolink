export declare class ResultService {
    private resultRepository;
    constructor();
    saveResult(result: Partial<any>): Promise<any | null>;
    findById(id: string): Promise<any | null>;
    findByResultId(datasetId: string): Promise<any | null>;
    findResultsOfDataset(datasetId: string): Promise<any[]>;
    findByTrends(trendCategory: string): Promise<any[]>;
    findByPatientId(patientId: string): Promise<any[]>;
    getAllResults(): Promise<any[]>;
}
//# sourceMappingURL=ResultService.d.ts.map