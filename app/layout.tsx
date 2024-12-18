import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/lib/layouts/MainLayout";
import ThemeRegistry from "@/lib/mui/ThemeRegistry";
import ApolloClientProvider from "@/lib/apollo/provider";
import NextAuthSessionProvider from "@/lib/auth/provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="__next" suppressHydrationWarning>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body>
        <ApolloClientProvider>
          <NextAuthSessionProvider>
            <MainLayout>
              <ThemeRegistry>{children}</ThemeRegistry>
            </MainLayout>
          </NextAuthSessionProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
