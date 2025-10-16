"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const TransactionController_1 = require("../controller/TransactionController");
const router = express_1.default.Router();
router.post('/transactions', authMiddleware_1.verifyToken, TransactionController_1.logTransaction);
router.get('/transactions/verify/:transactionId', authMiddleware_1.verifyToken, TransactionController_1.verifyTransaction);
router.put('/transactions/status/:transactionId', authMiddleware_1.verifyToken, TransactionController_1.updateTransactionStatus);
router.get('/transactions/dataset/:datasetHash', authMiddleware_1.verifyToken, TransactionController_1.getTransactionByDataset);
router.get('/transactions/sender/:senderAddress', authMiddleware_1.verifyToken, TransactionController_1.getTransactionBySender);
router.get('/transactions', authMiddleware_1.verifyToken, authMiddleware_1.requireAdminRole, TransactionController_1.getAllTransactions);
exports.default = router;
//# sourceMappingURL=TransactionRoutes.js.map