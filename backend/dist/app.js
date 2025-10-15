"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const DatasetRoutes_1 = __importDefault(require("./routes/DatasetRoutes"));
const ResultRoutes_1 = __importDefault(require("./routes/ResultRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', AuthRoutes_1.default);
app.use('/api/v1', DatasetRoutes_1.default);
app.use('/api/v1', ResultRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map