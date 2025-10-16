import { Request, Response } from "express";
export declare const logTransaction: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const verifyTransaction: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateTransactionStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTransactionByDataset: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTransactionBySender: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllTransactions: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=TransactionController.d.ts.map