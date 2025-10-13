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
exports.TransactionRepository = void 0;
const Transaction_1 = require("../model/Transaction");
class TransactionRepository {
    saveTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTransaction = new Transaction_1.Transaction(transaction);
            return yield newTransaction.save();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Transaction_1.Transaction.findById(id).exec();
        });
    }
    verifyTransaction(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Transaction_1.Transaction.findOne({ txHash }).exec();
        });
    }
    findByDataset(datasetHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Transaction_1.Transaction.findOne({ datasetHash }).exec();
        });
    }
    findBySender(senderAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Transaction_1.Transaction.findOne({ senderAddress }).exec();
        });
    }
    getAllTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Transaction_1.Transaction.find().exec();
        });
    }
}
exports.TransactionRepository = TransactionRepository;
//# sourceMappingURL=TransactionRepository.js.map