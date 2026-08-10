"use client";

import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { Step23Button } from "../components/Step23Button";
import { Pineconelogo } from "../icons/Pineconelogo";
const getInitialValues = () => {
  if (typeof window === "undefined") {
    return { email: "", phone: "", password: "", passwordconfirm: "" };
  }
  const values = localStorage.getItem("stepTwoValues");
  if (values) {
    try {
      return JSON.parse(values);
    } catch (error) {
      console.error("Error reading stepTwoValues from localStorage:", error);
    }
  }
  return {
    email: "",
    phone: "",
    password: "",
    passwordconfirm: "",
  };
};

const initialErrorValues = {
  errorEmail: "",
  errorPhone: "",
  errorPassword: "",
  errorPasswordconfirm: "",
};

export const Steptwo = (props) => {
  const letters = "qwertyuiopasdfghjklzxcvbnm";
  const numbers = "1234567890";
  const [stepTwoValues, setStepTwoValues] = useState(getInitialValues);
  const [stepTwoErrors, setStepTwoErrors] = useState(initialErrorValues);

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const updatedValues = { ...stepTwoValues, [key]: value };

    setStepTwoValues(updatedValues);
    localStorage.setItem("stepTwoValues", JSON.stringify(updatedValues));
  };

  const validateEmail = (value = "") => {
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

  const validatePhone = (value = "") => {
    const trimmer = value.trim();
    if (trimmer.length !== 8 || !checkPhone(trimmer)) {
      return "Please enter a valid phone number (8 digits).";
    }
    return "";
  };

  const validatePassword = (value = "") => {
    const trimmer = value.trim();
    if (trimmer.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!checkPassword(trimmer)) {
      return "Password must include letters and numbers.";
    }
    return "";
  };

  const validatePasswordConfirm = (confirm = "", password = "") => {
    if (!confirm.trim()) {
      return "Please confirm your password.";
    }
    if (confirm !== password) {
      return "Passwords do not match. Please try again.";
    }
    return "";
  };

  const handleButtonContinue = () => {
    const errors = {
      errorEmail: validateEmail(stepTwoValues.email),
      errorPhone: validatePhone(stepTwoValues.phone),
      errorPassword: validatePassword(stepTwoValues.password),
      errorPasswordconfirm: validatePasswordConfirm(
        stepTwoValues.passwordconfirm,
        stepTwoValues.password,
      ),
    };

    setStepTwoErrors(errors);

    const hasNoErrors = Object.values(errors).every((error) => error === "");

    if (hasNoErrors) {
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
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={stepTwoValues.email}
            onChange={handleInputChange}
            error={stepTwoErrors.errorEmail}
          />
          <FormInput
            label="Phone number"
            type="text"
            name="phone"
            value={stepTwoValues.phone}
            onChange={handleInputChange}
            error={stepTwoErrors.errorPhone}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={stepTwoValues.password}
            onChange={handleInputChange}
            error={stepTwoErrors.errorPassword}
          />
          <FormInput
            label="Confirm password"
            type="password"
            name="passwordconfirm"
            value={stepTwoValues.passwordconfirm}
            onChange={handleInputChange}
            error={stepTwoErrors.errorPasswordconfirm}
          />
        </div>
      </div>
      <Step23Button
        type="button"
        onClick={props.stepBack}
        onClock={handleButtonContinue}
        id={props.id}
      />
    </div>
  );
};
