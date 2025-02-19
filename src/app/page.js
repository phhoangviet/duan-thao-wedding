"use client";
import { toast, Toaster } from "react-hot-toast";

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
import CountdownTimer from "./components/CountdownTimer";
import { comment } from "postcss";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    dietary: "",
    numberJoined: "",
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (formData?.name == "") {
      toast.error(`Vui lòng nhập tên của anh/chị ạ`, {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    if (formData?.attendance == "") {
      toast.error(`Vui lòng chọn anh/chị có thể tham dự không ạ`, {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    if (formData?.numberJoined == "") {
      toast.error(`Anh/chị sẽ đi mấy người ạ`, {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    try {
      const res = await fetch("https://sheetdb.io/api/v1/1g0vtyoobl0h9", {
        method: "POST",
        body: JSON.stringify({
          name: formData?.name,
          numJoined: formData?.numberJoined,
          isGoing: formData?.attendance == "yes" ? "1" : "0",
          submitDate: new Date(),
          note: formData?.comment,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.success(
          `Cám ơn ${formData?.name} đã gửi lời chúc đến chúng em!`,
          {
            duration: 5000,
            position: "top-right",
            // Tùy chỉnh style
            style: {
              background: "#850f24",
              color: "white",
              padding: "16px",
            },
            icon: "👏",
          }
        );
        e.target.reset();

        setFormData({
          name: "",
          attendance: "",
          dietary: "",
          numberJoined: "",
          comment: "",
        });
        window.scrollTo({ behavior: "smooth", top: window.screen.height * 7 });
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error(`Anh/chị vui lòng thử lại sau nhé.`, {
        duration: 2000,
        position: "top-right",
      });
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
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
      <Toaster />
      <div id="first_section" className="min-h-screen flex flex-col">
        <div id="information" className="relative font-light p-8 flex">
          <div
            className="flex items-baseline relative flex-col text-[#850f24] "
            id="date-container"
          >
            <div className={`flex items-baseline ${Victoshe.className}`}>
              <span className="text-7xl font-extralight mr-2">0</span>
              <span className="text-7xl font-extralight">3</span>
            </div>
            <div className={`flex items-baseline m-auto ${Victoshe.className}`}>
              <span className="text-7xl font-extralight mr-2">0</span>
              <span className="text-7xl font-extralight">3</span>
            </div>
            <div className={`flex items-baseline ${Victoshe.className}`}>
              <span className="text-7xl font-extralight mr-2">2</span>
              <span className="text-7xl font-extralight">5</span>
            </div>
          </div>
          <div className="relative top-8 left-8 w-[2px] h-[220px] bg-[#850f24] opacity-120"></div>
          <div className="relative flex flex-row bottom-0 h-[220px] w-[200px">
            <div
              className={`absolute left-12 w-[220px] bottom-[-2rem] text-2xl tracking-[0.1em] text-[#850f24] font-bold uppercase ${Albra.className}`}
            >
              Our Big Day
            </div>
          </div>
        </div>
        <div
          id="name_wedding"
          className="flex-1 flex items-center justify-center"
        >
          <div
            className={`flex flex-col tracking-[0.05em] items-center -mt-16 ${Maniefa.className} text-[#850f24]`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold mb-6">
              PHAN TIEN DUAN
            </h1>
            <span className="text-3xl lg:text-5xl font-normal italic mb-6">
              &
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
              DOAN NGUYEN DA THAO
            </h1>
          </div>
        </div>
      </div>

      <div
        id="third_section"
        className="min-h-screen  p-1 flex items-center justify-center"
      >
        <ImageSlider />
      </div>
      <div
        id="seccond_section"
        className="min-h-screen bg-[#850f24] rounded-3xl p-12 text-white flex items-center flex-col justify-center "
      >
        <div id="title_first" className="text-center mb-12 -mt-36 xl:-mt-12">
          <p
            className={`text-3xl lg:text-4xl xl:text-6xl ${Victoshe.className} mb-2 tracking-wide`}
          >
            Tiến Duẩn & Dạ Thảo
          </p>
          <p
            className={`text-xl lg:text-2xl xl:text-3xl tracking-wide ${Victoshe.className}`}
          >
            thân mời tham dự bữa tiệc chung vui cùng gia đình
          </p>
        </div>

        {/* Date Section */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl lg:text-4xl xl:text-6xl tracking-[0.2em] ${Victoshe.className}`}
          >
            03.03.2025
          </h1>
        </div>

        {/* Bottom Section */}
        <div
          className={`tracking-wide text-xl lg:text-2xl xl:text-3xl text-center ${Victoshe.className}`}
        >
          <p className=" ">
            Sự hiện diện của quý khách <br />
            là lời chúc ý nghĩa nhất
          </p>
          <p className="">đối với hai gia đình chúng tôi</p>
        </div>
      </div>
      <div
        id="six_section"
        className="min-h-screen p-4 m-auto relative bg-[url(/images/DSC02172.jpg)]"
        style={{
          backgroundPositionX: "center",
          backgroundPositionY: "20%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <CountdownTimer />

        {/* Image */}
        {/* <div className="relative w-[80%] lg:w-full lg:max-w-[600px] aspect-[2/3] lg:aspect-[2/3] m-auto overflow-hidden">
          <Image
            src="/images/DSC02172.jpg"
            alt="Dress code reference"
            fill
            className="object-contain rounded-3xl w-full"
            // sizes="(max-width: 768px) 100vw, 400px; (min-width: 1024px) 80vw"
            priority
          />
        </div> */}
      </div>
      <div id="five_section" className="min-h-screen p-12  text-[#850f24]">
        <TitleCustom title={"Our Wedding"} className="text-center" />
        <div className={`max-w-md mx-auto px-6 py-4 ${Albra.className}`}>
          {/* Timeline content */}
          <div className="space-y-6">
            <div className="w-[1px] h-16 bg-[#850f24]/80 mx-auto"></div>
            {/* 17:00 Section */}
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-serif mb-2">17:00</h3>
              <p className="text-sm md:text-base tracking-[0.15em] uppercase font-bold text-[#850f24] opacity-70">
                Đón khách
              </p>
            </div>

            {/* 18:00 Section */}
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-serif mb-2">17:30</h3>
              <p className="text-sm md:text-base tracking-[0.15em] uppercase font-bold text-[#850f24] opacity-70">
                Chụp hình
              </p>
            </div>

            {/* 19:00 Section */}
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-serif mb-2">18:00</h3>
              <p className="text-sm md:text-base tracking-[0.15em] uppercase text-[#850f24] opacity-70 font-bold">
                Nghi thức
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-serif mb-2">18:30</h3>
              <p className="text-sm md:text-base tracking-[0.15em] uppercase text-[#850f24] opacity-70 font-bold">
                Khai tiệc
              </p>
            </div>
            {/* Vertical line */}
            <div className="w-[1px] h-16 bg-[#850f24]/80 mx-auto"></div>
          </div>
        </div>
      </div>

      <div id="seven_section" className="min-h-screen p-12 w-full ">
        <TitleCustom
          title={"Tham dự cùng chúng tôi"}
          className="text-center text-[#850f24]"
        />
        <div className=" p-4 flex items-center flex-col justify-center mt-8 mb-8 w-full xl:max-w-[600px] m-auto">
          <p
            className={`text-3xl lg:text-4xl xl:text-6xl ${Victoshe.className} text-[#850f24] font-bold`}
          >
            FOR YOU LUXURY
          </p>

          <div className="mt-4 text-center tracking-wide text-[#850f24]">
            <p>Sảnh Lavender - Tầng 2</p>
            <p>Công viên trung tâm đường 2/9</p>
            <p>P. Hoà Cường Bắc - Q. Hải Châu - TP. Đà Nẵng</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full xl:max-w-[600px] m-auto"
        >
          <div className="space-y-6 text-[#850f24]">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                className="text-[#850f24] w-full px-4 py-2 border-b border-gray-600 bg-transparent focus:border-black focus:ring-0 text-sm font-light tracking-wide placeholder-[#850f24]"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <input
                  id="yes1"
                  type="radio"
                  name="attendance"
                  value="yes"
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 focus:ring-black"
                />
                <label for="yes1" className="text-sm font-light tracking-wide">
                  Rất vui khi tham dự
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  id="yes2"
                  type="radio"
                  name="attendance"
                  value="no"
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 focus:ring-black"
                />
                <label for="yes2" className="text-sm font-light tracking-wide">
                  Rất tiếc
                </label>
              </div>
            </div>

            <div>
              <input
                type="number"
                name="numberJoined"
                value={formData.numberJoined}
                onChange={handleChange}
                placeholder="Số lượng tham dự"
                className="text-[#850f24] w-full px-4 py-2 border-b border-gray-600 bg-transparent focus:border-black focus:ring-0 text-sm font-light tracking-wide placeholder-[#850f24]"
              />
            </div>
            <div>
              <input
                type="text"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Để lại lời chúc"
                className="text-[#850f24] w-full px-4 py-2 border-b border-gray-600 bg-transparent focus:border-black focus:ring-0 text-sm font-light tracking-wide placeholder-[#850f24]"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border text-[#850f24] border-[#850f24] py-4 px-4 text-sm font-light tracking-wide hover:bg-[#850f24] hover:text-white transition-colors duration-200 mt-4"
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>

      <div
        id="eight_section"
        className="relative min-h-screen p-12 bg-[#850f24] text-white rounded-3xl"
      >
        <div className="absolute w-full top-[50%] left-[50%] translate-y-[-100%] translate-x-[-50%] space-y-4">
          <p
            className={`lg:text-8xl text-5xl font-bold tracking-widest text-left ml-4 mb-2 lg:text-center ${League.className}`}
          >
            Thank you
          </p>
          <div
            className={`text-lg lg:text-3xl absolute right-1 lg:right-12 space-y-4 text-center font-bold tracking-[0.1em] ${League.className}`}
          >
            The next chapter of our story begin
          </div>
        </div>
      </div>
    </div>
  );
}
