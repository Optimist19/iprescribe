const token = import.meta.env.VITE_API_TOKEN;
const baseUrl = import.meta.env.VITE_BASE_URL;
export const allPatients = async () => {
  const res = await fetch(
    `${baseUrl}/admin/patients`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch patients");
  }

  return res.json();
};
export const getAllStats = async () => {
  const res = await fetch(
    `${baseUrl}/admin/dashboard/stats`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch patients");
  }

  return res.json();
};
