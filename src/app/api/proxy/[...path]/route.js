// import { cookies } from "next/headers";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:6500";

// async function refreshTokens(refreshToken) {
//   const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ refreshToken }),
//   });

//   if (!res.ok) return null;

//   return await res.json();
// }

// async function handler(req, { params }) {
//   const cookieStore = cookies();

//   const accessToken = cookieStore.get("accessToken")?.value;
//   const refreshToken = cookieStore.get("refreshToken")?.value;

//   const path = params.path.join("/");

//   const body =
//     req.method !== "GET" && req.method !== "DELETE"
//       ? await req.text()
//       : undefined;

//   async function makeRequest(token) {
//     return fetch(`${BASE_URL}/${path}`, {
//       method: req.method,
//       headers: {
//         "Content-Type": "application/json",
//         ...(token && { Authorization: `Bearer ${token}` }),
//       },
//       body,
//     });
//   }

//   let response = await makeRequest(accessToken);

//   if ((response.status === 401 || response.status === 403) && refreshToken) {
//     const newTokens = await refreshTokens(refreshToken);

//     if (newTokens?.accessToken && newTokens?.refreshToken) {
//       const newAccessToken = newTokens.accessToken;
//       // const newRefreshToken = newTokens.refreshToken;

//       cookieStore.set("accessToken", newAccessToken, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "strict",
//         // sameSite: "lax",
//         path: "/",
//         maxAge: 60 * 60 * 24 * 30, // one month
//       });

//       // cookieStore.set("refreshToken", newRefreshToken, {
//       //   httpOnly: true,
//       //   secure: process.env.NODE_ENV === "production",
//       //   sameSite: "strict",
//       //   path: "/",
//       //   maxAge: 60 * 60 * 24 * 30 * 12, // one year
//       // });

//       response = await makeRequest(newAccessToken);
//     } else {
//       cookieStore.set("accessToken", "", { maxAge: 0, path: "/" });
//       cookieStore.set("refreshToken", "", { maxAge: 0, path: "/" });

//       return new Response(JSON.stringify({ message: "Unauthorized" }), {
//         status: 401,
//       });
//     }
//   }

//   const data = await response.text();

//   return new Response(data, {
//     status: response.status,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// export { handler as GET };
// export { handler as POST };
// export { handler as PUT };
// export { handler as DELETE };

import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:6500";

async function refreshTokens(refreshToken) {
  const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) return null;
  return await res.json();
}

function buildUpstreamHeaders(req, token) {
  const headers = new Headers();

  for (const [key, value] of req.headers.entries()) {
    if (["host", "connection", "content-length"].includes(key.toLowerCase()))
      continue;
    headers.set(key, value);
  }

  if (token) headers.set("Authorization", `Bearer ${token}`);
  else headers.delete("Authorization");

  if (
    !headers.get("Content-Type") &&
    req.method !== "GET" &&
    req.method !== "DELETE"
  ) {
    headers.set("Content-Type", "application/json");
  }

  return headers;
}

async function handler(req, { params }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const path = params.path.join("/");

  let body;
  const shouldHaveBody = req.method !== "GET" && req.method !== "DELETE";
  if (shouldHaveBody) {
    body = await req.text();
  }

  const makeRequest = async (token) => {
    const upstreamRes = await fetch(`${BASE_URL}/${path}`, {
      method: req.method,
      headers: buildUpstreamHeaders(req, token),
      body: shouldHaveBody ? body : undefined,

      cache: "no-store",
    });

    return upstreamRes;
  };

  let upstreamResponse = await makeRequest(accessToken);

  if (
    (upstreamResponse.status === 401 || upstreamResponse.status === 403) &&
    refreshToken
  ) {
    const newTokens = await refreshTokens(refreshToken);

    if (newTokens?.accessToken) {
      const newAccessToken = newTokens.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });

      upstreamResponse = await makeRequest(newAccessToken);
    } else {
      cookieStore.set("accessToken", "", { maxAge: 0, path: "/" });
      cookieStore.set("refreshToken", "", { maxAge: 0, path: "/" });

      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  const contentType =
    upstreamResponse.headers.get("content-type") || "application/json";
  const data = await upstreamResponse.text();

  return new Response(data, {
    status: upstreamResponse.status,
    headers: { "Content-Type": contentType },
  });
}

export { handler as GET };
export { handler as POST };
export { handler as PUT };
export { handler as DELETE };
