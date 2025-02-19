"use client";
import React, { useState, useEffect } from "react";
import { Albra, BeautyRovesa, League, Velista, Victoshe } from "../fonts";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-03T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor(((difference / 1000) * 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, className }) => (
    <div className={`text-center w-full ${className}`}>
      <div className="relative group w-full">
        <div className="">
          <span className="text-3xl font-bold text-[#fff]">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-base font-semibold text-[#fff]">{label}</span>
    </div>
  );

  return (
    <div className="absolute bottom-0 left-0 lg:left-[50%] lg:translate-x-[-50%] text-center w-full p-4 lg:max-w-[600px] m-auto">
      <div
        className={`text-3xl text-center tracking-wide text-[#fff] bg-black/15 font-extrabold ${Victoshe.className} mb-6`}
      >
        <p className="tracking-[0.03em] mb-2">Counting down to the day</p>
        <p className="tracking-[0.03em]">We become a loving family</p>
      </div>

      <div className="flex flex-row  bg-[#850f24] p-4 rounded-2xl w-full">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
