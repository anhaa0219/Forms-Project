"use client";
import Image from "next/image";
import { Pineconelogo } from "./icons/Pineconelogo";
import { Arrow } from "./icons/Arrow";
import { Arrowleft } from "./icons/Arrowleft";
import { useState } from "react";
import { Calendar } from "./icons/Calendar";
import { Imagelogo } from "./icons/Imagelogo";
import { Stepone } from "./features/Stepone";
import { Steptwo } from "./features/Steptwo";
import { Stepthree } from "./features/Stepthree";
import { Stepfour } from "./features/Stepfour";

const getPageNumber = () => {
  if (typeof window !== "undefined") {
    if (JSON.parse(localStorage.getItem("page", "step")) === 4) {
      return 1;
    } else {
      return JSON.parse(localStorage.getItem("page", "step"));
    }
  } else {
    return 1;
  }
};
export default function Home() {
  const [step, setStep] = useState(getPageNumber());
  const [date, setDate] = useState("text");
  const firstStep = step === 1;
  const secondStep = step === 2;
  const thirdStep = step === 3;
  const fourthStep = step === 4;

  function stepAdd() {
    setStep(step + 1);
    JSON.stringify(localStorage.setItem("page", step + 1));
  }
  function stepBack() {
    setStep(step - 1);
    JSON.stringify(localStorage.setItem("page", step - 1));
  }
  return (
    <div className="w-screen h-screen flex flex-col border-box items-center justify-center bg-[#F4F4F4]">
      {firstStep && <Stepone handleNextButtonHandler={stepAdd} />}
      {secondStep && (
        <Steptwo handleButtonContinue={stepAdd} stepBack={stepBack} />
      )}
      {thirdStep && (
        <Stepthree handleButtonSection3={stepAdd} stepBack={stepBack} />
      )}
      {fourthStep && <Stepfour />}
    </div>
  );
}
