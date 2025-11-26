// FRONTEND: /client/src/services/certificateApi.js

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export async function fetchCertificates() {
  try {
    const url = API_BASE
      ? `${API_BASE}/api/certificates`   // Production (Render backend)
      : `/api/certificates`;             // Development (Vite proxy)

    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch certificates: ${res.status}`);
    }

    const data = await res.json();
    return data.certificates;  // MUST return certificates array
  } catch (error) {
    console.error("❌ Certificate fetch error:", error);
    throw error;
  }
}
