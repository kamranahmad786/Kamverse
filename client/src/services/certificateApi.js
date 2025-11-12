const API_BASE =
  import.meta.env.VITE_BACKEND_URL || ""; // ✅ leave blank — Vite proxy will handle localhost calls

export async function fetchCertificates() {
  try {
    const res = await fetch(`/api/certificates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch certificates: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("❌ Certificate fetch error:", error);
    throw error;
  }
}
