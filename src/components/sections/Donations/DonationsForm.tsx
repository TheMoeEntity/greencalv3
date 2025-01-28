"use client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DonationsForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("₦10K");
  const [customAmount, setCustomAmount] = useState<string>("");
  const btcWallet = "your_btc_wallet_address";
  const solWallet = "your_sol_wallet_address";
  const [isAnon, setIsAnon] = useState<boolean>(false);

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom input if a preset amount is selected
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount("");
    setCustomAmount(e.target.value);
  };
  const [mail, setMail] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Donation amount: ${customAmount || selectedAmount}`);
  };
  const [donations, _] = useState<{ amount: number; text: string }[]>([
    {
      amount: 10000,
      text: "₦10K",
    },
    {
      amount: 50000,
      text: "₦50K",
    },
    {
      amount: 100000,
      text: "₦100K",
    },
    {
      amount: 500000,
      text: "₦500K",
    },
    {
      amount: 1000000,
      text: "₦1M",
    },
  ]);

  const [currAmount, setCurrAmount] = useState<{
    amount: number;
    text: string;
  }>({
    amount: 10000,
    text: "₦10K",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col gap-6"
    >
      {/* Donation Amount Section */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-10">
        <div className="flex flex-wrap gap-2 items-center">
          {donations.map((amount) => (
            <button
              type="button"
              key={amount.text}
              onClick={() => handleAmountClick(amount.text)}
              className={`py-2 px-3 border rounded-md text-sm md:text-base ${
                selectedAmount === amount.text
                  ? "bg-[var(--greencal-primary)] text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {amount.text}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Insert Custom Value"
          value={customAmount}
          onChange={handleCustomAmountChange}
          className="w-full sm:w-auto flex-1 py-2 px-4 border rounded-md border-gray-300 text-sm md:text-base"
        />
      </div>

      {/* Personal Information Section */}
      <div className="space-y-4">
        <div className="w-full max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-[#2D4B3D]">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-base text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                placeholder="First Name"
                className="w-full p-2 rounded-md bg-white border border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-base text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                placeholder="Last Name"
                className="w-full p-2 rounded-md bg-white border border-gray-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-base text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md bg-white border border-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="anonymous"
            type="checkbox"
            checked={isAnon}
            onChange={(e) => setIsAnon(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="anonymous" className="text-sm sm:text-base">
            Keep me anonymous
          </label>
        </div>
      </div>

      {/* Submit and Total Section */}
      <div className="flex flex-wrap space-y-5 items-center justify-between">
        <button
          type="submit"
          className="py-3 w-full md:w-fit px-6 bg-[var(--greencal-primary)] text-white font-semibold rounded-md hover:bg-[var(--greencal-main)]"
        >
          Donate Now 💚
        </button>
        <div className="w-full text-center md:w-fit md:text-right text-lg font-semibold">
          Donation Total:{" "}
          <span className="text-[var(--greencal-primary)]">
            {customAmount || selectedAmount}
          </span>
        </div>
      </div>

      {/* Wallet Addresses Section */}
      {/* <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-[var(--greencal-main)]">
            Donate with Crypto
          </h2>
          <div className="w-10 h-10">
            <Image
              alt="Bitcoin Logo"
              width={10}
              height={10}
              src={"https://www.vectorlogo.zone/logos/bitcoin/bitcoin-icon.svg"}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-20 flex items-center justify-center h-20">
            <Image
              alt="Solana Logo"
              width={20}
              height={20}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/3/38/Solana-sol-logo-horizontal.svg"
              }
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">BTC Wallet:</span>
            <span className="text-gray-700 break-all">{btcWallet}</span>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(btcWallet)}
              className="py-1 px-3 text-sm bg-[var(--greencal-primary)] text-white rounded-md hover:bg-[var(--greencal-main)]"
            >
              Copy
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">SOL Wallet:</span>
            <span className="text-gray-700 break-all">{solWallet}</span>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(solWallet)}
              className="py-1 px-3 text-sm bg-[var(--greencal-primary)] text-white rounded-md hover:bg-[var(--greencal-main)]"
            >
              Copy
            </button>
          </div>
        </div>
      </div> */}
    </form>
  );
};

export default DonationsForm;
