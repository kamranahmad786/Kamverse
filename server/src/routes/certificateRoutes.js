import express from "express";
import {
  getCertificates,
  addCertificate,
  removeCertificate
} from "../controllers/certificateController.js";

const router = express.Router();

router.get("/", getCertificates);
router.post("/", addCertificate);
router.delete("/:id", removeCertificate);

export default router;
