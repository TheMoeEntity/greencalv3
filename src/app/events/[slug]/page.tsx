import BlogPostDetails from "@/components/sections/Events/BlogPostDetails";
import { Helpers } from "@/helpers";
import { Props } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const product = await Helpers.getBlogPost(slug);

  return {
    title: "GreenCal Foundation event" + " |" + product?.title,
    description: product?.explainer,
  };
}
const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const response = await Helpers.getBlogPost(slug);
  if (!response) {
    notFound();
  }
  const blog = response;
  console.log(response.media.media_two.length);
  return (
    <main>
      <BlogPostDetails post={blog} />
    </main>
  );
};

export default BlogPost;
