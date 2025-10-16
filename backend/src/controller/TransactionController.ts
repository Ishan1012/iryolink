import { Request, Response } from "express";
import { TransactionService } from "../service/TransactionService";

const transactionService = new TransactionService();

export const logTransaction = async (req: Request, res: Response) => {
    try {
        const transaction = await transactionService.logTransaction(req.body);
        if(!transaction) {
            return res.status(400).json({ success: false, message: "Failed to save transaction" });
        }
        return res.status(201).json({ success: true, transaction });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to save transaction", error: String(error) });
    }
};

export const verifyTransaction = async (req: Request, res: Response) => {
    try {
        const { transactionId } = req.params;
        if (!transactionId) {
            return res.status(400).json({ success: false, message: "Transaction ID is required" });
        }
        const transaction = await transactionService.verifyTransaction(transactionId);
        if (!transaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, transaction });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to verify transaction", error: String(error) });
    }
};

export const updateTransactionStatus = async (req: Request, res: Response) => {
    try {
        const { transactionId } = req.params;
        const { status } = req.body;
        if (!transactionId || !status) {
            return res.status(400).json({ success: false, message: "Transaction ID and status are required" });
        }
        const updatedTransaction = await transactionService.updateTransactionStatus(transactionId, status);
        if (!updatedTransaction) {
            return res.status(404).json({ success: false, message: "Transaction not found or failed to update" });
        }
        return res.status(200).json({ success: true, transaction: updatedTransaction });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to update transaction status", error: String(error) });
    }
};

export const getTransactionByDataset = async (req: Request, res: Response) => {
    try {
        const { datasetHash } = req.params;
        if (!datasetHash) {
            return res.status(400).json({ success: false, message: "Dataset hash is required" });
        }
        const transaction = await transactionService.findByDataset(datasetHash);
        if (!transaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, transaction });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to retrieve transaction", error: String(error) });
    }
};

export const getTransactionBySender = async (req: Request, res: Response) => {
    try {
        const { senderAddress } = req.params;
        if (!senderAddress) {
            return res.status(400).json({ success: false, message: "Sender address is required" });
        }
        const transaction = await transactionService.findBySender(senderAddress);
        if (!transaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, transaction });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to retrieve transaction", error: String(error) });
    }
};

export const getAllTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await transactionService.getAllTransactions();
        return res.status(200).json({ success: true, transactions });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to retrieve transactions", error: String(error) });
    }
};