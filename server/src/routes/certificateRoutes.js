import express from "express";
import { getCertificates, addCertificate } from "../controllers/certificateController.js";

const router = express.Router();

router.get("/", getCertificates);
router.post("/", addCertificate);

export default router;
