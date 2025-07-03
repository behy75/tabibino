import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { defaultLocale, locales, localePrefix } from './next-intl.config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

const protectedRoutes: Record<string, string> = {
  '/admin': 'admin',
  '/doctor': 'doctor',
  '/patient': 'patient',
};

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const locale = req.nextUrl.locale;

  const publicRoutes = [
    `/${locale}/login`,
    `/${locale}/register`,
    `/${locale}/forgot-password`,
    '/',
    `/${locale}`,
  ];

  if (publicRoutes.includes(pathname)) {
    return intlMiddleware(req);
  }

  for (const route in protectedRoutes) {
    const localizedPath = `/${locale}${route}`;
    if (pathname.startsWith(localizedPath)) {
      const token = await getToken({ req });
      console.log("PATH:", pathname, "ROLE:", token?.role);

      if (!token || token.role !== protectedRoutes[route]) {
        return NextResponse.redirect(
          new URL(`/${locale}/login`, req.url)
        );
      }
    }
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|api|.*\\..*).*)',
  ],
};
