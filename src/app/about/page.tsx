import Hero_Shared from "@/components/shared/Hero_Shared";
import React from "react";
import outreach from "../../../public/images/sickle-cell-outreach-3.jpg";
import Image from "next/image";
import Icon from "@/components/shared/Icons";

const About_Us = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero_Shared text={"About Us"} page={"about"} />
      <div className="w-full flex gap-10 lg:flex-row flex-col p-3 md:p-8">
        <div className="flex lg:px-10 flex-col gap-3 flex-wrap flex-1 basis-full md:basis-[47%]">
          <h1 className="font-semibold text-3xl lg:text-[35px]">
            About GREENCAL FOUNDATION
          </h1>
          <div className="w-11 mt-2 h-[3px] bg-[#71CD6C]"></div>
          <p className="w-full md:mt-4 leading-loose text-sm">
            Greencal Foundation is a non-profit organization based in Abakaliki,
            Ebonyi State, Nigeria. We are dedicated to creating pathways to
            success through education and promoting well-being among the
            financially challenged and less privileged communities.
          </p>
          <p className="w-full leading-loose text-sm">
            Greencal Foundation was born out of a deeply personal experience.
            Our founder, Obinna Adum, was deeply affected by the passing of his
            mother, Mrs. Juliana Calista Adum. A renowned philanthropist
            herself, Mrs. Adum dedicated her life to helping others in need.
            When she fell ill, Obinna was inspired to create a lasting legacy in
            her honor. Greencal Foundation serves as a way to continue Mrs.
            Adum&#39;s incredible work and provide the support Obinna would have
            wanted for her.
          </p>
          <p className="w-full leading-loose text-sm">
            At Greencal Foundation, we&#39;re passionate about transforming
            lives in Abakaliki, Ebonyi State. With a focus on education, medical
            outreach, and scholarships, we strive to create a brighter future
            for children, fostering a community of empowerment and growth. We
            believe that by investing in education and basic needs, we can equip
            the next generation to overcome challenges and reach their full
            potential.
          </p>
        </div>
        <div className="basis-full rounded-full overflow-hidden md:basis-[45%] flex justify-center items-center">
          {/* <Image
            src={outreach}
            alt="Greencal outreach"
            priority
            quality={100}
            sizes={"100vw"}
            className="object-cover rounded-md w-full h-auto "
          /> */}
          <div
            style={{
              backgroundImage: "url('/images/sickle-cell-outreach-3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[270px] rounded-full h-[270px] lg:w-[550px] lg:h-[550px]"
          ></div>
        </div>
      </div>
      <div className="mx-auto max-w-full md:max-w-[95%] flex flex-col gap-10 p-3 md:p-12">
        <div className="flex flex-col gap-y-8 md:gap-x-16 md:flex-row">
          <div className="leading-loose flex-1 text-sm">
            <div>
              <h1 className="font-semibold text-3xl lg:text-[35px]">
                Our Mission
              </h1>
              <div className="w-11 mt-2 h-[3px] bg-[#71CD6C]"></div>
            </div>

            <p className="mt-8">
              Our mission is to empower the less privileged and underserved
              communities through targeted initiatives and relief programs. We
              are committed to breaking the cycle of poverty by providing
              scholarships and grants to students who face financial barriers to
              completing their education.
            </p>
            <p>
              In addition, we strive to bring essential support to those in
              rural areas, ensuring that no one is left behind.
            </p>
            <ul className="list-disc ml-7 mt-3">
              <li>
                Providing assistance to individuals and families struggling with
                medical bills. Upholding the values of compassion, empathy, and
                generosity exemplified by Mrs. Juliana Calista Adum.
              </li>
              <li>
                Supporting access to quality healthcare in underserved
                communities.
              </li>
              <li>
                Offering scholarships and educational support programs to
                empower students of all ages.
              </li>
              <li>
                Partnering with churches and faith-based organizations to
                address community needs.
              </li>
              <li>
                Through compassion, action, and community collaboration, we aim
                to create a foundation of hope and opportunity for all
                individuals we serve.
              </li>
            </ul>
          </div>

          <div className="leading-loose flex-1 flex flex-col text-sm">
            <div>
              <h1 className="font-semibold text-3xl lg:text-[35px]">
                Our Vision
              </h1>
              <div className="w-11 mt-2 h-[3px] bg-[#71CD6C]"></div>
            </div>

            <p className="mt-8">
              Our vision is a world where poverty and educational inequality are
              eradicated, and every individual has the resources and
              opportunities needed to thrive. We dream of communities where
              support reaches the farthest corners, empowering the poor and
              needy to rise above their circumstances.
            </p>
            <p>
              With a focus on sustainable development and empowerment, we
              envision a future where everyone, regardless of their background,
              has access to education, healthcare, and the essential means to
              lead fulfilling lives. We believe in a world transformed through
              generosity, where every act of kindness makes a difference.
            </p>
          </div>
        </div>

        <div className="my-8">
          <h1 className="font-semibold text-center text-3xl lg:text-[35px]">
            Leadership
          </h1>
          <div className="w-11 -ml-8 mx-auto mt-2 h-[3px] bg-[#71CD6C]"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-8">
          <div className="flex-1 flex flex-col gap-3">
            <div
              style={{
                backgroundImage: "url('/images/brill.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[200px] mx-auto rounded-full h-[200px] lg:w-[350px] lg:h-[350px]"
            ></div>
            <h2 className="text-center mt-3">Founder</h2>
            <h1 className="font-semibold text-center text-2xl">
              Adum Abraham Obinna
            </h1>
            <p className="text-sm leading-loose">
              Adum Obinna, a passionate philanthropist, Economics student and
              owner of{" "}
              <a
                className="font-bold underline"
                href="https://brillxchange.com"
                target="_blank"
              >
                BrillX
              </a>
              , in Ebonyi State, established Greencal Foundation in memory of
              his inspiring mother. Witnessing her dedication to helping others
              ignited a fire in him to continue her legacy of giving back to the
              community.
            </p>
            <div className="flex justify-center items-center gap-3">
              {" "}
              <a href="https://instagram.com/thenameisbrill" target="_blank">
                <Icon name="bxl-instagram" color="#A0C861" size="40px" />
              </a>{" "}
              <a href="https://twitter.com/thenameisbrill" target="_blank">
                <Icon name="bxl-twitter" color="#A0C861" size="40px" />
              </a>
              <a href="https://twitter.com/thenameisbrill" target="_blank">
                <Icon name="bxl-facebook" color="#A0C861" size="40px" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div
              style={{
                backgroundImage: "url('/images/Kepha_alt.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[200px] mx-auto rounded-full h-[200px] lg:w-[350px] lg:h-[350px]"
            ></div>
            <h2 className="mt-3 text-center">Co-founder</h2>
            <h1 className="font-semibold text-center text-2xl">Kepha</h1>
            <p className="text-sm leading-loose">
              Kepha, a dedicated medical student, brings his medical expertise
              and unwavering commitment to social justice to Greencal
              Foundation. Witnessing the struggles faced by many in Abakaliki
              firsthand fuels his drive to improve access to quality healthcare
              in underserved communities.
            </p>
            {/* <div className="flex justify-center items-center gap-3">
              {" "}
              <a href="https://instagram.com/thenameisbrill" target="_blank">
                <Icon name="bxl-instagram" color="#A0C861" size="40px" />
              </a>{" "}
              <a href="https://twitter.com/thenameisbrill" target="_blank">
                <Icon name="bxl-twitter" color="#A0C861" size="40px" />
              </a>
              <a href="https://twitter.com/thenameisbrill" target="_blank">
                <Icon name="bxl-facebook" color="#A0C861" size="40px" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
