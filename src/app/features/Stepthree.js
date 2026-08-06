"use client";
import Image from "next/image";
import { Pineconelogo } from "../icons/Pineconelogo";
import { Arrow } from "../icons/Arrow";
import { Arrowleft } from "../icons/Arrowleft";
import { useState } from "react";
import { Calendar } from "../icons/Calendar";
import { Imagelogo } from "../icons/Imagelogo";

export const Stepthree = (props) => {
  const [date, setDate] = useState("");
  const [errorDate, setErrorDate] = useState("");
  const [picture, setPicture] = useState(null);
  const [errorPicture, setErrorPicture] = useState("");

  const eventTakerDate = (e) => {
    setDate(e.target.value);
    if (errorDate) setErrorDate("");
  };

  const eventTakerPicture = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPicture(URL.createObjectURL(file));
      if (errorPicture) setErrorPicture("");
    }
  };

  const validateDate = (value) => {
    if (!value) {
      return "Please select a date of birth.";
    }
    const [year] = value.split("-");
    const currentYear = new Date().getFullYear();
    if (currentYear - Number(year) < 16) {
      return "You must be at least 16 years old.";
    }
    return "";
  };

  const validatePicture = (file) => {
    if (!file) {
      return "Image cannot be blank";
    }
    return "";
  };

  const handleButtonSection3 = () => {
    const firstError = validateDate(date);
    const secondError = validatePicture(picture);

    setErrorDate(firstError);
    setErrorPicture(secondError);

    if (firstError === "" && secondError === "") {
      props.handleButtonSection3?.();
    }
  };

  return (
    <div className="w-120 min-h-163.75 flex flex-col rounded-lg bg-white px-8 py-8 justify-between gap-6">
      <div className="w-104 flex flex-col gap-7">
        <div className="w-104 flex flex-col gap-2">
          <Pineconelogo />
          <p className="font-inter not-italic text-[26px] font-semibold text-[#202124] text-shadow-[0px_4px_4px_#00000040]">
            Join Us! 😎
          </p>
          <p className="font-inter not-italic font-normal text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="w-104 flex flex-col gap-4">
          <div className="w-104 flex flex-col gap-1">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Date of birth{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              type="date"
              value={date}
              onChange={eventTakerDate}
              className={`w-104 h-11 shrink-0 rounded-lg border border-solid py-2 px-3 text-slate-700 ${
                errorDate ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none cursor-pointer`}
            />
            {errorDate && (
              <p className="text-red-500 text-xs mt-1 font-inter">
                {errorDate}
              </p>
            )}
          </div>
          <div className="w-104 flex flex-col gap-1">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Profile Image{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>

            <label
              className={`w-104 h-45 shrink-0 flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed bg-[#7F7F800D] cursor-pointer transition-colors relative overflow-hidden ${
                errorPicture ? "border-red-500" : "border-[#CBD5E1]"
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={eventTakerPicture}
                className="hidden"
              />
              {picture ? (
                <Image
                  src={picture}
                  alt="Profile preview"
                  fill
                  unoptimized
                  className="object-cover rounded-md"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-sm">
                    <Imagelogo />
                  </div>
                  <p className="font-inter font-medium text-[14px] text-[#09090B]">
                    Add image
                  </p>
                </div>
              )}
            </label>
            {errorPicture && (
              <p className="text-red-500 text-xs mt-1 font-inter">
                {errorPicture}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-104 h-11 flex gap-2">
        <button
          type="button"
          onClick={props.stepBack}
          className="w-32 h-11 py-2.5 px-3 gap-1 bg-[#FFFFFF] border border-solid border-[#CBD5E1] rounded-md flex justify-center items-center cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <Arrowleft />
          <p className="font-inter font-medium text-[16px] text-[#202124]">
            Back
          </p>
        </button>
        <button
          type="button"
          onClick={handleButtonSection3}
          className="w-70 h-11 flex gap-1 items-center rounded-md py-2.5 px-3 bg-[#121316] justify-center cursor-pointer hover:bg-[#27282c] transition-colors"
        >
          <p className="font-inter font-medium text-[16px] text-[#FFFFFF]">
            Continue
          </p>
          <div className="flex font-inter font-normal text-[16px] text-[#FFFFFF]">
            <p>3</p>
            <p>/3</p>
          </div>
          <Arrow />
        </button>
      </div>
    </div>
  );
};
