import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:6500";

export async function serverFetch(path, options = {}) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  async function makeRequest(token) {
    const headers = new Headers(options.headers || {});

    if (!headers.has("Content-Type") && options.method !== "GET") {
      headers.set("Content-Type", "application/json");
    }

    if (token) headers.set("Authorization", `Bearer ${token}`);

    return fetch(`${BASE_URL}${path}`, {
      ...options,
      headers,
      cache: "no-store",
    });
  }

  let response = await makeRequest(accessToken);

  if ((response.status === 401 || response.status === 403) && refreshToken) {
    const refreshRes = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
      cache: "no-store",
    });

    if (refreshRes.ok) {
      const newTokens = await refreshRes.json();
      const newAccessToken = newTokens.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });

      response = await makeRequest(newAccessToken);
    } else {
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");
      throw new Error("Unauthorized");
    }
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Request failed");
  }

  return response.json();
}
