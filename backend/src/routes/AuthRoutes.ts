import express from "express";
import { googleAuthUrl, googleCallback, me, signin, signup, updateProfile } from "../controller/AuthController";

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/me', me);
router.put('/me', updateProfile);


router.get('/google', googleAuthUrl);
router.get('/google/callback', googleCallback);

export default router;