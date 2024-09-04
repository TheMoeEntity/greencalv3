"use client";

import { Helpers } from "@/helpers";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [status, setStatus] = useState("SEND MESSAGE");
  const [val, setVal] = useState("");
  const [done, setDone] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  return (
    <form
      onSubmit={(e) =>
        Helpers.handleSubmit(setStatus, setDone, e, enqueueSnackbar)
      }
      className="w-full flex flex-col gap-7 pb-10"
    >
      <Spinner done={!done} />
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        <div className="md:w-[48%] flex flex-col gap-1">
          <label htmlFor="" className="text-xl">
            Full name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            className=" py-4 px-5 bg-[#F1F1F1] outline-none"
            placeholder="Enter your full name"
          />
        </div>
        <div className="md:w-[48%] flex flex-col gap-1">
          <label htmlFor="" className="text-xl">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            className=" py-4 px-5 bg-[#F1F1F1] outline-none"
            placeholder="Enter your email address"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="md:w-[48%] flex flex-col gap-1">
          <label htmlFor="" className="text-xl">
            Phone
          </label>
          <input
            type="number"
            className=" py-4 px-5 bg-[#F1F1F1] outline-none"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="md:w-[48%] flex flex-col gap-1">
          <label htmlFor="" className="text-xl">
            Subject <span className="text-red-700">*</span>
          </label>
          <select
            className=" bg-transparent outline-none"
            style={{ width: "80%", padding: "10px 0px", color: "gray" }}
          >
            <option value="--Choose--">--Choose--</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Enquiries">Enquiries</option>
            <option value="Volunteer">I want to become a volunteer</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="text-xl">
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="bg-[#F1F1F1] min-h-40 py-4 px-5 border-none outline-none"
          placeholder="Your Message"
          name=""
          id=""
          cols={30}
        ></textarea>
      </div>
      <div className="mt-3">
        <button className="text-white bg-[#71cd6c] px-10 py-3">{status}</button>
      </div>
    </form>
  );
};

export default ContactForm;
