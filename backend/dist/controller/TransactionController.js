"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTransactions = exports.getTransactionBySender = exports.getTransactionByDataset = exports.updateTransactionStatus = exports.verifyTransaction = exports.logTransaction = void 0;
const TransactionService_1 = require("../service/TransactionService");
const transactionService = new TransactionService_1.TransactionService();
const logTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield transactionService.logTransaction(req.body);
        if (!transaction) {
            return res.status(400).json({ success: false, message: "Failed to save transaction" });
        }
        return res.status(201).json({ success: true, transaction });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to save transaction", error: String(error) });
    }
});
exports.logTransaction = logTransaction;
const verifyTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { transactionId } = req.params;
        if (!transactionId) {
            return res.status(400).json({ success: false, message: "Transaction ID is required" });
        }
        const transaction = yield transactionService.verifyTransaction(transactionId);
        if (!transaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, transaction });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to verify transaction", error: String(error) });
    }
});
exports.verifyTransaction = verifyTransaction;
const updateTransactionStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { transactionId } = req.params;
        const { status } = req.body;
        if (!transactionId || !status) {
            return res.status(400).json({ success: false, message: "Transaction ID and status are required" });
        }
        const updatedTransaction = yield transactionService.updateTransactionStatus(transactionId, status);
        if (!updatedTransaction) {
            return res.status(404).json({ success: false, message: "Transaction not found or failed to update" });
        }
        return res.status(200).json({ success: true, transaction: updatedTransaction });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to update transaction status", error: String(error) });
    }
});
exports.updateTransactionStatus = updateTransactionStatus;
const getTransactionByDataset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { datasetHash } = req.params;
        if (!datasetHash) {
            return res.status(400).json({ success: false, message: "Dataset hash is required" });
        }
        const transaction = yield transactionService.findByDataset(datasetHash);
        if (!transaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, transaction });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to retrieve transaction", error: String(error) });
    }
});
exports.getTransactionByDataset = getTransactionByDataset;
const getTransactionBySender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { senderAddress } = req.params;
        if (!senderAddress) {
            return res.status(400).json({ success: false, message: "Sender address is required" });
        }
        const transaction = yield transactionService.findBySender(senderAddress);
        if (!transaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, transaction });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to retrieve transaction", error: String(error) });
    }
});
exports.getTransactionBySender = getTransactionBySender;
const getAllTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield transactionService.getAllTransactions();
        return res.status(200).json({ success: true, transactions });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to retrieve transactions", error: String(error) });
    }
});
exports.getAllTransactions = getAllTransactions;
//# sourceMappingURL=TransactionController.js.map