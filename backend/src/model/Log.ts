import mongoose, { Schema } from "mongoose";
import { ILog } from "../interface/ILog";
import { v4 as uuidv4 } from "uuid";

const logSchema = new Schema<ILog>({
    logId: {
        type: String,
        default: () => "LOG"+uuidv4(),
        unique: true
    },
    doctorId: {
        type: Schema.Types.ObjectId, 
        ref: 'Doctor'
    },
    action: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: [ "PENDING", "IN_PROGRESS", "SUCCESS", "FAILED", "CANCELLED", "RETRY" ],
        default: "PENDING"
    },
    datasetId: {
        type: Schema.Types.ObjectId,
        ref: 'Dataset'
    }
});

export const Log = mongoose.model("Log", logSchema);