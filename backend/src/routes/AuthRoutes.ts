import express from "express";
import { me, signin, signup } from "../controller/AuthController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post('/auth/signin', signin);
router.post('/auth/signup', signup);
router.get('/auth/me', verifyToken, me);
// router.put('/me', authMiddleware, updateProfile);


// router.get('/google', googleAuthUrl);
// router.get('/google/callback', googleCallback);

export default router;