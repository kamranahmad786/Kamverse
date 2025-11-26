import express from "express";
import { getAllCertificates, addCertificate } from "../controllers/certificateController.js";

const router = express.Router();

router.get("/", getAllCertificates);
router.post("/", addCertificate);

export default router;
