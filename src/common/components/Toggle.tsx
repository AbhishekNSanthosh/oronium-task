"use client";

import React, { useState } from "react";

const Toggle = () => {
  const [lang, setLang] = useState("EN"); // Default language is English

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "EN" ? "IN" : "EN")); // Toggle between "EN" and "IN"
  };

  return (
    <div className="flex items-start justify-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={lang === "IN"}
          onChange={toggleLang}
        />
        <div className="w-24 h-10 bg-gray-200 rounded-full relative">
          {/* Sliding Toggle */}
          <div
            className={`absolute top-[1.8px] ${
              lang === "IN" ? "translate-x-[calc(100%-2px)]" : "translate-x-0"
            } left-0.5 w-12 h-9 rounded-full shadow bg-white transform transition-transform duration-300 flex items-center justify-center`}
          ></div>
          {/* EN and IN labels */}
          <span
            className={`absolute left-[15px] top-[9.5px] ${
              lang === "EN" ? "text-gray-900" : ""
            } font-medium`}
          >
            EN
          </span>
          <span
            className={`absolute right-4 top-2.5 ${
              lang === "IN" ? "text-gray-900" : ""
            } font-medium`}
          >
            IN
          </span>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
