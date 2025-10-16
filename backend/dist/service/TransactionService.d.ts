import { ITransaction } from "../interface/ITransaction";
export declare class TransactionService {
    private transactionRepository;
    constructor();
    logTransaction(transaction: ITransaction): Promise<ITransaction | null>;
    verifyTransaction(transactionId: string): Promise<ITransaction | null>;
    updateTransactionStatus(transactionId: string, status: string): Promise<ITransaction | null>;
    findByDataset(datasetHash: string): Promise<ITransaction | null>;
    findBySender(senderAddress: string): Promise<ITransaction | null>;
    getAllTransactions(): Promise<ITransaction[]>;
}
//# sourceMappingURL=TransactionService.d.ts.map