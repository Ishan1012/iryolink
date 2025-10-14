import express from "express";
import { signin, signup } from "../controller/AuthController";

const router = express.Router();

router.post('/auth/signin', signin);
router.post('/auth/signup', signup);
// router.get('/me', authMiddleware, me);
// router.put('/me', authMiddleware, updateProfile);


// router.get('/google', googleAuthUrl);
// router.get('/google/callback', googleCallback);

export default router;