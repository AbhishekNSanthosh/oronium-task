import React from "react";

export default function Header() {
  return (
    <div className="px-[30px] py-[3vh] text-gray-900">
      <div className=" h-[10vh] bg-white rounded-full px-[25px] flex items-center flex-row">
        <div className="flex-[0.5]">
          <span className="font-black text-[25px]">trvvrat</span>
        </div>
        <div className="flex-[2] flex items-center justify-start flex-row">
          <div className="flex flex-row items-center space-x-3 font-semibold">
            <span className="">06:01:00</span>
            <span className="">London</span>
          </div>
        </div>
        <div className="flex-[1]"></div>
      </div>
    </div>
  );
}
