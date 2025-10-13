import express from "express";
import { signin, signup } from "../controller/AuthController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
// router.get('/me', authMiddleware, me);
// router.put('/me', authMiddleware, updateProfile);


// router.get('/google', googleAuthUrl);
// router.get('/google/callback', googleCallback);

export default router;