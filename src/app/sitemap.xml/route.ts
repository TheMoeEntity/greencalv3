import { getDocuments, getDonations } from "@/helpers/lib/firebase";
import { DonationsType, IPost } from "@/types";
import { NextResponse } from "next/server";

const siteUrl = "https://greencalfoundation.com";

export async function GET() {
  // Fetch dynamic pages (e.g., blog posts, products, etc.)
  const donations = (await getDonations()) as DonationsType[];
  const events = (await getDocuments()) as IPost[];

  // Define static routes
  const staticPages = ["", "/about", "/contact", "/events", "/donations"];

  // Generate XML structure
  const urls = [
    ...staticPages.map((page) => `<url><loc>${siteUrl}${page}</loc></url>`),
    ...donations.map(
      (post: { slug: string }) =>
        `<url><loc>${siteUrl}/donations/${post.slug}</loc></url>`
    ),
    ...events.map(
      (post: { slug: string }) =>
        `<url><loc>${siteUrl}/events/${post.slug}</loc></url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("\n")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
