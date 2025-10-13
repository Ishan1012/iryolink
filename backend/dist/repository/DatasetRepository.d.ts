import { Types } from "mongoose";
import { IDataset } from "../interface/IDataset";
export declare class DatasetRepository {
    saveDataset(dataset: Partial<IDataset>): Promise<IDataset | null>;
    findById(id: Types.ObjectId): Promise<IDataset | null>;
    findByDatasetId(datasetId: string): Promise<IDataset | null>;
    findRecordsOfPatient(patientId: Types.ObjectId): Promise<IDataset[]>;
    findRecordsOfDoctor(doctorId: Types.ObjectId): Promise<IDataset[]>;
    getDatasetWithConsent(datasetId: string): Promise<IDataset | null>;
    getAllDatasets(): Promise<IDataset[]>;
    deleteDataset(id: string): Promise<void>;
}
//# sourceMappingURL=DatasetRepository.d.ts.map