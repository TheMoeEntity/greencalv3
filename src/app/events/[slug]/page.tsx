import BlogPostDetails from "@/components/sections/Events/BlogPostDetails";
import { Helpers } from "@/helpers";
import { getDocuments } from "@/helpers/lib/firebase";
import { Props } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const product = await Helpers.getBlogPost(slug);
  const eventTitle = product?.title;
  const explainer =
    product?.explainer ||
    `Get detailed information about the ${eventTitle} event hosted by Greencal Foundation. Learn about the schedule, speakers, and how you can participate in this impactful event.`;

  return {
    title: `Event: ${eventTitle} - Greencal Foundation`,
    description: `${explainer}`,
    keywords: `Greencal Foundation, events, ${eventTitle}, charity, community outreach, workshops, fundraisers`,
    authors: [
      {
        name: "Moses Chukwudi Nwigberi",
        url: "https://moewebverse.vercel.app",
      },
    ],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Greencal Foundation",
  };
}
export async function generateStaticParams() {
  const posts = await getDocuments();

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}
const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const response = await Helpers.getBlogPost(slug);
  if (!response) {
    notFound();
  }
  const blog = response;
  return (
    <main>
      <BlogPostDetails post={blog} />
    </main>
  );
};

export default BlogPost;
