import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("accessToken")?.value;

  if (!token) {
    return Response.json({ user: null }, { status: 401 });
  }

  const res = await fetch("http://localhost:6500/user/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return Response.json({ user: null }, { status: 401 });
  }

  const data = await res.json();

  return Response.json({ user: data });
}
