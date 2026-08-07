"use client";

import { Pineconelogo } from "../icons/Pineconelogo";
import { Arrow } from "../icons/Arrow";
import { Arrowleft } from "../icons/Arrowleft";
import { useState } from "react";

const getEmail = () => {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem("Email") || "";
  } catch (error) {
    console.error("Error reading Email from localStorage:", error);
    return "";
  }
};

const getPhone = () => {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem("Phone") || "";
  } catch (error) {
    console.error("Error reading Phone from localStorage:", error);
    return "";
  }
};

const getPassword = () => {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem("Password") || "";
  } catch (error) {
    console.error("Error reading Password from localStorage:", error);
    return "";
  }
};

const getPasswordconfirm = () => {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem("Passwordconfirm") || "";
  } catch (error) {
    console.error("Error reading Passwordconfirm from localStorage:", error);
    return "";
  }
};

export const Steptwo = (props) => {
  const letters = "qwertyuiopasdfghjklzxcvbnm";
  const numbers = "1234567890";

  const [email, setEmail] = useState(getEmail());
  const [phone, setPhone] = useState(getPhone());
  const [password, setPassword] = useState(getPassword());
  const [passwordconfirm, setPasswordconfirm] = useState(getPasswordconfirm());

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordconfirm, setErrorPasswordconfirm] = useState("");

  const eventTakerEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem("Email", newEmail);
    if (errorEmail) setErrorEmail("");
  };

  const eventTakerPhone = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    localStorage.setItem("Phone", newPhone);
    if (errorPhone) setErrorPhone("");
  };

  const eventTakerPassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    localStorage.setItem("Password", newPassword);
    if (errorPassword) setErrorPassword("");
  };

  const eventTakerPasswordconfirm = (e) => {
    const newPasswordconfirm = e.target.value;
    setPasswordconfirm(newPasswordconfirm);
    localStorage.setItem("Passwordconfirm", newPasswordconfirm);
    if (errorPasswordconfirm) setErrorPasswordconfirm("");
  };

  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (trimmed === "" || !trimmed.includes("@")) {
      return "Please provide a valid email address.";
    }
    return "";
  };

  const checkPhone = (value) => {
    for (let i = 0; i < value.length; i++) {
      if (!numbers.includes(value[i])) return false;
    }
    return true;
  };

  const checkPassword = (value) => {
    let hasLetter = false;
    let hasNumber = false;
    for (let i = 0; i < value.length; i++) {
      const allToLower = value[i].toLowerCase();
      if (letters.includes(allToLower)) hasLetter = true;
      if (numbers.includes(allToLower)) hasNumber = true;
    }
    return hasLetter && hasNumber;
  };

  const validatePhone = (value) => {
    const trimmer = value.trim();
    if (trimmer.length !== 8 || !checkPhone(trimmer)) {
      return "Please enter a valid phone number (8 digits).";
    }
    return "";
  };

  const validatePassword = (value) => {
    const trimmer = value.trim();
    if (trimmer.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!checkPassword(trimmer)) {
      return "Password must include letters and numbers.";
    }
    return "";
  };

  const validatePasswordConfirm = (confirm, password) => {
    if (!confirm.trim()) {
      return "Please confirm your password.";
    }
    if (confirm !== password) {
      return "Passwords do not match. Please try again.";
    }
    return "";
  };

  const handleButtonContinue = () => {
    const firstError = validateEmail(email);
    const secondError = validatePhone(phone);
    const thirdError = validatePassword(password);
    const fourthError = validatePasswordConfirm(passwordconfirm, password);

    setErrorEmail(firstError);
    setErrorPhone(secondError);
    setErrorPassword(thirdError);
    setErrorPasswordconfirm(fourthError);

    if (
      firstError === "" &&
      secondError === "" &&
      thirdError === "" &&
      fourthError === ""
    ) {
      props.handleButtonContinue?.();
    }
  };

  return (
    <div className="w-120 min-h-163.75 flex flex-col rounded-lg bg-white px-8 py-8 justify-between gap-13.5">
      <div className="w-104 flex flex-col gap-7">
        <div className="w-104 flex flex-col gap-2">
          <Pineconelogo />
          <p className="h-7.75 font-inter not-italic text-[26px] font-semibold text-[#202124]">
            Join Us! 😎
          </p>
          <p className="h-5.5 font-inter not-italic font-normal text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="w-104 flex flex-col gap-3">
          <div className="w-104 flex flex-col gap-1">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Email <span className="text-red-700">*</span>
            </p>
            <input
              type="email"
              value={email}
              onChange={eventTakerEmail}
              suppressHydrationWarning={true}
              placeholder="Email"
              className={`w-104 h-11 shrink-0 rounded-lg flex py-1 px-3 border-solid border font-inter font-normal text-[16px] ${
                errorEmail ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {errorEmail && (
              <p className="text-red-500 text-xs mt-1">{errorEmail}</p>
            )}
          </div>

          <div className="w-104 flex flex-col gap-1">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Phone number <span className="text-red-700">*</span>
            </p>
            <input
              type="text"
              value={phone}
              onChange={eventTakerPhone}
              suppressHydrationWarning={true}
              placeholder="Phone number"
              className={`w-104 h-11 shrink-0 rounded-lg flex py-1 px-3 border-solid border font-inter font-normal text-[16px] ${
                errorPhone ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {errorPhone && (
              <p className="text-red-500 text-xs mt-1">{errorPhone}</p>
            )}
          </div>

          <div className="w-104 flex flex-col gap-1">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Password <span className="text-red-700">*</span>
            </p>
            <input
              type="password"
              value={password}
              onChange={eventTakerPassword}
              suppressHydrationWarning={true}
              placeholder="Password"
              className={`w-104 h-11 shrink-0 rounded-lg flex py-1 px-3 border-solid border font-inter font-normal text-[16px] ${
                errorPassword ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {errorPassword && (
              <p className="text-red-500 text-xs mt-1">{errorPassword}</p>
            )}
          </div>

          <div className="w-104 flex flex-col gap-1">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Confirm password <span className="text-red-700">*</span>
            </p>
            <input
              type="password"
              value={passwordconfirm}
              onChange={eventTakerPasswordconfirm}
              suppressHydrationWarning={true}
              placeholder="Confirm password"
              className={`w-104 h-11 shrink-0 rounded-lg flex py-1 px-3 border-solid border font-inter font-normal text-[16px] ${
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
          type="button"
          onClick={props.stepBack}
          className="flex-1 h-11 py-2.5 px-3 gap-1 bg-[#FFFFFF] border border-solid border-[#CBD5E1] rounded-md flex justify-center items-center cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <Arrowleft />
          <p className="font-inter font-medium text-[16px] text-[#202124]">
            Back
          </p>
        </button>
        <button
          type="button"
          onClick={handleButtonContinue}
          className="flex-2 h-11 flex gap-1.5 items-center rounded-md py-2.5 px-3 bg-[#121316] justify-center cursor-pointer hover:bg-[#27282c] transition-colors"
        >
          <p className="font-inter font-medium text-[16px] text-[#FFFFFF]">
            Continue
          </p>
          <div className="flex font-inter font-normal text-[16px] text-[#FFFFFF]">
            <p>2</p>
            <p>/3</p>
          </div>
          <Arrow />
        </button>
      </div>
    </div>
  );
};
