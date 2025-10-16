import { Types } from "mongoose";
import { ITransaction } from "../interface/ITransaction";
import { Transaction } from "../model/Transaction";

export class TransactionRepository {
    async logTransaction(transaction: Partial<ITransaction>): Promise<ITransaction | null> {
        const newTransaction = new Transaction(transaction);
        return await newTransaction.save();
    }

    async findById(id: Types.ObjectId): Promise<ITransaction | null> {
        return await Transaction.findById(id).exec();
    }
    
    async verifyTransaction(txHash: string): Promise<ITransaction | null> {
        return await Transaction.findOne({ txHash }).exec();
    }

    async updateTransactionStatus(transactionId: string, status: string): Promise<ITransaction | null> {
        return await Transaction.findOneAndUpdate({ transactionId }, { status }, { new: true }).exec();
    }
    
    async findByDataset(datasetHash: string): Promise<ITransaction | null> {
        return await Transaction.findOne({ datasetHash }).exec();
    }

    async findBySender(senderAddress: string): Promise<ITransaction | null> {
        return await Transaction.findOne({ senderAddress }).exec();
    }

    async getAllTransactions(): Promise<ITransaction[]> {
        return await Transaction.find().exec();
    }
}