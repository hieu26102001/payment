import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
export default function BannerStore() {
  const size = useWindowSize();
  const [textSize, setTextSize] = useState("xs:text-2xl md:text-[64px]");
  const [styleContent, setStyleContent] = useState(
    "absolute md:top-10 md:w-[600px] w-[220px]"
  );
  const [sizeBtn, setSizeBtn] = useState("w-[351px] h-[61px]");
  useEffect(() => {
    if (size.width <= 1180) {
      setTextSize("xs:text-2xl md:text-[32px] md:leading-normal");
      setStyleContent("absolute md:top-1 md:w-[440px] w-[220px]");
      setSizeBtn("w-[230px] h-[50px]");
    } else {
      setTextSize("md:text-[48px]");
      setStyleContent("absolute md:top-10 md:w-[600px] w-[220px]");
      setSizeBtn("w-[351px] h-[61px]");
    }
  }, [size.width]);
  console.log(size.width);
  return (
    <div className="  bg-[#D6EBFF]   ">
      <div className="max-w-[1600px] mx-auto">
        <div
          className={`md:ml-16 ml-4 ${styleContent} pt-16 sm:pt-[70px] md:pt-16  `}
        >
          <h1
            className={`${textSize} font-bold text-[#2F88FF] mb-4  font-serif leading-tight`}
          >
            Summary of Shopping with Bitcoin, BNB and more!
          </h1>
          <p className="text-[#2F88FF]  w-full md:w-[380px] text-[12px] md:text-base font-normal">
            With PAYMENT, spending cryptocurrency becomes a lot easier. Visit
            any of the listed merchants to buy your favorite things with crypto
            using PAYMENT
          </p>
        </div>
        <div>
          <img
            className=" sm:block hidden  bg-[#D6EBFF]"
            src="../Store/BannerStore.png"
          />
          <img
            className="sm:hidden justify-center md:w-[426px] md:h-[475px] w-[202px] h-[440px] ml-32  pt-56  md:ml-52 md:pt-5 bg-[#D6EBFF]"
            src="../Store/BannerStore2.png"
          />
        </div>
      </div>
    </div>
  );
}
