import * as certificateService from "../services/certificateService.js";

export const getCertificates = async (req, res) => {
  try {
    const certificates = await certificateService.getAllCertificates();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addCertificate = async (req, res) => {
  try {
    const newCert = await certificateService.createCertificate(req.body);
    res.status(201).json(newCert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

