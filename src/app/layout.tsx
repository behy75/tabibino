import "../styles/globals.css";
import { Providers } from "./providers";
import { geistMono, geistSans } from "@/lib/fonts";
import { metadata } from "@/lib/metadata";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-gray-100 text-black dark:bg-zinc-900 dark:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
