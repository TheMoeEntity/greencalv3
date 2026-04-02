"use client";
import { donors } from "@/types";
import { useState } from "react";

export default function DonorsTable({
  donation,
}: {
  donation: { donors?: donors[] };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Main Donors Table (Showing only 7 donors) */}
      {donation.donors && donation.donors.length > 0 && (
        <div className="overflow-x-scroll w-full flex flex-col items-center flex-wrap justify-center">
          <table className="w-full flex-1 border-collapse overflow-x-scroll">
            <thead>
              <tr className="bg-[var(--greencal-primary)] text-xs md:text-sm text-white">
                <th className="p-3 text-left">Donor</th>
                <th className="p-3 text-left">Amount </th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Method</th>
              </tr>
            </thead>
            <tbody className="w-full text-xs md:text-sm  overscroll-x-scroll">
              {donation.donors.slice(0, 7).map((donor, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3">{donor.name}</td>
                  <td className="p-3 font-bold">
                    ₦{(donor.amount || 0).toLocaleString()}
                  </td>
                  <td className="p-3">{donor.date}</td>
                  <td className="p-3">{donor.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Button to Open Modal */}
      {donation.donors && donation.donors.length > 7 && (
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-4 py-2 bg-[var(--greencal-primary)] text-white rounded-md hover:bg-green-700"
        >
          View Full List
        </button>
      )}

      {/* Full Donors List Modal */}
      {isOpen && donation.donors && donation.donors.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
          <div className="bg-white w-[95%] max-w-2xl p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Full Donors List</h2>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[var(--greencal-primary)] text-white">
                  <th className="p-3">Name</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Method</th>
                </tr>
              </thead>
              <tbody>
                {[...donation.donors].map((donor, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="p-3">{donor.name}</td>
                    <td className="p-3 font-bold">
                      ₦{donor.amount.toLocaleString()}
                    </td>
                    <td className="p-3 whitespace-nowrap">{donor.date}</td>
                    <td className="p-3">{donor.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
