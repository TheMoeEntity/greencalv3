import Image from "next/image";
import React from "react";
import banner from "../../../../public/images/donation_charity_alt.jpg";
import DonationsForm from "@/components/sections/Donations/DonationsForm";
import { notFound } from "next/navigation";
import { Helpers } from "@/helpers";
import { donors } from "@/types";
import DonorsTable from "@/components/sections/Donations/DonorsTable";
import { Metadata } from "next";
import DonationsClosed from "@/components/sections/Donations/DonationClosed";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const campaign = await Helpers.getSingleDonation(slug);
  // Fallback values in case campaign data is missing
  const campaignTitle = campaign?.name || slug.replace(/-/g, " ");
  const campaignDescription = `Learn more about the ${campaignTitle} campaign and how your donation can make a difference in empowering lives.`;

  return {
    title: `Donate: ${campaignTitle} - Greencal Foundation`,
    description: campaignDescription,
    keywords: `Greencal Foundation, donations, ${campaignTitle}, charity, support, fundraising`,
    authors: [
      {
        name: "Moses Chukwudi Nwigberi",
        url: "https://moewebverse.vercel.app",
      },
    ],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Greencal Foundation",
  };
}

const DonationPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const response = await Helpers.getSingleDonation(slug);
  if (!response) {
    notFound();
  }
  const donation = response;
  console.log(donation);
  const raised = (donation.donors || [])
    .map((donor) => donor.amount)
    .reduce((a, b) => a + b, 0);
  const progress = donation.goal > 0 ? (raised / donation.goal) * 100 : 0;
  const padded = progress + 0;
  const rounded = Math.floor(padded);
  return (
    <section className="mx-auto text-[#405777]  p-2 md:p-5 flex flex-col gap-8">
      <div className="py-3 xl:w-[75%] flex-wrap mx-auto flex flex-col gap-8">
        <div className="w-full">
          <Image
            src={donation.image}
            alt={`Banner of Greencal donation titled ${donation.name}`}
            quality={100}
            priority={true}
            width={300}
            height={300}
            sizes={"100vw"}
            className="object-cover rounded-xl w-full h-auto "
          />
        </div>
        <div className="-mt-0 md:-mt-20 flex flex-col mx-auto gap-8 max-w-full md:w-[80%] w-[95%]">
          {donation.donationClosed ? (
            <span className="-mt-0 text-lg md:mt-28">
              <DonationsClosed
                donation={donation}
                raised={raised}
                rounded={rounded}
              />
            </span>
          ) : (
            <div className="w-full bg-white md:px-5 rounded-lg shadow-lg z-[99]">
              <div className="w-full flex flex-wrap flex-col gap-3 mx-auto bg-white py-10 px-3 md:px-10 rounded-lg">
                <h1 className="font-semibold text-3xl md:text-4xl text-[var(--greencal-main)]">
                  {donation.name}
                </h1>
                <div className="flex flex-wrap items-center space-between gap-1 md:space-x-10">
                  <div className="relative md:grow-[1.5] flex-1 my-4 w-full h-2 bg-[#f5f5f5] rounded-full">
                    <div
                      style={{ width: `${rounded}%` }}
                      className={`absolute top-0 left-0 h-full bg-[var(--greencal-primary)] rounded-full`}
                    ></div>
                  </div>
                  <p className="text-sm basis-full md:basis-[20%] whitespace-nowrap text-gray-700">
                    <b className="text-[var(--greencal-primary)]">
                      ₦ {raised.toLocaleString()}
                    </b>{" "}
                    of{" "}
                    <b className="text-[var(--greencal-primary)]">
                      ₦ {Number(donation.goal).toLocaleString()}
                    </b>{" "}
                    goal
                  </p>
                </div>
                <DonationsForm />
              </div>
            </div>
          )}

          <div className="my-5 flex flex-col gap-10">
            {/* Donors List */}
            <div className="py-6 rounded-lg">
              <h2 className="text-4xl font-semibold mb-4 text-[var(--greencal-main)]">
                {donation.donationClosed ? "All" : "Recent"} Donations
              </h2>
              <div className="w-full">
                <div
                  className="div overflow-x-hidden"
                  style={{ maxWidth: "100%" }}
                >
                  {donation.donors && <DonorsTable donation={donation} />}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold text-[var(--greencal-main)]">
                Challenge
              </h2>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: donation.description.challenge,
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold text-[var(--greencal-main)]">
                Our Work
              </h2>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: donation.description.work }}
              />
            </div>

            <div className="grid gap-3 place-items-center grid-cols-1 md:grid-cols-2 items-center">
              {donation.media &&
                donation.media.map((media) => (
                  <div key={media} className="w-full">
                    <Image
                      src={media}
                      alt={`Greencal donation titled ${donation.name}`}
                      quality={100}
                      priority={true}
                      width={300}
                      height={300}
                      className="object-cover rounded-xl w-full h-auto "
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationPage;
