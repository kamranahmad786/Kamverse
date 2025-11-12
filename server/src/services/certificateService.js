import Certificate from "../models/certificateModel.js";

/**
 * Fetch all certificates from the database.
 */
export async function getAllCertificates() {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    return certificates;
  } catch (error) {
    throw new Error("Error fetching certificates: " + error.message);
  }
}

/**
 * Add a new certificate to the database.
 * @param {Object} data - Certificate data
 */
export async function createCertificate(data) {
  try {
    const newCert = new Certificate(data);
    await newCert.save();
    return newCert;
  } catch (error) {
    throw new Error("Error adding certificate: " + error.message);
  }
}

/**
 * Delete a certificate by its ID.
 * @param {string} id - MongoDB document ID
 */
export async function deleteCertificate(id) {
  try {
    const deleted = await Certificate.findByIdAndDelete(id);
    if (!deleted) throw new Error("Certificate not found");
    return deleted;
  } catch (error) {
    throw new Error("Error deleting certificate: " + error.message);
  }
}
