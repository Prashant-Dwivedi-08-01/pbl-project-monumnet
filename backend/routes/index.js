import express from 'express';
import { getMonument } from "../controllers/index.js";

const router = express.Router();

router.get('/:name', getMonument);

export default router;