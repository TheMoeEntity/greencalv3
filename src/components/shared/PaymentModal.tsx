"use client";

import type React from "react";
import { useState } from "react";
import {
  CreditCard,
  ArrowRightLeft,
  Hash,
  X,
  Bitcoin,
  Copy,
} from "lucide-react";
import toast from "react-hot-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaymentMethod {
  icon: React.ElementType;
  label: string;
}

interface CryptoOption {
  name: string;
  address: string;
}

const cryptoOptions: CryptoOption[] = [
  { name: "BTC", address: "bc1qcatcpundqjcut964kze2klk8kpr95k3dpgac86" },
  { name: "SOL", address: "CQroPgsNo5swhotsLdiV6HqbwayPfzTQoueSWYZzmuQG" },
  { name: "USDT (TRC20)", address: "THosABWMdjECXs9Q9KYHyYoyQj4JKKUmnS" },
  {
    name: "USDT (BEP20/ERC20)",
    address: "0xEe236685c927cC3082309216952FFCd448D70554",
  },
];

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [selectedBank, setSelectedBank] = useState("");
  const [methods] = useState<PaymentMethod[]>([
    { icon: CreditCard, label: "Bank" },
    { icon: Bitcoin, label: "Crypto" },
  ]);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(
    methods[0]
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
    console.log("Copied to clipboard:", text);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-[999999999] inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">PAY TO</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex space-x-2">
            {methods.map((method) => (
              <div
                key={method.label}
                onClick={() => setSelectedMethod(method)}
                className={`flex-1 flex items-center justify-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors duration-500 ${
                  selectedMethod.label === method.label
                    ? "bg-[var(--greencal-primary)] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <method.icon
                  className={`h-5 w-5 ${selectedMethod.label === method.label ? "text-white" : "text-gray-500"}`}
                />
                <span>{method.label}</span>
              </div>
            ))}
          </div>

          {selectedMethod.label === "Bank" && (
            <div className="space-y-2">
              <p className="font-medium">
                Choose your bank to start the payment
              </p>
              {[{ name: "United Bank for Africa", code: "2187659424" }].map(
                ({ name, code }) => (
                  <div
                    key={name}
                    className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="bank"
                          value={name}
                          checked={selectedBank === name}
                          onChange={() => setSelectedBank(name)}
                          className="mr-2"
                        />
                        <span>{name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{code}</span>
                    </label>
                  </div>
                )
              )}
              <aside className="w-full font-medium p-1 text-center">
                Uburu Collins Uchenna
              </aside>
            </div>
          )}

          {selectedMethod.label === "Crypto" && (
            <div className="space-y-2">
              <p className="font-medium">Choose a cryptocurrency</p>
              {cryptoOptions.map((option) => (
                <div key={option.name} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option.name}</span>
                    <button
                      onClick={() => copyToClipboard(option.address)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Copy size={20} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 break-all">
                    {option.address}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
