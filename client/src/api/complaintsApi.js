const BASE_URL = "http://localhost:5000/api";

export async function fetchComplaints() {
  const response = await fetch(`${BASE_URL}/complaints`);
  if (!response.ok) {
    throw new Error("Failed to fetch complaints");
  }
  return response.json();
}

export async function createComplaint(data) {
  const response = await fetch(`${BASE_URL}/complaints`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create complaint");
  }
  return response.json();
}
export async function loginAdmin(password) {
  const response = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  if (!response.ok) {
    throw new Error("Invalid password");
  }

  return response.json();
}

export async function fetchAdminComplaints(token) {
  const response = await fetch(`${BASE_URL}/complaints/admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unauthorized");
  }

  return response.json();
}
