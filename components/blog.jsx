import { blog } from "../data/globals";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode , Pagination } from "swiper";
export default function Blog() {
  return (
    <div>
      <div className="text-center my-10 relative">
        <h1 className="z-10 text-center md:text-5xl text-2xl leading-8 font-extrabold relative">
          <span className="md:h-4 md:w-32 w-[67px] h-3 bg-[#F3C219] absolute md:top-4 top-3 -z-10 ">
            {" "}
          </span>
          BLOG
        </h1>
      </div>
      <div className="">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode , Pagination]}
          className="mySwiper"
          breakpoints={{
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
        >
          {blog.map((item) => {
            return (
              <SwiperSlide>
                <div className="">
                  <img src={item.image} />
                  <h1 className="font-Notosans text-base font-bold text-[#1E2329] mt-7">
                    {" "}
                    {item.title}
                  </h1>
                  <p className="font-Notosans text-[#717171] text-sm font-normal">
                    {" "}
                    {item.decription}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <Swiper
        slidesperView = {2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {blog.map((item) => {
            return (
              <SwiperSlide>
                <div className="">
                  <img src={item.image} />
                  <h1 className="font-Notosans text-base font-bold text-[#1E2329] mt-7">
                    {" "}
                    {item.title}
                  </h1>
                  <p className="font-Notosans text-[#717171] text-sm font-normal">
                    {" "}
                    {item.decription}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}

      </Swiper> */}
    </div>
  );
}
