import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();

  const res = await fetch("http://localhost:6500/auth/check-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    return Response.json({ message: data.message }, { status: 400 });
  }

  cookies().set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  cookies().set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    path: "/",
  });

  return Response.json({
    user: data.user,
  });
}
