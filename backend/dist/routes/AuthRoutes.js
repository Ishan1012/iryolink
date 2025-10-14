"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../controller/AuthController");
const router = express_1.default.Router();
router.post('/auth/signin', AuthController_1.signin);
router.post('/auth/signup', AuthController_1.signup);
// router.get('/me', authMiddleware, me);
// router.put('/me', authMiddleware, updateProfile);
// router.get('/google', googleAuthUrl);
// router.get('/google/callback', googleCallback);
exports.default = router;
//# sourceMappingURL=AuthRoutes.js.map