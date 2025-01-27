import Image from "next/image";
import React from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdSend } from "react-icons/io";

export default function Footer() {
  return (
    <div className="px-[30px] h-[530px] w-full flex-row flex pt-[100px] relative">
      {/* Left Content */}
      <div className="flex-1 h-full">
        <span>We offer adult clinics that focus on skill improvement</span>
        <div className="absolute bottom-[50px] left-[30px] bg-[#F0F0F0] w-[350px] flex flex-row items-center rounded-full pl-2 pr-1 py-1">
            <input type="text" className="w-full bg-[#F0F0F0] px-2 py-1 outline-none border-none" placeholder="youremail@gmail.com"/>
            <div className="bg-[#200F33] p-2 rounded-full flex items-center justify-center">
                <IoMdSend className="text-[30px] text-white"/>
            </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-row space-x-[100px] relative">
        <div className="flex flex-col gap-2">
          <span className="text-gray-700 font-medium">Home</span>
          <span className="text-gray-700 font-medium">Service</span>
          <span className="text-gray-700 font-medium">About</span>
          <span className="text-gray-700 font-medium">Product</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-700 font-medium">Home</span>
          <span className="text-gray-700 font-medium">Service</span>
          <span className="text-gray-700 font-medium">About</span>
          <span className="text-gray-700 font-medium">Product</span>
        </div>

        {/* Scroll to Top Button */}
        <button className="absolute right-[40px] top-[0px] rounded-full border-2 border-gray-400 p-3">
          <IoMdArrowRoundUp className="text-3xl" />
        </button>
      </div>


      {/* Bottom-Right Text */}
    <Image src={'/trvvr.svg'} alt="" width={1000} height={1000} className="w-[60rem] absolute bottom-0 right-0"/>
    </div>
  );
}
