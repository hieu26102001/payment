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
    <div className="grid grid-cols-3 justify-center">
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
            <div>
              <img src={item.image} />
              <h1 className="font-serif"> {item.title}</h1>
              <p className="font-serif text-[#717171]"> {item.decription}</p>
            </div>
            // </SwiperSlide>
          );
        })}
      {/* </Swiper> */}
    </div>
  );
}
