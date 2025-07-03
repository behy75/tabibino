// app/sitemap.xml/route.ts

// ✅ This tells Next.js to treat this as static (compatible with `next export`)
export const dynamic = 'force-static';

export async function GET(): Promise<Response> {
  const baseUrl = "https://tabibino.com";

  const staticRoutes = ["", "/login", "/doctors", "/about"];
  const locales = ["en", "fa"];

  const allRoutes = locales.flatMap((locale) =>
    staticRoutes.map((route) => `/${locale}${route}`)
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
      .map(
        (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
      )
      .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}