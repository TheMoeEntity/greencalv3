"use client";
import useIsVisible from "@/hooks/useIsVisible";
import { DonationsType } from "@/types";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const DonationsClosed: React.FC<{
  donation: DonationsType;
  raised: number;
  rounded: number;
}> = ({ donation, raised, rounded }) => {
  const [shouldStart, setShouldStart] = useState<boolean>(false);
  const [showRaised, setShowRaised] = useState<boolean>(false);
  const { isVisible, ref } = useIsVisible(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldStart(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg">
      <h2 className="text-4xl font-bold text-[var(--greencal-main)] mb-4">
        Donation Closed
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for your generous support.
      </p>
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Amount Raised:</span>
          <span
            ref={ref}
            className="text-xl font-bold text-[var(--greencal-primary)]"
          >
            {shouldStart && isVisible && (
              <CountUp
                start={0}
                end={raised}
                duration={35.5}
                separator=","
                prefix="₦"
                onEnd={() => setShowRaised(true)}
              />
            )}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            style={{
              width: isVisible ? `${rounded}%` : "1%",
              transition: `35.5s`,
            }}
            className="h-2 bg-[var(--greencal-primary)] rounded-full transition-all duration-500"
          ></div>
        </div>
        {showRaised && (
          <p className="text-sm text-center text-gray-600">
            ₦{raised.toLocaleString()} raised of ₦
            {Number(donation.goal).toLocaleString()} goal.
          </p>
        )}
      </div>
    </div>
  );
};

export default DonationsClosed;
