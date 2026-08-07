"use client";

import Image from "next/image";
import { Pineconelogo } from "../icons/Pineconelogo";
import { Arrow } from "../icons/Arrow";
import { Arrowleft } from "../icons/Arrowleft";
import { useState } from "react";
import { Calendar } from "../icons/Calendar";
import { Imagelogo } from "../icons/Imagelogo";
import { jsx } from "react/jsx-runtime";

const ALREADY_TAKEN_USERNAME = ["bat", "bold", "test", "pinecone"];

const getFirstName = () => {
  if (typeof window === "undefined") return "";
  try {
    const first = localStorage.getItem("FirstName");
    if (!first) return "";
    try {
      return JSON.parse(first);
    } catch {
      return first;
    }
  } catch (error) {
    console.error("Error reading FirstName from localStorage:", error);
    return "";
  }
};

const getLastName = () => {
  if (typeof window === "undefined") return "";
  try {
    const last = localStorage.getItem("LastName");
    if (!last) return "";
    try {
      return JSON.parse(last);
    } catch {
      return last;
    }
  } catch (error) {
    console.error("Error reading LastName from localStorage:", error);
    return "";
  }
};

const getUserName = () => {
  if (typeof window === "undefined") return "";
  try {
    const user = localStorage.getItem("UserName");
    if (!user) return "";
    try {
      return JSON.parse(user);
    } catch {
      return user;
    }
  } catch (error) {
    console.error("Error reading UserName from localStorage:", error);
    return "";
  }
};

export const Stepone = (props) => {
  const letters = "qwertyuiopasdfghjklzxcvbnm";
  const [firstName, setFirstName] = useState(getFirstName());
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState(getLastName());
  const [lastNameError, setLastNameError] = useState("");
  const [userName, setUserName] = useState(getUserName());
  const [userNameError, setUserNameError] = useState("");

  const eventTakerFirstName = (e) => {
    const newFirst = e.target.value;
    setFirstName(newFirst);
    localStorage.setItem("FirstName", newFirst);
  };

  const eventTakerLastName = (e) => {
    const newLast = e.target.value;
    setLastName(newLast);
    localStorage.setItem("LastName", newLast);
  };

  const eventTakerUserName = (e) => {
    const newUser = e.target.value;
    setUserName(newUser);
    localStorage.setItem("UserName", newUser);
  };

  const checkEachCharacter = (value) => {
    for (let i = 0; i < value.length; i++) {
      if (!letters.includes(value[i])) {
        return false;
      }
    }
    return true;
  };

  const validateFirstName = (name) => {
    const allToLower = name.trim().toLowerCase();
    if (!allToLower) {
      return "First name is required";
    }
    if (!checkEachCharacter(allToLower)) {
      return "First name cannot contain special characters or numbers.";
    }
    return "";
  };

  const validateLastName = (name) => {
    const allToLower = name.trim().toLowerCase();
    if (!allToLower) {
      return "Last name is required";
    }
    if (!checkEachCharacter(allToLower)) {
      return "Last name cannot contain special characters or numbers.";
    }
    return "";
  };

  const validateUserName = (value) => {
    const allToLower = value.trim().toLowerCase();
    if (!allToLower) {
      return "Username is required";
    }
    if (ALREADY_TAKEN_USERNAME.includes(allToLower)) {
      return "This username is already taken. Please choose another one.";
    }
    return "";
  };

  const handleNextButtonHandler = () => {
    const firstError = validateFirstName(firstName);
    const secondError = validateLastName(lastName);
    const thirdError = validateUserName(userName);

    setFirstNameError(firstError);
    setLastNameError(secondError);
    setUserNameError(thirdError);

    if (firstError === "" && secondError === "" && thirdError === "") {
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
          <div className="w-104 gap-1 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              First name{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              value={firstName}
              onChange={eventTakerFirstName}
              placeholder="First name"
              className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
                firstNameError ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {firstNameError && (
              <p className="text-red-500 text-xs mt-1">{firstNameError}</p>
            )}
          </div>

          <div className="w-104 gap-1 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Last name{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              value={lastName}
              onChange={eventTakerLastName}
              placeholder="Last name"
              className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
                lastNameError ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {lastNameError && (
              <p className="text-red-500 text-xs mt-1">{lastNameError}</p>
            )}
          </div>

          <div className="w-104 gap-1 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Username{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              value={userName}
              onChange={eventTakerUserName}
              placeholder="Username"
              className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
                userNameError ? "border-red-500" : "border-[#CBD5E1]"
              } outline-none`}
            />
            {userNameError && (
              <p className="text-red-500 text-xs mt-1">{userNameError}</p>
            )}
          </div>
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
          <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">1</p>
          <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">
            /3
          </p>
        </div>
        <Arrow />
      </button>
    </div>
  );
};
