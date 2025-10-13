import { Document } from "mongoose";
export interface ITransaction extends Document {
    txHash: string;
    datasetHash: string;
    action: string;
    senderAddress: string;
    timestamp: Date;
}
//# sourceMappingURL=ITransaction.d.ts.map