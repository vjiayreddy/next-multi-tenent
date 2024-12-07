import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import subdomains from "./subdomains.json";
import NextAuth from "next-auth";
import { authConfig } from "./lib/auth/auth.config";

const { auth } = NextAuth(authConfig);
export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const session = await auth();
  console.log(session);
  const hostname = request.headers.get("host") || "";
  const allowedDomains = [
    "localhost:3000",
    "trillionclues.com.com",
    "yourdomain.com",
  ];
  // Check if the current hostname is in the list of allowed domains
  const isAllowedDomain = allowedDomains.some((domain) =>
    hostname.includes(domain)
  );
  // Extract the potential subdomain from the URL
  const subdomain = hostname.split(".")[0];

  if (isAllowedDomain && !subdomains.some((d) => d.subdomain === subdomain)) {
    return NextResponse.next();
  }
  const subdomainData = subdomains.find((d) => d.subdomain === subdomain);
  if (subdomainData) {
    // Rewrite the URL to a dynamic path based on the subdomain
    return NextResponse.rewrite(
      new URL(`/${subdomain}${url.pathname}`, request.url)
    );
  }
  return new Response(null, { status: 404 });
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};
