"use client";
import PaymentModal from "@/components/shared/PaymentModal";
import { sendDonorEmail } from "@/helpers/emailSender";
import Image from "next/image";
import React, { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  CreditCard,
  ArrowRightLeft,
  Hash,
  X,
  Bitcoin,
  Copy,
} from "lucide-react";
import { Helpers } from "@/helpers";
interface PaymentMethod {
  icon: React.ElementType;
  label: string;
}

const DonationsForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("₦10K");
  const [customAmount, setCustomAmount] = useState<string>("");
  const submitBtn = useRef<HTMLButtonElement | null>(null);
  const [isAnon, setIsAnon] = useState<boolean>(false);

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount("");
    setCustomAmount(e.target.value);
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

  const [methods] = useState<PaymentMethod[]>([
    { icon: CreditCard, label: "Bank" },
    { icon: Bitcoin, label: "Crypto" },
  ]);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(
    methods[0]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [details, setDetails] = useState<{ firstName: string; email: string }>({
    firstName: "",
    email: "",
  });
  const validateForm = () => {
    if (!details.firstName) {
      toast.error("Please fill in your name");
      return;
    } else if (
      !Helpers.validateEmail(details.email) ||
      details.email.trim() == ""
    ) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsModalOpen(true);
  };
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    const donorDetails = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      amount: selectedAmount,
      paymentMethod: selectedMethod.label,
      isAnonymous: isAnon,
    };

    try {
      const emailSent = await sendDonorEmail(donorDetails);
      if (emailSent) {
        toast.success("Donation details sent successfully");
        setIsModalOpen(false);
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Error in form submission: " + error);
    } finally {
      setLoading(false);
    }
  };
  const submitAction = async () => {
    if (submitBtn.current) {
      submitBtn.current.click();
    }
  };
  return (
    <form onSubmit={submitForm} className="flex flex-col gap-6">
      <PaymentModal
        methods={methods}
        setSelectedMethod={setSelectedMethod}
        selectedMethod={selectedMethod}
        loading={loading}
        isOpen={isModalOpen}
        submit={submitAction}
        onClose={() => setIsModalOpen(false)}
      />
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
                required
                value={details.firstName}
                onChange={(e) =>
                  setDetails((state) => ({
                    ...state,
                    firstName: e.target.value,
                  }))
                }
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 rounded-md bg-white border border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-base text-gray-700">
                Last Name
              </label>
              <input
                name="lastName"
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
              value={details.email}
              onChange={(e) =>
                setDetails((state) => ({ ...state, email: e.target.value }))
              }
              id="email"
              type="email"
              name="email"
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
      <button ref={submitBtn} type="submit" className="hidden">
        Donate Now 💚
      </button>
      <div className="flex flex-wrap space-y-5 items-center justify-between">
        <button
          type="button"
          onClick={validateForm}
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
    </form>
  );
};

export default DonationsForm;
