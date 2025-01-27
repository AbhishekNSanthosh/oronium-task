"use client";
import Image from "next/image";
import React from "react";
import { MdArrowDownward } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

export default function LandingPageContent() {
  return (
    <div className="px-[30px] w-full py-2">
      <div className="relative">
        {/* Background Image */}
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/informatyka-4b6e6.appspot.com/o/premium_photo-1681883760386-62d77639384e.jpg?alt=media&token=08e8fb79-f091-45f4-8728-457cdb7eb602"
          alt=""
          className=" rounded-[30px] object-cover h-full"
          width={2000}
          height={2000}
        />

        {/* Category Tag */}
        <div className="absolute top-[50px] left-[20px] border-white border rounded-full px-2 py-[2px] flex flex-row">
          <span className="text-white font-semibold text-sm">Lorem Ipsum</span>
        </div>

        {/* Main Text & Button */}
        <div className="absolute top-[50px] left-[200px] flex flex-col text-white">
          <span className="text-[80px] font-medium mb-6 leading-tight">
            Explore the <br /> world with us
          </span>

          {/* Fixed Button */}

          {/* Button Container */}
          <button className="flex items-center bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.2)] rounded-full overflow-hidden">
            {/* Text */}
            <span className="px-4 py-2 font-medium text-gray-700">
              Learn more
            </span>
            {/* Circle */}
            <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="absolute bottom-[50px] left-[60px] text-white">
          <div className="relative">
            <button className="w-[150px] h-[150px] rounded-full backdrop-blur-md border border-white flex items-center justify-center">
              <MdArrowDownward className="text-[40px]" />
            </button>
            <div className="w-[150px] h-[150px] rounded-full backdrop-blur-md border border-white absolute top-[-120px] flex items-center justify-center">
              <span className="text-[18px]">Contact</span>
            </div>
          </div>
        </div>
        <div className="absolute right-[100px] bottom-[-120px]">
          <div className="relative flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="400"
              viewBox="0 0 183 212"
              fill="none"
            >
              <path
                d="M0 88.35C0 83.8988 1.41441 79.5626 4.03907 75.9675L56.5042 4.10355C58.3869 1.52473 61.3878 0 64.5808 0H173C178.523 0 183 4.47715 183 10V202C183 207.523 178.523 212 173 212H10C4.47716 212 0 207.523 0 202V88.35Z"
                fill="#ffff"
              />
            </svg>
            {/* Button */}
            <button className="absolute top-[7%] right-[15%] border-2 border-gray-500 p-3 rounded-full bg-white shadow-md">
              <IoArrowForward className="text-[19px]" />
            </button>
            {/* Text */}
            <div className="absolute w-[80%] bottom-[15px] text-center px-4 text-gray-700 font-semibold flex flex-col space-y-7">
              <div className="w-full flex items-center justify-start">
              <span className="text-left text-gray-800 text-[23px] font-semibold">Explore our curated list of must-visit destinations around the globe.</span>
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="w-full flex flex-row items-center justify-between">
                <span className="uppercase">(First)</span>
                <span className="uppercase">(Present)</span>
                <span className="uppercase">01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
