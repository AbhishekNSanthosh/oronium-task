"use client";
import Toggle from "@components/Toggle";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";
import { useAsync } from "../../common/Hooks/useAsync";
import { fetchLondonTime } from "./services/api";

export default function Header() {
  const formatTime = (isoTime: string): string => {
    const date = new Date(isoTime);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds} London`;
  };

  const { data, error, loading } = useAsync(fetchLondonTime);

  return (
    <div className="px-[30px] py-[3vh] text-gray-900">
      <div className=" h-[10vh] bg-white rounded-full px-[25px] flex items-center flex-row">
        <div className="flex-[0.5]">
          <span className="font-black text-[25px]">trvvrat</span>
        </div>
        <div className="flex-[2] flex items-center justify-start flex-row">
          {loading ? (
            <div
              aria-label="Loading content"
              className="animate-pulse w-[10rem] h-8 bg-gray-300 rounded-md"
            ></div>
          ) : (
            <div className="flex flex-row items-center space-x-3 font-semibold">
              <span>{formatTime(data)}</span>
            </div>
          )}
        </div>
        <div className="flex-[1] flex flex-row items-center gap-[60px] justify-end">
          <Toggle />
          <div className="flex flex-row items-center gap-[30px] cursor-pointer">
            <div className="relative">
              <div className="absolute bg-[#F9CF26] rounded-full text-[10px] font-semibold w-[20px] items-center justify-center h-[20px] bottom-[16px] right-[-9px] flex">
                21
              </div>
              <BsBookmarkDash className="text-[20px] cursor-pointer" />
            </div>
            <div className="relative">
              <div className="absolute bg-[#F9CF26] rounded-full text-[10px] font-semibold w-[20px] items-center justify-center h-[20px] bottom-[17px] right-[-10px] flex">
                <span className="mt-1">1</span>
              </div>
              <IoCartOutline className="text-[25px] cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-5 border-2 border-gray-500 pl-4 pr-1 rounded-full py-1">
            <HiOutlineMenu className="text-[20px] cursor-pointer" />
            <div className="bg-gray-300 rounded-full">
              <Image
                src={"/messi.png"}
                height={300}
                width={300}
                alt=""
                className="w-[34px] h-[34px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
