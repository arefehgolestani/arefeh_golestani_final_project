import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function serverFetch(path, options = {}) {
  const cookieStore = cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  async function makeRequest(token) {
    return fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      cache: "no-store",
    });
  }

  let response = await makeRequest(accessToken);

 
  if (response.status === 401 && refreshToken) {
    const refreshRes = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (refreshRes.ok) {
      const newTokens = await refreshRes.json();

      const newAccessToken = newTokens.accessToken;
      const newRefreshToken = newTokens.refreshToken;

     
      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // one month
      });

      cookieStore.set("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 30 * 12, // one year
      });

      
      response = await makeRequest(newAccessToken);
    } else {
     
      cookieStore.set("accessToken", "", { maxAge: 0, path: "/" });
      cookieStore.set("refreshToken", "", { maxAge: 0, path: "/" });

      throw new Error("Unauthorized");
    }
  }

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}