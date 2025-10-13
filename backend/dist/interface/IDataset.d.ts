import { Document, Types } from "mongoose";
export interface IDataset extends Document {
    datasetId: string;
    patientId?: Types.ObjectId;
    doctorId?: Types.ObjectId;
    hash?: Types.ObjectId;
    fileLocation: string;
    consentGranted: boolean;
    uploadedAt: Date;
    dataType: string;
}
//# sourceMappingURL=IDataset.d.ts.map