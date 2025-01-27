"use client";
import Toggle from "@components/Toggle";
import React, { useState } from "react";
import { BsBookmarkDash } from "react-icons/bs";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";
import { useAsync } from "../../common/Hooks/useAsync";
import { fetchLondonTime } from "./services/api";
import Link from "next/link";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to format ISO time into "HH:MM:SS London" format
  const formatTime = (isoTime: string): string => {
    const date = new Date(isoTime); // Convert the ISO string to a Date object

    // Get hours, minutes, and seconds, and add a "0" if they're single digits
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // Return the formatted time
    return `${hours}:${minutes}:${seconds} London`;
  };

  // Hook to manage async data
  const { data, error, loading } = useAsync(fetchLondonTime);

  return (
    <div className="lg:px-[30px] px-[20px] py-[3vh] text-gray-900">
      <div className=" h-[10vh] bg-white rounded-full px-[25px] flex items-center flex-row">
        <div className="flex-[0.5]">
          <Link href={"/"} className="font-black text-[25px]">
            trvvrat
          </Link>
        </div>
        <div className="flex-[2] hidden lg:flex items-center justify-start flex-row">
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
        <div className="flex-1 lg:hidden flex items-center justify-end">
          <HiOutlineMenu
            className="text-[22px] cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
        <div className="flex-[1] hidden lg:flex flex-row items-center gap-[60px] justify-end">
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
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
            isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-[80%] sm:w-[60%] bg-white shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-gray-700">Menu</span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <div className="flex-[2] lg:hidden flex items-center justify-start flex-row">
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
            <div className="w-full h-[0.5px] bg-gray-400"></div>
            <div className="flex flex-col items-start gap-[20px] justify-end w-full">
              <Toggle />
              <div className="w-full h-[0.5px] bg-gray-400"></div>
              <div className="flex flex-col items-start gap-[30px] cursor-pointer w-full">
                <div className="relative flex flex-row items-center gap-[10px]">
                  Saved
                  <div className="absolute bg-[#F9CF26] rounded-full text-[10px] font-semibold w-[20px] items-center justify-center h-[20px] bottom-[16px] right-[-9px] flex">
                    21
                  </div>
                  <BsBookmarkDash className="text-[20px] cursor-pointer" />
                </div>
                <div className="w-full h-[0.5px] bg-gray-400"></div>
                <div className="relative flex flex-row items-center gap-[10px]">
                  Cart
                  <div className="absolute bg-[#F9CF26] rounded-full text-[10px] font-semibold w-[20px] items-center justify-center h-[20px] bottom-[17px] right-[-10px] flex">
                    <span className="mt-1">1</span>
                  </div>
                  <IoCartOutline className="text-[25px] cursor-pointer" />
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-gray-400"></div>
              <button className="flex flex-row w-full items-center justify-between gap-5 border-2 border-gray-500 pl-4 pr-1 rounded-full py-1">
                <span className="">View Profile</span>
                <div className="bg-gray-300 rounded-full">
                  <Image
                    src={"/messi.png"}
                    height={300}
                    width={300}
                    alt=""
                    className="w-[34px] h-[34px] rounded-full"
                  />
                </div>
              </button>
            </div>
          </nav>
          <div className="py-2 flex flex-col lg:flex-row w-full items-center justify-center absolute bottom-3 self-center">
            <div className="flex-1 flex items-center lg:justify-end text-sm font-semibold text-gray-700">
              All rights reserved
            </div>
            <div className="flex-1 flex items-center justify-between font-semibold text-sm text-gray-700">
              <span className="">
                Crafted by{" "}
                <Link
                  className="text-[#F9CF26]"
                  target="_blank"
                  href={"https://www.linkedin.com/in/abhishek-santhosh/"}
                >
                  Abhishek Santhosh
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
