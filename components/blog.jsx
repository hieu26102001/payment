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
      <div className="text-center my-10 ">
        <span className="h-4 w-32 bg-[#F3C219] absolute mr-3 "> </span>
        <h1 className=" text-center relative text-5xl font-extrabold">BLOG</h1>
      </div>
      <div className = "md:block hidden">
      <div className="grid md:grid-cols-3 gap-10 justify-items-center">
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
              <img src={item.image} />
              <h1 className="font-Notosans text-2xl font-bold text-[#1E2329]">
                {" "}
                {item.title}
              </h1>
              <p className="font-Notosans text-[#717171] text-lg">
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
                <h1 className="font-Notosans text-2xl font-bold text-[#1E2329]">
                  {" "}
                  {item.title}
                </h1>
                <p className="font-Notosans text-[#717171] text-lg">
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
