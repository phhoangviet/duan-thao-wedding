"use client";
import { Albra, League } from "../fonts";

export const TitleCustom = ({ title, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="">
        <h2 className={`text-6xl tracking-[0.1em] ${Albra.className}`}>
          {title}
        </h2>
      </div>
      <div
        className={`absolute -mt-6 -right-2 tracking-[0.2em] text-6xl font-bold text-gray-200 opacity-40 lowercase ${League.className}`}
      >
        {title}
      </div>
    </div>
  );
};
