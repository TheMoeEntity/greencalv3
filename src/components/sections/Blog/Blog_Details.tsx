import Image from "next/image";
import React from "react";
import event from "../../../../public/images/sickle-cell.jpg";
import event2 from "../../../../public/images/sickle-cell-outreach.jpg";
import event3 from "../../../../public/images/sickle-cell-outreach-2.jpg";
import event4 from "../../../../public/images/sickle-cell-outreach-3.jpg";
import event5 from "../../../../public/images/sickle-cell-infographic.jpg";
import event6 from "../../../../public/images/cake-cutting-on-sickle-cell-day.jpg";
import event7 from "../../../../public/images/sickle-cell-plaque.jpg";

const Blog_Details = () => {
  return (
    <section className="mx-auto max-w-7xl text-[#405777] p-3 md:p-5 flex flex-col gap-8">
      <div className="py-10 xl:w-[75%] mx-auto flex flex-col text-center gap-8 ">
        <h1 className=" text-2xl text-black md:text-[45px] font-semibold leading-normal ">
          Greencal Foundation in collaboration with MWAN Ebonyi State celebrates
          World Sickle Cell Day with donation at AEFUTHA
        </h1>
        <div className="font-light">
          19th June 2024
          <span className="pl-3 border-l-[0.5px] border-l-black mx-3">
            GREENCAL FOUNDATION{" "}
          </span>
        </div>
        <div className="w-full">
          <Image
            src={event4}
            alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
            quality={100}
            priority={true}
            sizes={"100vw"}
            className="object-cover w-full h-auto "
          />
        </div>
        <article className="leading-loose text-sm text-justify flex flex-col gap-5">
          <p>
            As part of the activities to mark{" "}
            <strong>World Sickle Cell Day 2024</strong>, the Alex Ekwueme
            Federal University Teaching Hospital Abakaliki (AEFUTHA) celebrated
            the resilience and strength of those living with Sickle Cell
            Disorder (SCD) on Wednesday, 19th June 2024, at the Cooperative
            Hall, AEFUTHA 1. The event, which began at 9:30 am, was filled with
            inspiring talks, educational sessions, and expressions of support
            for individuals living with SCD.
          </p>
          <p>
            The program started with a warm welcome and introduction of
            dignitaries, followed by an opening prayer. The Coordinator of the
            Sickle Cell Center gave the opening remarks, and the Chief Medical
            Director (CMD) also addressed the audience. The highlight of the
            event included a series of enlightening talks: Professor Ngozi Ugwu
            presented on {"SCD: What is it All About?"} while Dr. Obinna Chukwu
            emphasized the{" "}
            {`"Importance of Early Screening for SCD."
            Additionally, Dr. Chuks Akulue spoke on "Health Maintenance in SCD."`}
          </p>
        </article>

        <article className="leading-loose text-sm text-justify flex flex-col gap-5">
          <p>
            The event was further enriched by the cutting of{" "}
            {`a "Warrior's Cake,"`}
            symbolizing the strength and perseverance of individuals living with
            SCD. Appreciation was extended to the Greencal Foundation, through
            its founder, Adum Obinna, who generously made a donation to support
            the Sickle Cell Center. The event concluded with refreshments, a
            vote of thanks, and a closing prayer, leaving everyone inspired and
            informed about SCD.
          </p>
          <p>
            Sickle Cell Disorder (SCD) is the most common genetic blood
            condition in Africa, with Nigeria at its epicenter, housing about
            4-6 million people living with the disease. Approximately 1 in every
            4 Nigerians carries a sickle cell trait. SCD is an inherited blood
            disorder marked by defective hemoglobin (Hb), which affects the red
            blood {`cells'`} ability to carry oxygen efficiently. It is
            inherited when both parents carry the sickle cell trait, while a
            single inheritance results in the sickle cell trait itself.
          </p>
        </article>

        <article className="leading-loose text-sm text-justify flex flex-col gap-5">
          <p>
            One of the greatest challenges in managing SCD is the lack of
            accurate information, leading to numerous myths and misconceptions.
            Many adolescents transitioning to adulthood lack sufficient
            knowledge to manage their health effectively. Adult doctors may also
            be unfamiliar with treating SCD-related health complications. By
            debunking these myths, we can better support individuals living with
            SCD.
          </p>
          <div>
            <ol className="list-disc pl-5 flex flex-col gap-3">
              <li>
                <strong>
                  Sickle cell is not contagious nor a result of poor lifestyle
                  choices.
                </strong>{" "}
                It is a genetic disorder passed down from parents.
              </li>
              <li>
                <strong>
                  Sickle cell does not only impact people of African descent.
                </strong>{" "}
                While it predominantly affects those of African ancestry, it can
                occur in any ethnicity, depending on the parents&#39; SCD
                status.
              </li>
              <li>
                <strong>People with SCD are not lazy.</strong> The fatigue or
                tiredness they experience is a symptom of the disease, not a
                reflection of their character.
              </li>
              <li>
                <strong>Not all SCD patients are opioid drug seekers.</strong>{" "}
                Opioids are often prescribed to manage severe pain, but this
                does not imply dependency or misuse.
              </li>
              <li>
                <strong>People with SCD are not immune to malaria.</strong> They
                still need preventive measures and treatment against malaria,
                contrary to popular belief.
              </li>
              <li>
                <strong>
                  Babies with SCD can and do survive to adulthood.
                </strong>{" "}
                Advances in medical care have significantly improved survival
                rates.
              </li>
              <li>
                <strong>
                  The only cure for SCD is a bone marrow transplant.
                </strong>{" "}
                However, this is rare and only done when a matched donor is
                available.
              </li>
              <li>
                <strong>The SS trait is not a mild form of SCD.</strong> It
                involves inheriting only one abnormal Hb gene and typically
                presents no symptoms.
              </li>
            </ol>
          </div>
        </article>
        <div className="flex flex-col md:flex-row w-full gap-3">
          <div className="flex-1">
            <Image
              src={event}
              alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
          <div className="flex-1">
            <Image
              src={event2}
              alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
          <div className="flex-1">
            <Image
              src={event3}
              alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
        </div>

        <article className="leading-loose text-sm text-justify flex flex-col gap-5">
          <p>
            The complications of SCD are many and varied, stemming from the
            blockage of blood flow caused by sickled cells. These include
            chronic severe pain (crises), vision problems, anemia, lung tissue
            damage, frequent infections, kidney disease, stroke, fatigue, and
            more. Despite these challenges, events like those hosted by AEFUTHA
            and supported by organizations such as the Greencal Foundation help
            raise awareness, dispel myths, and foster a supportive community.
          </p>
          <p>
            Greencal Foundation, led by its founder Adum Obinna, is committed to
            supporting initiatives that promote awareness and provide assistance
            to those affected by SCD. Their donation to the Sickle Cell Center
            is a testament to their dedication to this cause, and we encourage
            others to join in this effort to support those living with Sickle
            Cell Disorder.
          </p>
        </article>

        <div className="flex flex-col md:flex-row w-full gap-3">
          <div className="flex-1">
            <Image
              src={event5}
              alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
          <div className="flex-1">
            <Image
              src={event7}
              alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
          <div className="flex-1">
            <Image
              src={event6}
              alt="Banner of event. Adum Obinna, founder of Greencal, with other volunteers AEFUTHA in celebration of world sickle cell day."
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto "
            />
          </div>
        </div>

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

export default Blog_Details;
