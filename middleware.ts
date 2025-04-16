import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Verificare fallback pentru database strategy
        return (
          !!token ||
          !!req.cookies.get("next-auth.session-token") ||
          !!req.cookies.get("__Secure-next-auth.session-token")
        );
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
