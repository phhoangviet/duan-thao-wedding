"use client";
import { Albra, BeautyRovesa, League, Velista, Victoshe } from "../fonts";

export const TitleCustom = ({ title, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="">
        <h2
          className={`font-bold text-4xl  lg:text-6xl tracking-[0.1em] ${Victoshe.className}`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};
