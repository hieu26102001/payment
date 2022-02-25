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
      <div className="text-center md:my-20 pb-20 relative">
        <h1 className=" text-center relative md:text-5xl text-2xl font-extrabold">BLOG</h1>
        <span className="h-4 w-32 bg-[#F3C219] absolute top-3 -z-10"> </span>
      </div>
      <div className = "md:block hidden">
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
              <img className = "" src={item.image} />
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
      <div className = "md:hidden">
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
