import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt";
import { Regex } from "lucide-react";
const authPages = ["/auth/login", "/auth/signup"];
const publicPages = [...authPages];

const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/auth/login",
    },
  }
);
function localeRegex(routes: string[]) {
  return RegExp(
    `^(/(${routing.locales.join("|")}))?(${routes
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
}
export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = localeRegex(publicPages);
  // Check if the request URL matches any of the public pages
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    const token = await getToken({ req });
    const authPathnameRegex = localeRegex(publicPages);
    // Check if the request URL matches any of the auth pages
    const isAuthPage = authPathnameRegex.test(req.nextUrl.pathname);
    if (token && isAuthPage) {
      const redirctUrl = new URL("/dashboard", req.nextUrl.origin);
      return NextResponse.redirect(redirctUrl);
    }
    return handleI18nRouting(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
