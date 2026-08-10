"use client";
import { useState } from "react";
import { Stepfour } from "./features/Stepfour";
import { Stepone } from "./features/Stepone";
import { Stepthree } from "./features/Stepthree";
import { Steptwo } from "./features/Steptwo";

const getPageNumber = () => {
  if (typeof window === "undefined") {
    return 1;
  }
  try {
    const rawPage = localStorage.getItem("page");
    const page = rawPage ? JSON.parse(rawPage) : 1;

    return page === 4 ? 1 : page;
  } catch (error) {
    console.error("Error reading page from localStorage:", error);
    return 1;
  }
};

export default function Home() {
  const [step, setStep] = useState(getPageNumber());
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
      {firstStep && <Stepone handleNextButtonHandler={stepAdd} id={step} />}
      {secondStep && (
        <Steptwo handleButtonContinue={stepAdd} stepBack={stepBack} id={step} />
      )}
      {thirdStep && (
        <Stepthree
          handleButtonSection3={stepAdd}
          stepBack={stepBack}
          id={step}
        />
      )}
      {fourthStep && <Stepfour />}
    </div>
  );
}
