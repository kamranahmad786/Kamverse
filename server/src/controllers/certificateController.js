import * as certificateService from "../services/certificateService.js";

export const getAllCertificates = async (req, res, next) => {
  try {
    const certificates = await certificateService.getCertificates();
    res.json({ certificates });
  } catch (err) {
    next(err);
  }
};

export const addCertificate = async (req, res, next) => {
  try {
    const cert = await certificateService.addCertificate(req.body);
    res.status(201).json(cert);
  } catch (err) {
    next(err);
  }
};
