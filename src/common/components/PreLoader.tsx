import Image from "next/image";
import React from "react";

export default function PreLoader() {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex items-center justify-center">
      <div className="">
        <div className="flex items-center justify-center flex-col gap-1 px-5vw">
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl font-semibold">trvvrat</span>
            <span className="text-xs font-normal">
              Explore the world with us
            </span>
          </div>
          <span className="loader"></span>
        </div>
      </div>
    </div>
  );
}
