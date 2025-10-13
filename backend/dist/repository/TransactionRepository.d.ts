import mongoose from "mongoose";
import { ITransaction } from "../interface/ITransaction";
export declare class TransactionRepository {
    saveTransaction(transaction: Partial<ITransaction>): Promise<ITransaction | null>;
    findById(id: mongoose.Types.ObjectId): Promise<ITransaction | null>;
    verifyTransaction(txHash: string): Promise<ITransaction | null>;
    findByDataset(datasetHash: string): Promise<ITransaction | null>;
    findBySender(senderAddress: string): Promise<ITransaction | null>;
    getAllTransactions(): Promise<ITransaction[]>;
}
//# sourceMappingURL=TransactionRepository.d.ts.map