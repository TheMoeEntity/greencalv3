import Image from "next/image";
import event4 from "../../../public/images/sickle-cell-outreach-3.jpg";

const Hero_Shared = ({ text, page }: { text: string; page: string }) => {
  return (
    <div className="w-full">
      <div className="w-full lg:h-[530px] relative">
        <div className="absolute flex flex-col gap-4 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-2xl md:text-7xl font-medium">{text}</h1>
          <div className="text-xl">
            pages <i className="fas fa-angle-right"></i>
            <span className="text-[#A0C761]"> {page}</span>
          </div>
        </div>
        <div
          style={{ backdropFilter: "blur(2.5px)" }}
          className="w-full h-full absolute bg-[rgba(0,0,0,0.7)] top-0 left-0"
        ></div>
        <Image
          src={event4}
          alt="Banner of event"
          quality={100}
          priority
          sizes={"100vw"}
          className="object-cover w-full lg:h-[530px] "
        />
      </div>
    </div>
  );
};

export default Hero_Shared;
