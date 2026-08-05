"use client";
import Image from "next/image";
import { Pineconelogo } from "../icons/Pineconelogo";
import { Arrow } from "../icons/Arrow";
import { Arrowleft } from "../icons/Arrowleft";
import { useState } from "react";
import { Calendar } from "../icons/Calendar";
import { Imagelogo } from "../icons/Imagelogo";

export const Stepfour = (props) => {
  return (
    <div className="w-120 h-48.25 flex flex-col rounded-lg bg-[#FFFFFF] py-8 px-8  gap-13.5">
      <div className="w-104 h-32.25 flex flex-col gap-2 items-start">
        <Pineconelogo />
        <p className="h-7.75 font-inter not-italic text-[26px] font-semibold text-[#202124]">
          You Are All Set🔥
        </p>
        <p className=" h-5.5 font-inter not-italic font-normal text-[18px] text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
