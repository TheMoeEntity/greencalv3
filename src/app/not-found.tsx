import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-[#0C4949]">
      <div className="flex flex-col justify-center items-center text-center gap-8 leading-tight text-[var(--ditco-primary)]">
        <h1 className="text-[200px] font-bold text-[#0C4949]">404</h1>
        <h1 className="text-[60px] font-bold">Page Not Found</h1>
        <h2 className="text-xl px-3">
          The page or resource you are looking for doesn&#39;t exist or has been
          moved
        </h2>
        <Link
          href={"/"}
          className="bg-[#0C4949] w-fit h-fit text-white px-5 py-3"
        >
          GO BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
