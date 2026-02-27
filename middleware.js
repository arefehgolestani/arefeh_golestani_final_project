// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const token = request.cookies.get("accessToken")?.value;

//   const protectedRoutes = ["/user/profile", "user/tours", "/user/transactions"];

//   const { pathname } = request.nextUrl;

//   const isProtected = protectedRoutes.some((route) =>
//     pathname.startsWith(route),
//   );

//   if (isProtected && !token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }
