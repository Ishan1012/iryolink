import { Types } from "mongoose";
import { TransactionRepository } from "../repository/TransactionRepository";
import { ITransaction } from "../interface/ITransaction";

export class TransactionService {
    private transactionRepository: TransactionRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    async logTransaction(transaction: ITransaction): Promise<ITransaction | null> {
        return await this.transactionRepository.logTransaction(transaction);
    }

    async verifyTransaction(transactionId: string): Promise<ITransaction | null> {
        return await this.transactionRepository.verifyTransaction(transactionId);
    }

    async updateTransactionStatus(transactionId: string, status: string): Promise<ITransaction | null> {
        return await this.transactionRepository.updateTransactionStatus(transactionId, status);
    }

    async findByDataset(datasetHash: string): Promise<ITransaction | null> {
        return await this.transactionRepository.findByDataset(datasetHash);
    }

    async findBySender(senderAddress: string): Promise<ITransaction | null> {
        return await this.transactionRepository.findBySender(senderAddress);
    }
    async getAllTransactions(): Promise<ITransaction[]> {
        return await this.transactionRepository.getAllTransactions();
    }
}