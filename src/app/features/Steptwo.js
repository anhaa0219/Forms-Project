"use client";
import Image from "next/image";
import { Pineconelogo } from "../icons/Pineconelogo";
import { Arrow } from "../icons/Arrow";
import { Arrowleft } from "../icons/Arrowleft";
import { useState } from "react";
import { Calendar } from "../icons/Calendar";
import { Imagelogo } from "../icons/Imagelogo";

export const Steptwo = (props) => {
  const numbers = "1234567890";
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordconfirm, setErrorPasswordconfirm] = useState("");
  const eventTakerEmail = (e) => {
    setEmail(e.target.value);
  };
  const eventTakerPhone = (e) => {
    setPhone(e.target.value);
  };
  const eventTakerPassword = (e) => {
    setPassword(e.target.value);
  };
  const eventTakerPasswordconfirm = (e) => {
    setPasswordconfirm(e.target.value);
  };

  const validateEmail = (value) => {
    if (value.trim() === "") {
      return "Please provide a valid email address.";
    } else {
      if (value.includes("@")) {
        return "";
      } else {
        return "Please provide a valid email address.";
      }
    }
  };
  const checkPhone = (value) => {
    for (let i = 0; i < value.length; i++) {
      if (!numbers.includes(value[i])) {
        return false;
      }
    }
    return true;
  };
  const validatePhone = (value) => {
    const trimmer = value.trim();
    if (!trimmer) {
      return "Please enter a phone number.";
    } else {
      if (checkPhone(trimmer)) {
        return "";
      } else {
        return "Please enter a valid phone number.";
      }
    }
  };
  const handleButtonContinue = () => {
    const firstError = validateEmail(email);
    const secondError = validatePhone(phone);
    setErrorEmail(firstError);
    setErrorPhone(secondError);
    if (firstError === "" && secondError === "") {
      props.handleButtonContinue();
    }
  };
  return (
    <div
      className="w-120 h-163.75 flex flex-col rounded-lg bg-white px-8 py-8
            justify-between"
    >
      <div className=" w-104 h-116.25 flex flex-col gap-7">
        <div className="w-104 h-32.25 flex flex-col gap-2">
          <Pineconelogo />
          <p className="h-7.75 font-inter not-italic text-[26px] font-semibold text-[#202124] text-shadow-[0px_4px_4px_#00000040]">
            Join Us! 😎
          </p>
          <p className=" h-5.5 font-inter not-italic font-normal text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="w-104 h-57 flex flex-col gap-3 ">
          <div className="w-104 h-17 gap-2 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Email{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              value={email}
              onChange={eventTakerEmail}
              placeholder="Placeholder"
              className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
                errorEmail ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {errorEmail && (
              <p className="text-red-500 text-xs mt-1">{errorEmail}</p>
            )}
          </div>
          <div className="w-104 h-17 gap-2 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Phone number{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              value={phone}
              onChange={eventTakerPhone}
              placeholder="Placeholder"
              className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
                errorPhone ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {errorPhone && (
              <p className="text-red-500 text-xs mt-1">{errorPhone}</p>
            )}
          </div>
          <div className="w-104 h-17 gap-2 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Password{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              value={password}
              onChange={eventTakerPassword}
              placeholder="Placeholder"
              className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
                errorPassword ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {errorPassword && (
              <p className="text-red-500 text-xs mt-1">{errorPassword}</p>
            )}
          </div>
          <div className="w-104 h-17 gap-2 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Confirm password{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              value={passwordconfirm}
              onChange={eventTakerPasswordconfirm}
              placeholder="Placeholder"
              className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
                errorPasswordconfirm ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {errorPasswordconfirm && (
              <p className="text-red-500 text-xs mt-1">
                {errorPasswordconfirm}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-104 h-11 flex gap-2">
        <button
          onClick={props.stepBack}
          className="w-32 h-11 py-2.5 px-3 gap-1 bg-[#FFFFFF] border border-solid border-[#CBD5E1] rounded-md flex justify-center items-center"
        >
          <Arrowleft />
          <p className=" font-inter font-medium text-[16px] text-[#202124]">
            Back
          </p>
        </button>
        <button
          onClick={handleButtonContinue}
          className=" w-70 h-11 flex gap-1 rounded-md py-2.5 px-3 bg-[#121316] justify-center"
        >
          <p className="w-17.25 h-6 font-inter font-medium text-[16px] text-[#FFFFFF]">
            Continue
          </p>
          <div className="w-6 h-6 flex">
            <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">
              2
            </p>
            <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">
              /3
            </p>
          </div>
          <Arrow />
        </button>
      </div>
    </div>
  );
};
