import mongoose from "mongoose";
import { ITransaction } from "../interface/ITransaction";
import { Transaction } from "../model/Transaction";

export class TransactionRepository {
    async saveTransaction(transaction: Partial<ITransaction>): Promise<ITransaction | null> {
        const newTransaction = new Transaction(transaction);
        return await newTransaction.save();
    }

    async findById(id: mongoose.Types.ObjectId): Promise<ITransaction | null> {
        return await Transaction.findById(id).exec();
    }

    async verifyTransaction(txHash: string): Promise<ITransaction | null> {
        return await Transaction.findOne({ txHash }).exec();
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