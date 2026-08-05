"use client";
import Image from "next/image";
import { Pineconelogo } from "../icons/Pineconelogo";
import { Arrow } from "../icons/Arrow";
import { Arrowleft } from "../icons/Arrowleft";
import { useState } from "react";
import { Calendar } from "../icons/Calendar";
import { Imagelogo } from "../icons/Imagelogo";

export const Stepthree = (props) => {
  return (
    <div
      className="w-120 h-163.75 flex flex-col rounded-lg bg-white px-8 py-8
        justify-between"
    >
      <div className=" w-104 h-111.25 flex flex-col gap-7">
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
              Date of birth{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <input
              type="date"
              placeholder="--/--/--"
              className="w-104 h-11 rounded-lg border border-solid border-[#CBD5E1] py-3 pl-3 pr-6 text-slate-700 outline-none"
            />
          </div>

          <div className="w-104 h-52 flex flex-col">
            <p className="font-inter font-semibold text-[#334155] text-[14px]">
              Profile Image{" "}
              <span className="font-inter font-semibold text-red-700 text-[14px]">
                *
              </span>
            </p>
            <div className="w-104 h-45 flex gap-2 *:flex flex-col rounded-md px-4 py-4 bg-[#7F7F800D] justify-center items-center">
              <div className="gap-2 w-[384px] h-14 flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-[9999px] py-2 px-2 gap-2.5 bg-[#FFFFFF] flex justify-center items-center">
                  <Imagelogo />
                </div>
                <p className="font-inter font-medium text-[14px] text-[#09090B]">
                  Add image
                </p>
              </div>
            </div>
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
          onClick={props.stepAdd}
          className=" w-70 h-11 flex gap-1 rounded-md py-2.5 px-3 bg-[#121316] justify-center"
        >
          <p className="w-17.25 h-6 font-inter font-medium text-[16px] text-[#FFFFFF]">
            Continue
          </p>
          <div className="w-6 h-6 flex">
            <p className="font-inter font-normal text-[16px] text-[#FFFFFF]">
              3
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
