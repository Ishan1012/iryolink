import express from 'express';
import { requireAdminRole, verifyToken } from '../middleware/authMiddleware';
import { getAllTransactions, getTransactionByDataset, getTransactionBySender, logTransaction, updateTransactionStatus, verifyTransaction } from '../controller/TransactionController';

const router = express.Router();

router.post('/transactions', verifyToken, logTransaction);
router.get('/transactions/verify/:transactionId', verifyToken, verifyTransaction);
router.put('/transactions/status/:transactionId', verifyToken, updateTransactionStatus);
router.get('/transactions/dataset/:datasetHash', verifyToken, getTransactionByDataset);
router.get('/transactions/sender/:senderAddress', verifyToken, getTransactionBySender);
router.get('/transactions', verifyToken, requireAdminRole, getAllTransactions);

export default router;