"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// #850f24, #eae5d6
const ImageSlider = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );
  const images = [
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
    "/images/template.jpg",
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="w-full  px-4">
      {/* Add required styles inline */}
      <style jsx global>{`
        .slick-slide {
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }
        .slick-center {
          transform: scale(1);
        }
      `}</style>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="outline-none px-2">
            <div className="relative aspect-[2/3] rounded-3xl overflow-hidden">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw,(max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
