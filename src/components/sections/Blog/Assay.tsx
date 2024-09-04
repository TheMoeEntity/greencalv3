import Image from "next/image";
import React from "react";
import event from "../../../../public/images/sickle-cell.jpg";
import event2 from "../../../../public/images/sickle-cell-outreach.jpg";
import event3 from "../../../../public/images/sickle-cell-outreach-2.jpg";
import event4 from "../../../../public/images/essay.jpg";

const Assay = () => {
  return (
    <section className="mx-auto max-w-7xl text-[#405777] p-3 md:p-5 flex flex-col gap-8">
      <div className="py-10 xl:w-[75%] mx-auto flex flex-col text-center gap-8 ">
        <h1 className=" text-3xl text-black md:text-[45px] font-semibold leading-normal ">
          Greencal Foundation Uplifts Students Through Annual Essay Competition
        </h1>
        <div className="font-light">
          15th March 2024
          <span className="pl-3 border-l-[0.5px] border-l-black mx-3">
            GREENCAL FOUNDATION{" "}
          </span>
        </div>
        <div className="w-full">
          <Image
            src={event4}
            alt="Banner of event"
            quality={100}
            sizes={"100vw"}
            className="object-cover w-full h-auto "
          />
        </div>
        <article className="leading-[1.4] text-justify flex flex-col gap-5">
          <p>
            Greencal Foundation is delighted to announce the successful hosting
            of its first official event — an annual essay competition aimed at
            providing educational support and rewarding academic excellence
            among students in Abakaliki, Ebonyi State. The event represents a
            significant milestone in the{` Foundation's`} mission to empower young
            minds through education and to foster a culture of academic
            excellence. This program follows a two-pronged approach, offering
            unique opportunities for both SSCE/NECO candidates and students in
            other classes.
          </p>
          <p>
            The essay competition provides a stimulating platform for students
            to showcase their critical thinking, writing skills, and knowledge.
            Through the competition, Greencal Foundation encourages research and
            well-developed arguments, thereby cultivating a love of learning
            that transcends the classroom. This approach equips students with
            valuable skills that will serve them throughout their academic
            careers and in life, embodying the {`spirit of doing "things that have
            never been done before" — a true testament to the essence of living.`}
          </p>
        </article>

        <article className="leading-[1.4] text-justify flex flex-col gap-5">
          <p>
            <strong>Building a Brighter Future</strong> — Greencal Foundation
            firmly believes that education is the cornerstone of both individual
            growth and societal development. By investing in the next generation
            of scholars, the Foundation empowers students to overcome
            challenges, reach their full potential, and contribute meaningfully
            to their communities. The annual essay competition is a key
            initiative toward this goal, ensuring that financial constraints do
            not hinder a{` student's`} pursuit of knowledge.
          </p>
          <p>
            The dreams of yesterday are the hopes of today and the realities of
            tomorrow. In alignment with this philosophy, Greencal Foundation is
            committed to shaping a brighter future for the youth of Abakaliki by
            providing the tools and resources they need to succeed.
          </p>
        </article>

        <article className="leading-[1.4] text-justify flex flex-col gap-5">
          <p>
            <strong className="text-lg">
              Investing in the Future: Scholarships for SSCE/NECO Exams
            </strong>{" "}
            — For graduating secondary school students preparing for their SSCE
            or NECO exams, Greencal {`Foundation's`} essay competition offers a
            unique opportunity. High-performing students can win scholarships
            that cover the cost of their WAEC or NECO exam fees. This critical
            support removes a significant financial barrier, allowing students
            to concentrate fully on their studies and confidently approach their
            examinations. By alleviating the financial burden of exam fees, the
            Foundation enables these young scholars to focus on their academic
            goals without undue stress.
          </p>
          <p>
            Greencal Foundation is dedicated to investing in the future of young
            Nigerians, ensuring that no student is left behind due to financial
            constraints. This initiative reflects the {`Foundation's`} belief that
            every child deserves the chance to achieve their dreams, regardless
            of their economic background.
          </p>
        </article>

        <article className="leading-[1.4] text-justify flex flex-col gap-5">
          <p>
            <strong>Encouraging a Love of Learning: School Fee Support</strong>{" "}
            — Understanding the importance of nurturing a passion for learning
            throughout a {`student's`} academic journey, Greencal Foundation extends
            its essay competition to students at all class levels. Winners in
            this category receive scholarships to help cover their school fees,
            thus easing the financial burden on families and ensuring
            uninterrupted education for the students. This support encourages
            students to remain focused on their studies and fosters a love of
            learning that lasts a lifetime.
          </p>
          <p>
            The Foundation believes that education is a lifelong journey and
            that students should be supported at every stage of their
            development. By offering scholarships and support beyond the
            critical exam years, Greencal Foundation is paving the way for a
            more educated and empowered community.
          </p>
        </article>

        <article className="leading-[1.4] text-justify flex flex-col gap-5">
          <p>
            <strong>Celebrating Success: Disbursement Ceremony</strong> — On
            February 21st, 2024, Greencal Foundation hosted a ceremony to
            disburse funds to the winners of the 2023 essay competition. The
            event took place at New Covenant College, Odomoke, Ishieke, Ebonyi
            State, Nigeria, and was a joyous occasion celebrating the
            achievements of the students. It was an opportunity to acknowledge
            their hard work, dedication, and the high standards of excellence
            they had demonstrated.
          </p>
          <p>
            The ceremony was filled with excitement and hope as the Foundation
            reaffirmed its commitment to supporting education and community
            development. Parents, teachers, and community leaders were present
            to celebrate the achievements of the young scholars, highlighting
            the importance of such initiatives in building a brighter future for
            all.
          </p>
        </article>

        <article className="leading-[1.4] text-justify flex flex-col gap-5">
          <p>
            <strong>A Commitment to Education and Community Development</strong>{" "}
            — Greencal {`Foundation's`} annual essay competition is a testament to
            its unwavering commitment to education and community development. By
            providing scholarships and fostering a culture of academic
            excellence, Greencal Foundation empowers students to reach their
            full potential and lays the groundwork for a brighter future.
          </p>
          <p>
            The{` Foundation's`} mission is clear: to go places and do things that
            have never been done before, providing the next generation with
            opportunities to dream, achieve, and excel. Greencal Foundation is
            dedicated to supporting young minds in their educational pursuits,
            ensuring that the dreams of today become the realities of tomorrow.
          </p>
        </article>

        {/* <div className="flex w-full gap-3">
          <div className="flex-1">
            <Image
              src={event}
              alt="Banner of event"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
          <div className="flex-1">
            <Image
              src={event2}
              alt="Banner of event"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
          <div className="flex-1">
            <Image
              src={event3}
              alt="Banner of event"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
        </div> */}



        <div className="flex items-center gap-3">
          <span> Share this post: </span>
          <div className="flex gap-3 text-2xl">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assay;
