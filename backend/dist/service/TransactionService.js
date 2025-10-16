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
exports.TransactionService = void 0;
const TransactionRepository_1 = require("../repository/TransactionRepository");
class TransactionService {
    constructor() {
        this.transactionRepository = new TransactionRepository_1.TransactionRepository();
    }
    logTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transactionRepository.logTransaction(transaction);
        });
    }
    verifyTransaction(transactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transactionRepository.verifyTransaction(transactionId);
        });
    }
    updateTransactionStatus(transactionId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transactionRepository.updateTransactionStatus(transactionId, status);
        });
    }
    findByDataset(datasetHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transactionRepository.findByDataset(datasetHash);
        });
    }
    findBySender(senderAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transactionRepository.findBySender(senderAddress);
        });
    }
    getAllTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transactionRepository.getAllTransactions();
        });
    }
}
exports.TransactionService = TransactionService;
//# sourceMappingURL=TransactionService.js.map