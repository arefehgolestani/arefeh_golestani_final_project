import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("accessToken")?.value;

  if (!token) {
    return Response.json({ user: null }, { status: 401 });
    // return Response.status(401).json({
    //   status: "failed",
    //   message: "You are unauthorized!",
    //   user: null,
    // });
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

  return Response.json({ status: "success" , user: data });
}
