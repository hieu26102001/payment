import { intro } from "../data/globals";
import Link from "next/link";
export default function Intro() {
  return (
    <div className="md:mx-10 mx-4">
      <div className="text-center my-10 relative">
        <h1 className="z-10 text-center md:text-5xl text-2xl leading-8 font-extrabold relative">
        <span className="md:h-4 md:w-32 w-[67px] h-3 bg-[#F3C219] absolute md:top-4 top-3 -z-10 "> </span>
          INTRODUCE
        </h1>
      </div>
      <div className="justify-center">
        {intro.map((item, index) => {
          let a = "md:flex";
          let b = "hidden";
          let c = "hidden";
          if (index === 1) {
            a = "md:flex-row-reverse md:flex";
            b = "md:block hidden";
            c = "md:hidden";
          }
          return (
            <div className={`my-10 ${a}`}>
              <div className="md:w-[700px] md:h-[600px] ml-11">
                <img src={item.image} />
              </div>
              <div className="md:mt-32 mt-8 md:w-[600px]">
                <h1 className="font-bold font-serif md:text-5xl text-lg md:mb-10 mb-4">
                  {item.title}
                </h1>
                <p className="text-[#717171] font-serif md:text-2xl text-sm">
                  {item.decription}
                </p>
                <Link href="/store">
                  <button
                    className={`md:w-40 w-full mt-10 hover:bg-yellow-600 h-[61px] rounded-md text-lg text-bold font-Notosans bg-[#F3C219] text-white ${b}`}
                  >
                    SHOP
                  </button>
                </Link>
                <Link href="/store">
                  <button
                    className={`hover:bg-yellow-700 w-full mt-8 h-[44px] rounded-md text-lg text-bold font-Notosans bg-[#F3C219] text-white ${c}`}
                  >
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
