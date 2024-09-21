import Image from "next/image";
import React from "react";
import { IPost } from "@/types";

const BlogPostDetails: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <section className="mx-auto max-w-7xl text-[#405777] p-3 md:p-5 flex flex-col gap-8">
      <div className="py-10 xl:w-[75%] mx-auto flex flex-col gap-8 ">
        <h1 className=" text-2xl text-center text-black md:text-[45px] font-semibold leading-normal ">
          {post.title}
        </h1>
        <div className="font-light text-center">
          {post.date}
          <span className="pl-3 border-l-[0.5px] border-l-black mx-3">
            GREENCAL FOUNDATION{" "}
          </span>
        </div>
        <div className="w-full">
          <Image
            src={post.media.banner}
            alt={`Banner of Greencal event titled ${post.title}`}
            quality={100}
            priority={true}
            width={300}
            height={300}
            sizes={"100vw"}
            className="object-cover w-full h-auto "
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content.first }} />
        <div className="flex flex-col md:flex-row w-full gap-3">
          {post.media.media_one.map((media) => (
            <div key={media} className="flex-1">
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

        <div dangerouslySetInnerHTML={{ __html: post.content.two }} />

        <div className="flex bg-red-400 flex-col md:flex-row w-full gap-3">
          {post.media.media_two.length > 1 && post.media.media_two.map((media) => (
            <div key={media} className="flex-1">
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
