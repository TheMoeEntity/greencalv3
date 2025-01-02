"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IPost } from "@/types";
import Icon from "@/components/shared/Icons";

const BlogPostDetails: React.FC<{ post: IPost }> = ({ post }) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [viewImg, setViewImg] = useState<boolean>(false);
  const headedBy =
    post.headedBy.toLowerCase() == "kepha"
      ? "url('/images/Kepha_alt.jpg')"
      : "url('/images/brill.jpg')";
  return (
    <section className="mx-auto max-w-7xl text-[#405777] p-3 md:p-5 flex flex-col gap-8">
      {viewImg && imgSrc && (
        <div
          onClick={() => setViewImg(false)}
          className="fixed top-0  left-0 inset-0 z-[9999999] flex items-center justify-center bg-gray-800 bg-opacity-90"
        >
          <div className="flex justify-center relative items-center md:min-w-[60%] max-h-[80%] md:max-w-[60%] p-3 md:p-16 rounded">
            {/* <div className="flex hidden absolute right-4 md:-right-5 -top-8 w-full justify-end text-3xl text-white">
              <button onClick={() => setViewImg(false)}>&times;</button>
            </div> */}
            <div className="rounded-lg md:w-[85%]">
              <Image
                src={imgSrc}
                alt="Banner of event"
                width={400}
                height={300}
                quality={100}
                sizes={"100vw"}
                className="object-cover rounded-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
      <div className="py-10 xl:w-[75%] mx-auto flex flex-col gap-8 ">
        <div className="w-full">
          <Image
            src={post.media.banner}
            alt={`Banner of Greencal event titled ${post.title}`}
            quality={100}
            priority={true}
            width={300}
            height={300}
            sizes={"100vw"}
            className="object-cover rounded-xl w-full h-auto "
          />
        </div>
        <div className="w-full flex-wrap flex flex-col gap-y-4 md:flex-row gap-3">
          <div className="flex w-fit items-center gap-2">
            <div
              style={{
                backgroundImage: headedBy,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-8 h-8 md:w-10 mx-auto rounded-full md:h-10"
            ></div>
            <span>
              Headed By{" "}
              <span className="text-[var(--greencal-primary)]">
                {post.headedBy}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Icon
                name="bx-calendar"
                color="var(--greencal-primary)"
                size="30px"
              />
              <span className="whitespace-nowrap">{post.date}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Icon name="bx-map" color="var(--greencal-primary)" size="30px" />
              <span className="lg:te">{post.location}</span>
            </span>
          </div>
        </div>
        <h1 className=" text-2xl text-black md:text-[35px] font-medium leading-[1.1]">
          {post.title}
        </h1>
        <span className="text-[var(--greencal-primary)] font-medium text-lg">
          {post.category}
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.content.first }} />
        <div className="flex flex-col md:flex-row w-full gap-3">
          {post.media.media_one.map((media) => (
            <div
              onClick={() => {
                setImgSrc(media);
                setViewImg(true);
              }}
              key={media}
              className="flex-1 cursor-pointer"
            >
              <Image
                src={media}
                alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
                quality={100}
                width={300}
                height={300}
                sizes={"100vw"}
                className="object-cover w-full h-auto "
              />
            </div>
          ))}
        </div>

        <div
          className="p-1"
          dangerouslySetInnerHTML={{ __html: post.content.two }}
        />

        <div className="flex flex-wrap flex-col md:flex-row w-full gap-3 gap-y-4">
          {post.media.media_two.length > 1 &&
            post.media.media_two.map((media) => (
              <div
                key={media}
                onClick={() => {
                  setImgSrc(media);
                  setViewImg(true);
                }}
                className="flex-1 cursor-pointer"
              >
                <Image
                  src={media}
                  alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
                  quality={100}
                  sizes={"100vw"}
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto "
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostDetails;
