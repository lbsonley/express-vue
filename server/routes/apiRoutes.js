import { Router } from "express";
import { generateDummyResponse } from "../controllers/dummyControler.js";

const router = Router();

// POST route to generate a structured response
router.post("/dummy/", generateDummyResponse);

export default router;
