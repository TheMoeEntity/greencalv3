"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        // customButtonGroup={<CustomSliderButtons />}
        // renderButtonGroupOutside={true}
        arrows={true}
        autoPlay={true}
        showDots={true}
        draggable={true}
        autoPlaySpeed={1000}
        transitionDuration={10000}
      >
        <div className="p-8 h-[1000px] md:h-[1300px] lg:h-[auto] md:p-16 md:pb-28 bg-[#FBF8F3] flex flex-col lg:flex-row w-full">
          <div className="basis-full flex-1 flex flex-col gap-3 md:gap-10 md:basis-1/2">
            <h1 className="text-[#A2CA62] pt-5 w-full font-bold text-lg md:text-3xl">
              Helping Hands, Brighter Futures.
            </h1>
            <h2 className="text-[40px] w-full md:text-5xl font-medium leading-[1.2] md:leading-[1.3]">
              Together, We Empower Our Communities
            </h2>
            <h3 className=" md:text-xl text-sm leading-loose text-[#525252]">
              Supporting healthcare, education, and faith-based initiatives in
              Abakaliki, Ebonyi State.
            </h3>
            <div className="w-full flex mt-5 flex-row gap-3">
              <div
                style={{
                  backgroundImage:
                    "url('/images/Greencal Menstrual Hygiene Awareness.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-[170px] basis-1/2 md:basis-auto rounded-md h-[90px] md:h-[170px]"
              ></div>
              <div className="flex flex-col justify-center gap-2 md:gap-4">
                <h2 className="text-xl md:text-2xl font-bold  leading-[1.2]">
                  Most Recent Event
                </h2>
                <h3 className="text-xs md:text-sm text-[#525252]">
                  GREENCAL Foundation partners NAESMS for Education <br /> and
                  awareness on menstrual hygiene.
                </h3>
              </div>
            </div>
          </div>
          <div className="basis-full md:pb-20 relative md:basis-1/2">
            <div className="w-[180px] h-[180px] md:w-[350px] z-[100] absolute p-2 md:p-3 bg-[#FBF8F3] md:h-[350px] -translate-x-1/2 md:-translate-x-0 top-5 left-1/2 md:left-12 rounded-full">
              <div
                style={{
                  backgroundImage: "url('/images/sickle-cell.jpg')",
                  backgroundSize: "cover",
                }}
                className="w-full h-full rounded-full"
              ></div>
            </div>
            <div className="w-[300px] h-[300px] md:w-[450px] absolute bg-[#FBF8F3] md:h-[450px] top-14 md:top-5 right-1/2 translate-x-1/2 md:-translate-x-0 md:right-12 rounded-full">
              <div
                style={{
                  backgroundImage: "url('/images/banner3.jpg')",
                  backgroundSize: "cover",
                }}
                className="w-full h-full rounded-full"
              ></div>
            </div>
          </div>
        </div>
        <div className="p-8 h-[1000px] md:h-[1300px] lg:h-[auto] md:p-16 md:pb-28 bg-[#FBF8F3] flex flex-col lg:flex-row w-full">
          <div className="basis-full flex-1 flex flex-col gap-3 md:gap-10 md:basis-1/2">
            <h1 className="text-[#A2CA62] pt-5 w-full font-bold text-lg md:text-3xl">
              Building a Stronger community.
            </h1>
            <h2 className="text-[40px] w-full md:text-5xl font-medium leading-[1.2] md:leading-[1.3]">
              Where Compassion Meets Need.
            </h2>
            <h3 className=" md:text-xl text-sm leading-loose text-[#525252]">
              Greencal Foundation provides hope and support through medical
              assitance, education, and community outreach.
            </h3>
            <div className="w-full invisible flex mt-5 flex-row gap-3">
              <div
                style={{
                  backgroundImage:
                    "url('/images/Greencal Menstrual Hygiene Awareness.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-[170px] basis-1/2 md:basis-auto rounded-md h-[90px] md:h-[170px]"
              ></div>
              <div className="flex flex-col justify-center gap-2 md:gap-4">
                <h2 className="text-xl md:text-2xl font-bold  leading-[1.2]">
                  Most Recent <br /> Event
                </h2>
                <h3 className="text-xs md:text-sm text-[#525252]">
                  GREENCAL Foundation partners NAESMS for Education <br /> and
                  awareness on menstrual hygiene.
                </h3>
              </div>
            </div>
          </div>
          <div className="basis-full md:pb-20 relative md:basis-1/2">
            <div className="w-[180px] h-[180px] md:w-[350px] z-[100] absolute p-2 md:p-3 bg-[#FBF8F3] md:h-[350px] -translate-x-1/2 md:-translate-x-0 top-5 left-1/2 md:left-12 rounded-full">
              <div
                style={{
                  backgroundImage: "url('/images/outreach5.jpg')",
                  backgroundSize: "cover",
                }}
                className="w-full h-full rounded-full"
              ></div>
            </div>
            <div className="w-[300px] h-[300px] md:w-[450px] absolute bg-[#FBF8F3] md:h-[450px] top-14 md:top-5 right-1/2 translate-x-1/2 md:-translate-x-0 md:right-12 rounded-full">
              <div
                style={{
                  backgroundImage: "url('/images/outreach6.jpg')",
                  backgroundSize: "cover",
                }}
                className="w-full h-full rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
