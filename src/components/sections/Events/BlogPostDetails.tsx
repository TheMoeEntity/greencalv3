"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IPost } from "@/types";
import Icon from "@/components/shared/Icons";
import VideoPlayer from "@/components/shared/VideoPlayer"; // Make sure this component exists

const BlogPostDetails: React.FC<{ post: IPost }> = ({ post }) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [viewImg, setViewImg] = useState<boolean>(false);
  const headedBy =
    post.headedBy.toLowerCase() === "kepha"
      ? "url('/images/Kepha_alt.jpg')"
      : "url('/images/brill.jpg')";

  return (
    <section className="mx-auto max-w-7xl text-[#405777] p-3 md:p-5 flex flex-col gap-8">
      {/* Modal for Image Preview */}
      {viewImg && imgSrc && (
        <div
          onClick={() => setViewImg(false)}
          className="fixed inset-0 z-[9999999] flex items-center justify-center bg-gray-800 bg-opacity-90 overflow-auto"
        >
          <div className="relative p-3 md:p-16 w-full max-w-[90%] max-h-[90vh]">
            {/* Set a container with relative positioning and defined height */}
            <div className="relative w-full h-[80vh]">
              <Image
                src={imgSrc}
                alt="Banner of event"
                quality={100}
                sizes="100vw"
                fill
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      )}

      <div className="py-10 xl:w-[75%] mx-auto flex flex-col gap-8">
        {/* Banner Image */}
        <div className="w-full">
          <Image
            src={post.media.banner}
            alt={`Banner of Greencal event titled ${post.title}`}
            quality={100}
            priority={true}
            width={300}
            height={300}
            sizes="100vw"
            className="object-cover rounded-xl w-full h-auto"
          />
        </div>

        {/* Post Meta */}
        <div className="w-full flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              style={{
                backgroundImage: headedBy,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            ></div>
            <span>
              Headed By{" "}
              <span className="text-[var(--greencal-primary)]">
                {post.headedBy}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Icon
              name="bx-calendar"
              color="var(--greencal-primary)"
              size="30px"
            />
            <span className="whitespace-nowrap">{post.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="bx-map" color="var(--greencal-primary)" size="30px" />
            <span>{post.location}</span>
          </div>
        </div>

        {/* Post Title */}
        <h1 className="text-2xl text-black md:text-[35px] font-medium leading-[1.15]">
          {post.title}
        </h1>

        {/* Category */}
        <div className="flex items-center gap-2">
          {post.category.toLowerCase() === "education" ? (
            <Icon
              name="bxs-graduation"
              color="var(--greencal-primary)"
              size="30px"
            />
          ) : (
            <Icon
              name="bxs-first-aid"
              color="var(--greencal-primary)"
              size="30px"
            />
          )}
          <span className="text-[var(--greencal-primary)] font-medium text-lg">
            {post.category}
          </span>
        </div>

        {/* Content - First Section */}
        <div dangerouslySetInnerHTML={{ __html: post.content.first }} />

        {/* Conditional Video Section */}
        {post.video && (
          <div className="my-8 overflow-hidden">
            <VideoPlayer
              media={post.video.url}
              thumbnail={post.video.thumbnail}
            />
          </div>
        )}

        {/* Media One Grid */}
        {post.media.media_one && post.media.media_one.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {post.media.media_one.map((media) => (
              <div
                key={media}
                onClick={() => {
                  setImgSrc(media);
                  setViewImg(true);
                }}
                className="cursor-pointer"
              >
                <Image
                  src={media}
                  alt="Media from event"
                  quality={100}
                  width={300}
                  height={300}
                  sizes="100vw"
                  className="object-cover w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}

        {/* Content - Second Section */}
        <div
          className="p-1"
          dangerouslySetInnerHTML={{ __html: post.content.two }}
        />

        {/* Media Two Grid */}
        {post.media.media_two && post.media.media_two.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {post.media.media_two.map((media) => (
              <div
                key={media}
                onClick={() => {
                  setImgSrc(media);
                  setViewImg(true);
                }}
                className="cursor-pointer"
              >
                <Image
                  src={media}
                  alt="Media from event"
                  quality={100}
                  width={300}
                  height={300}
                  sizes="100vw"
                  className="object-cover w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPostDetails;
