import Image from "next/image";
import React from "react";
import banner from "../../../../public/images/donation_charity_alt.jpg";
import DonationsForm from "@/components/sections/Donations/DonationsForm";
import { notFound } from "next/navigation";
import { Helpers } from "@/helpers";
import { donors } from "@/types";

const DonationPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const response = await Helpers.getSingleDonation(slug);
  if (!response) {
    notFound();
  }
  const donation = response;
  const raised = donation.donors.map((x) => x.amount).reduce((a, b) => a + b);
  const progress = (raised / donation.goal) * 100;
  const padded = progress + 0;
  const rounded = Math.floor(padded);
  return (
    <section className="mx-auto text-[#405777] p-2 md:p-5 flex flex-col gap-8">
      <div className="py-3 xl:w-[75%] mx-auto flex flex-col gap-8">
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
        <div className="-mt-0 md:-mt-28 flex flex-col mx-auto gap-8 max-w-full md:w-[80%] w-[95%]">
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
          <div className="my-10 flex flex-col gap-10">
            {/* Donors List */}
            <div className="py-6 rounded-lg">
              <h2 className="text-4xl font-semibold mb-4 text-[var(--greencal-main)]">
                Recent Donations
              </h2>
              {/* <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[var(--greencal-primary)] text-white">
                      <th className="p-3 text-left">Donor</th>
                      <th className="p-3 text-left">Amount </th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donation.donors.map((donor, index) => (
                      <tr key={index} className="border-b hover:bg-gray-100">
                        <td className="p-3">{donor.name}</td>
                        <td className="p-3 font-bold">
                          ₦{donor.amount.toLocaleString()}
                        </td>
                        <td className="p-3">{donor.date}</td>
                        <td className="p-3">{donor.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
              <div className="w-full overflow-x-scroll">
                <div className="overflow-x-scroll">
                  <table className="w-full border-collapse overflow-x-scroll">
                    <thead>
                      <tr className="bg-[var(--greencal-primary)] text-white">
                        <th className="p-3 text-left">Donor</th>
                        <th className="p-3 text-left">Amount </th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Method</th>
                      </tr>
                    </thead>
                    <tbody className="w-full text-xs md:text-sm  overscroll-x-scroll">
                      {donation.donors.map((donor, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                          <td className="p-3">{donor.name}</td>
                          <td className="p-3 font-bold">
                            ₦{donor.amount.toLocaleString()}
                          </td>
                          <td className="p-3">{donor.date}</td>
                          <td className="p-3">{donor.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold text-[var(--greencal-main)]">
                Challenge
              </h2>
              <p className="text-sm">{donation.description.challenge}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold text-[var(--greencal-main)]">
                Our Work
              </h2>
              <p className="text-sm">{donation.description.work}</p>
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
