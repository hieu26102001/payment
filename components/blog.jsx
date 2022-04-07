import { blog } from "../data/globals";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function Blog() {
  return (
    <div>
      <div className="text-center my-10 relative">
        <h1 className="z-10 text-center md:text-5xl text-2xl leading-8 font-extrabold relative">
        <span className="md:h-4 md:w-32 w-[67px] h-3 bg-[#F3C219] absolute md:top-4 top-3 -z-10 "> </span>
          BLOG
        </h1>
      </div>
      <div className="md:block hidden">
        <div className="grid md:grid-cols-3 gap-4 justify-items-center mx-24">
          {/* <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      > */}
          {blog.map((item) => {
            return (
              // <SwiperSlide>
              <div className="">
                <img className="" src={item.image} />
                <h1 className="font-Notosans text-2xl font-bold text-[#1E2329] mt-7">
                  {" "}
                  {item.title}
                </h1>
                <p className="font-Notosans font-normal text-[#717171] text-lg">
                  {" "}
                  {item.decription}
                </p>
              </div>
              // </SwiperSlide>
            );
          })}
          {/* </Swiper> */}
        </div>
      </div>
      <div className="md:hidden">
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
        </Swiper>
      </div>
    </div>
  );
}
