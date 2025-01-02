import Image from "next/image";
import event4 from "../../../public/images/sickle-cell-outreach-3.jpg";
import Icon from "./Icons";

const Hero_Shared = ({ text }: { text: string; page?: string }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[100px] lg:h-[230px] relative">
        <div className="absolute flex flex-col gap-4 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl md:text-7xl font-medium">{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero_Shared;
