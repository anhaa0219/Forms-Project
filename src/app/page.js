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
export default function Home() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("text");
  const firstStep = step === 1;
  const secondStep = step === 2;
  const thirdStep = step === 3;
  const fourthStep = step === 4;

  function stepAdd() {
    setStep(step + 1);
  }

  function stepBack() {
    setStep(step - 1);
  }

  return (
    <div className="w-screen h-screen flex flex-col border-box items-center justify-center bg-[#F4F4F4]">
      {firstStep && <Stepone handleNextButtonHandler={stepAdd} />}
      {secondStep && (
        <Steptwo handleButtonContinue={stepAdd} stepBack={stepBack} />
      )}
      {thirdStep && <Stepthree stepAdd={stepAdd} stepBack={stepBack} />}
      {fourthStep && <Stepfour />}
    </div>
  );
}
