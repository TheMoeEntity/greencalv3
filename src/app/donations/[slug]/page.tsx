import Image from "next/image";
import React from "react";
import banner from "../../../../public/images/donation_charity_alt.jpg";
import DonationForm from "@/components/shared/DonationsForm";

const DonationDonationsPage: React.FC = () => {
  return (
    <section className="mx-auto text-[#405777] p-3 md:p-5 flex flex-col gap-8">
      <div className="py-3 xl:w-[75%] mx-auto flex flex-col gap-8">
        <div className="w-full">
          <Image
            src={banner}
            alt={`Banner of Greencal event titled`}
            quality={100}
            priority={true}
            width={300}
            height={300}
            sizes={"100vw"}
            className="object-cover rounded-xl w-full h-auto "
          />
        </div>
        <div className="-mt-20 flex flex-col mx-auto gap-8 max-w-full w-[85%]">
          <div className="w-full flex flex-col gap-3 mx-auto  bg-white py-10 px-5 shadow-lg z-[9999] rounded-lg">
            <h1 className="font-semibold text-4xl text-[var(--greencal-main)]">
              WAEC Assistance
            </h1>
            <div className="flex items-center space-between gap-5">
              <div className="relative my-4 w-full h-2 bg-[#f5f5f5] rounded-full">
                <div className="absolute top-0 left-0 h-full w-[65%] bg-[var(--greencal-primary)] rounded-full"></div>
              </div>
              <p className="text-sm grow-[1.5] whitespace-nowrap text-gray-700">
                <b className="text-black">N 1,780,550</b> of N2,000,000 goal
              </p>
            </div>
            <DonationForm />
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold text-[var(--greencal-main)]">
                Challenge
              </h2>
              <p className="text-sm">
                Donating to students in Nigeria who are preparing for the WAEC
                and JAMB exams comes with several challenges. One significant
                hurdle is ensuring that the donations reach the intended
                recipients, as poor infrastructure and unreliable transportation
                can hinder distribution efforts. Additionally, identifying the
                specific needs of students can be difficult, as some may require
                financial aid for exam fees, while others may need study
                materials or tutoring services. There is also the challenge of
                navigating bureaucratic processes, as coordinating with schools
                and local authorities may require overcoming red tape. Ensuring
                transparency and accountability in the use of funds is another
                key challenge, as it is essential to prevent misuse and ensure
                that the donations are effectively supporting the students&#39;
                educational goals.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold text-[var(--greencal-main)]">
                Our Work
              </h2>
              <p className="text-sm">
                To overcome these challenges, donors should collaborate with
                local schools and community leaders to identify students&#39;
                specific needs. Organizing fundraising campaigns to cover exam
                fees, study materials, and tutoring is essential. Partnering
                with established local charities can streamline the donation
                process, while implementing transparent reporting systems
                ensures accountability and fosters trust. These efforts help
                maximize the impact of the donation and support students in
                their exam preparations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationDonationsPage;
