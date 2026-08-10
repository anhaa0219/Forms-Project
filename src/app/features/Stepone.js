"use client";

import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { Arrow } from "../icons/Arrow";
import { Pineconelogo } from "../icons/Pineconelogo";

const ALREADY_TAKEN_USERNAME = ["bat", "bold", "test", "pinecone"];

const getInitialValues = () => {
  if (typeof window === "undefined") {
    return { firstName: "", lastName: "", userName: "" };
  }
  const values = localStorage.getItem("stepOneValues");
  if (values) {
    try {
      return JSON.parse(values);
    } catch (error) {
      console.error("Error reading stepOneValues from localStorage:", error);
    }
  }
  return {
    firstName: "",
    lastName: "",
    userName: "",
  };
};

const initialErrorValues = {
  firstNameError: "",
  lastNameError: "",
  userNameError: "",
};

export const Stepone = (props) => {
  const letters = "qwertyuiopasdfghjklzxcvbnm";
  const [stepOneValues, setStepOneValues] = useState(getInitialValues);
  const [stepOneErrors, setStepOneErrors] = useState(initialErrorValues);

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const updatedValues = { ...stepOneValues, [key]: value };

    setStepOneValues(updatedValues);
    localStorage.setItem("stepOneValues", JSON.stringify(updatedValues));
  };

  const checkEachCharacter = (value) => {
    for (let i = 0; i < value.length; i++) {
      if (!letters.includes(value[i])) {
        return false;
      }
    }
    return true;
  };

  const validateName = (label, name = "") => {
    const allToLower = name.trim().toLowerCase();
    if (!allToLower) {
      return `${label} is required`;
    }
    if (!checkEachCharacter(allToLower)) {
      return `${label} cannot contain special characters or numbers.`;
    }
    return "";
  };

  const validateUserName = (label, value = "") => {
    const allToLower = value.trim().toLowerCase();
    if (!allToLower) {
      return `${label} is required`;
    }
    if (ALREADY_TAKEN_USERNAME.includes(allToLower)) {
      return `This ${label} is already taken. Please choose another one.`;
    }
    return "";
  };

  const handleNextButtonHandler = () => {
    const errors = {
      firstNameError: validateName("First Name", stepOneValues.firstName),
      lastNameError: validateName("Last Name", stepOneValues.lastName),
      userNameError: validateUserName("Username", stepOneValues.userName),
    };
    setStepOneErrors(errors);

    const hasNoErrors = Object.values(errors).every((error) => error === "");

    if (hasNoErrors) {
      props.handleNextButtonHandler();
    }
  };

  return (
    <div className="w-120 min-h-163.75 flex flex-col rounded-lg bg-white px-8 py-8 justify-between">
      <div className="w-104 h-96.25 flex flex-col gap-7">
        <div className="w-104 h-32.25 flex flex-col gap-2">
          <Pineconelogo />
          <p className="h-7.75 font-inter not-italic text-[26px] font-semibold text-[#202124] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
            Join Us! 😎
          </p>
          <p className="h-5.5 font-inter not-italic font-normal text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="w-104 flex flex-col gap-3">
          <FormInput
            type="text"
            label="First Name"
            value={stepOneValues.firstName}
            onChange={handleInputChange}
            name="firstName"
            error={stepOneErrors.firstNameError}
          />
          <FormInput
            type="text"
            label="Last Name"
            value={stepOneValues.lastName}
            onChange={handleInputChange}
            name="lastName"
            error={stepOneErrors.lastNameError}
          />
          <FormInput
            type="text"
            label="Username"
            value={stepOneValues.userName}
            onChange={handleInputChange}
            name="userName"
            error={stepOneErrors.userNameError}
          />
        </div>
      </div>

      <button
        onClick={handleNextButtonHandler}
        className="w-104 h-11 flex gap-1 items-center rounded-md py-2.5 px-3 bg-[#121316] justify-center cursor-pointer"
      >
        <p className="font-inter font-medium text-[16px] text-[#FFFFFF]">
          Continue
        </p>
        <div className="flex">
          <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">
            {props.id}
          </p>
          <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">
            /3
          </p>
        </div>
        <Arrow />
      </button>
    </div>
  );
};
