import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Mask group.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center min-h-screen text-[var(--greencal-main)]"
    >
      <div className="flex flex-col justify-center items-center text-center gap-8 leading-tight text-[var(--ditco-primary)]">
        <h1 className="text-[90px] md:text-[150px] font-bold text-[var(--greencal-primary)]">
          404
        </h1>
        <h1 className="text-5xl md:text-[60px] font-bold">Page Not Found</h1>
        <h2 className="text-xl px-3">
          The page or resource you are looking for doesn&#39;t exist or has been
          moved
        </h2>
        <Link
          href={"/"}
          className="bg-[var(--greencal-primary)] w-fit h-fit text-white px-5 py-3"
        >
          GO BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
