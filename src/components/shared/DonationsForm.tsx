"use client";
import React, { useState } from "react";

const DonationForm: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("N10K");
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom input if a preset amount is selected
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount("");
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Donation amount: ${customAmount || selectedAmount}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Donation Amount</h2>
        <div className="flex gap-7 mt-4">
          <div className="flex gap-3 items-cent">
            {["₦10K", "₦50K", "₦100K", "₦500K", "₦1M"].map((amount) => (
              <button
                type="button"
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`py-2 px-2 border rounded-md ${
                  selectedAmount === amount
                    ? "bg-[var(--greencal-primary)] text-white"
                    : "bg-white border-gray-300"
                }`}
              >
                {amount}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Insert Custom Value"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="py-2 px-4 border rounded-md flex-grow border-gray-300"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[var(--greencal-main)]">
          Personal Information
        </h2>
        <div className="flex my-3 flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 w-full md:w-[48%]">
            <label htmlFor="" className="text-lg">
              First name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              required
              className="py-2 px-4 border rounded-md border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-[48%]">
            <label htmlFor="" className="text-lg">
              Last name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="py-2 px-4 border rounded-md border-gray-300"
            />
          </div>
        </div>
        <div className="flex my-3 flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-lg">
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              required
              className="py-2 px-4 border rounded-md border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="py-3 px-6 bg-[var(--greencal-primary)] text-white font-semibold rounded-md hover:bg-[var(--greencal-main)]"
        >
          Donate Now 💚
        </button>
        <div className="flex items-center gap-2">
          <img src="/mastercard.png" alt="MasterCard" className="w-8 h-8" />
          <img src="/visa.png" alt="Visa" className="w-8 h-8" />
          <img src="/bitcoin.png" alt="Bitcoin" className="w-8 h-8" />
          <img src="/paypal.png" alt="PayPal" className="w-8 h-8" />
        </div>
      </div>

      <div className="text-right text-lg font-semibold text-green-500">
        Donation Total: {customAmount || selectedAmount}
      </div>
    </form>
  );
};

export default DonationForm;
