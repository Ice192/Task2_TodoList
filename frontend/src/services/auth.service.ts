const DEFAULT_API_URL = "http://localhost:5000";
const API_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? DEFAULT_API_URL;
const BASE_URL = `${API_URL}/api/users`;

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

const postJson = async <T>(url: string, payload: unknown): Promise<T> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = typeof data?.message === "string" ? data.message : "Request failed";
    throw new Error(message);
  }

  return data as T;
};

export const registerUser = (data: RegisterPayload) => {
  return postJson(`${BASE_URL}/register`, data);
};

export const loginUser = (data: LoginPayload) => {
  return postJson<{ token: string }>(`${BASE_URL}/login`, data);
};
