import mongoose, { Schema } from "mongoose";
import { ITransaction } from "../interface/ITransaction";
import { v4 as uuidv4 } from "uuid";

const transactionSchema = new Schema<ITransaction> ({
    txHash: {
        type: String,
        default: () => "TR"+uuidv4(),
        unique: true
    },
    datasetHash: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true,
    },
    senderAddress: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const Transaction = mongoose.model<ITransaction>("Transaction", transactionSchema);