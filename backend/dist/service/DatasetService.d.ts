import { Types } from "mongoose";
import { IDataset } from "../interface/IDataset";
export declare class DatasetService {
    private datasetRepository;
    constructor();
    saveDataset(dataset: Partial<IDataset>): Promise<IDataset | null>;
    findById(id: Types.ObjectId): Promise<IDataset | null>;
    findByDatasetId(datasetId: string): Promise<IDataset | null>;
    updloadFiles(datasetId: string, url: string): Promise<IDataset | null>;
    findRecordsOfPatient(patientId: Types.ObjectId): Promise<IDataset[]>;
    findRecordsOfDoctor(doctorId: Types.ObjectId): Promise<IDataset[]>;
    getDatasetWithConsent(datasetId: string): Promise<IDataset | null>;
    getAllDatasets(): Promise<IDataset[]>;
    deleteDataset(id: string): Promise<void>;
}
//# sourceMappingURL=DatasetService.d.ts.map