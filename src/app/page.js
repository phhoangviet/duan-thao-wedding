"use client";
import Image from "next/image";
import {
  Albra,
  ArroemFont,
  BeautyRovesa,
  League,
  Maniefa,
  Moaro,
  Velista,
  Victoshe,
} from "./fonts";
import React, { useState } from "react";
import ImageSlider from "./components/ImageGalery";
import { TitleCustom } from "./components/TitleCustom";
import { Cloud, MessageCircle, PhoneCall } from "lucide-react";

export default function Home() {
  const images = [
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
  ];
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    dietary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="bg-[#eae5d6]">
      <div id="first_section" className="min-h-screen flex flex-col">
        <div id="information" className="relative font-light p-8 flex">
          <div
            className="flex items-baseline relative flex-col "
            id="date-container"
          >
            <div className={`flex items-baseline ${Victoshe.className}`}>
              <span className="text-7xl font-extralight mr-2">0</span>
              <span className="text-7xl font-extralight">3</span>
            </div>
            <div className={`flex items-baseline m-auto ${Victoshe.className}`}>
              <span className="text-7xl font-extralight mr-2">1</span>
              <span className="text-7xl font-extralight">2</span>
            </div>
            <div className={`flex items-baseline ${Victoshe.className}`}>
              <span className="text-7xl font-extralight mr-2">2</span>
              <span className="text-7xl font-extralight">5</span>
            </div>
          </div>
          <div className="relative top-8 left-8 w-[2px] h-[220px] bg-black opacity-50"></div>
          <div className="relative flex flex-row bottom-0 h-[220px] w-[200px">
            <div
              className={`absolute left-12 w-[220px] bottom-[-2rem] text-xl tracking-wide uppercase ${Albra.className}`}
            >
              Save the date
            </div>
          </div>
        </div>
        <div
          id="name_wedding"
          className="flex-1 flex items-center justify-center"
        >
          <div
            className={`flex flex-col items-center tracking-[0.5em] -mt-12 ${Albra.className}`}
          >
            <h1 className="text-6xl font-normal mb-6">DMITRY</h1>
            <span className="text-5xl font-normal italic mb-6">&</span>
            <h1 className="text-6xl font-normal">MARIA</h1>
          </div>
        </div>
      </div>

      <div
        id="seccond_section"
        className="min-h-screen bg-[#850f24] rounded-3xl p-12 text-white flex items-center flex-col justify-center "
      >
        <div id="title_first" className="text-center mb-12">
          <p className="text-xl ">Lorem ipsum dolor</p>
          <p className="text-md ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>

        {/* Date Section */}
        <div className="text-center mb-12">
          <h1
            className={`text-6xl font-light tracking-[0.1em] ${ArroemFont.className}`}
          >
            05.12.2025
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-md ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p className="text-md">sit amet consectetur</p>
        </div>
      </div>
      <div
        id="third_section"
        className="min-h-screen  p-1 flex items-center justify-center"
      >
        <ImageSlider />
      </div>
      <div id="four_section" className="relative min-h-screen p-12">
        <TitleCustom title={"LOCATION"} className="text-center" />
        <div className="mt-24 p-4 flex items-center flex-col justify-center ">
          <p className="">Event Details</p>

          <div className="mb-24">
            <p>Address: 9485 Lorem Ipsum St. consectetu</p>
            <p>Sample: .....</p>
            <p>dolor sit amet 12345</p>
          </div>
          <div className="mt-6">
            <div className="mb-56 flex justify-center">
              <div className="relative">
                {/* RF Logo */}
                <div className="text-[12rem] font-serif relative">
                  <span className="absolute -left-1 top-0">R</span>
                  <span
                    className="absolute -right-1 top-0"
                    style={{ transform: "scale(-1, 1)" }}
                  >
                    F
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <p>Lorem ipsum dolor sit amet elit sit amet elitsit amet</p>
            </div>
          </div>
        </div>
      </div>
      <div id="five_section" className="min-h-screen p-12">
        <TitleCustom title={"TIMMING"} className="text-left" />
        <div className={`max-w-md mx-auto px-6 py-16 ${Albra.className}`}>
          {/* Timeline content */}
          <div className="space-y-12">
            <div className="w-[1px] h-32 bg-black/20 mx-auto"></div>
            {/* 17:00 Section */}
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-serif mb-2">17:00</h3>
              <p className="text-sm md:text-base tracking-[0.15em] uppercase text-gray-600">
                Reception
              </p>
            </div>

            {/* 18:00 Section */}
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-serif mb-2">18:00</h3>
              <p className="text-sm md:text-base tracking-[0.15em] uppercase text-gray-600">
                Ceremony
              </p>
            </div>

            {/* 19:00 Section */}
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-serif mb-2">19:00</h3>
              <p className="text-sm md:text-base tracking-[0.15em] uppercase text-gray-600">
                Dinner
              </p>
            </div>

            {/* Vertical line */}
            <div className="w-[1px] h-32 bg-black/20 mx-auto"></div>
          </div>
        </div>
      </div>

      <div id="six_section" className="min-h-screen p-12">
        <div className={`relative z-20`}>
          <div className="relative text-left">
            <h2 className={`text-6xl tracking-[0.15em] ${Velista.className}`}>
              <div className="relative text-center -ml-24">DRESS</div>
              <div className="text-center -mt-5 ml-5">CODE</div>
            </h2>
          </div>
          <div
            className={`z-10 absolute text-center w-full -mt-10 m-auto tracking-[0.1em] text-7xl font-bold text-white opacity-40 lowercase ${League.className}`}
          >
            dress code
          </div>
        </div>

        {/* Description */}
        <div className="text-center space-y-2 mt-12">
          <p className="text-sm tracking-wider text-gray-600">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-sm tracking-wider text-gray-600">
            consectetur adipiscing elit
          </p>
          <p className="text-sm tracking-wider text-gray-600">
            sed do eiusmod tempor
          </p>
        </div>

        {/* Total Black text */}
        <h3
          className={`text-4xl text-center tracking-[0.1sem] mt-12 mb-4 ${Victoshe.className}`}
        >
          TOTAL BLACK
        </h3>

        {/* Color circles */}
        <div className="flex items-center -space-x-4 mb-16 justify-center relative">
          <div className="w-12 h-12 rounded-full bg-gray-600 z-30"></div>
          <div className="w-12 h-12 rounded-full bg-white border border-gray-300 z-20"></div>
          <div className="w-12 h-12 rounded-full bg-black z-10"></div>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden">
          <Image
            src="/images/template.jpg"
            alt="Dress code reference"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>

      <div id="seven_section" className="min-h-screen p-12">
        <form onSubmit={handleSubmit} className="space-y-12">
          <TitleCustom title={"RSVP"} className="text-center mb-24 " />
          <div className="space-y-12">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="YOUR NAME"
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light tracking-wide placeholder-gray-500"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="attendance"
                  value="happily_attend"
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                />
                <label className="text-sm font-light tracking-wide">
                  HAPPILY ATTEND
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="attendance"
                  value="regretfully_decline"
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                />
                <label className="text-sm font-light tracking-wide">
                  REGRETFULLY DECLINE
                </label>
              </div>
            </div>

            <div>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                placeholder="DIETARY RESTRICTIONS"
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light tracking-wide placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full border border-black py-4 px-4 text-sm font-light tracking-wide hover:bg-black hover:text-white transition-colors duration-200 mt-12"
            >
              CONFIRM
            </button>
          </div>
        </form>
      </div>

      <div
        id="eight_section"
        className="min-h-screen p-12 bg-[#850f24] text-white rounded-3xl"
      >
        <TitleCustom title={"DETAIL"} className="text-center mb-24 " />
        <div className="space-y-6">
          <h2 className="text-2xl font-thin tracking-widest text-center mb-8">
            CONTACTS
          </h2>
          <div className="space-y-4 text-center font-light tracking-wide">
            <p>PLEASE CONFIRM YOUR ATTENDANCE</p>
            <p>RSVP BEFORE FEBRUARY 28, 2024</p>
            <p>AT THE FOLLOWING NUMBER</p>
            <p>(123) 456-7890</p>
          </div>

          <div className="flex justify-center mt-6">
            <PhoneCall className="w-12 h-12 stroke-1" />
          </div>
        </div>

        {/* Photo Section */}
        <div className="space-y-6 mt-24">
          <h2 className="text-2xl font-thin tracking-widest text-center mb-8">
            PHOTO
          </h2>
          <div className="space-y-4 text-center font-light tracking-wide">
            <p>CAPTURE YOUR FAVORITE MOMENTS</p>
            <p>SHARE THEM WITH US AND</p>
            <p>OUR LOVED ONES</p>
            <p>THROUGH THE CLOUD</p>
          </div>

          <div className="flex justify-center mt-6">
            <Cloud className="w-12 h-12 stroke-1" />
          </div>
        </div>
      </div>

      {/* <div id="nine_section"></div> */}
    </div>
  );
}
