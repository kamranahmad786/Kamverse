import * as certificateService from "../services/certificateService.js";

// GET all certificates
export const getCertificates = async (req, res, next) => {
  try {
    const certs = await certificateService.getAllCertificates();
    res.json({ certificates: certs });
  } catch (err) {
    next(err);
  }
};

// POST create certificate
export const addCertificate = async (req, res, next) => {
  try {
    const cert = await certificateService.createCertificate(req.body);
    res.status(201).json(cert);
  } catch (err) {
    next(err);
  }
};

// DELETE certificate
export const removeCertificate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await certificateService.deleteCertificate(id);
    res.json({ deleted });
  } catch (err) {
    next(err);
  }
};
