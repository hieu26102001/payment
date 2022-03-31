import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
export default function Banner() {
  const size = useWindowSize()
  const [textSize,setTextSize] = useState("xs:text-2xl md:text-[64px]")
  const [styleContent,setStyleContent] = useState("absolute md:top-10 md:w-[600px] w-[220px]")
  const [sizeBtn,setSizeBtn] = useState("w-[351px] h-[61px]")
  useEffect(()=>{
    if(size.width <=1180 ){
      setTextSize("xs:text-2xl md:text-[32px] md:leading-normal")
      setStyleContent("absolute md:top-1 md:w-[440px] w-[220px]")
      setSizeBtn("w-[230px] h-[50px]")
    }
    else{
      setTextSize("md:text-[64px]")
      setStyleContent("absolute md:top-10 md:w-[600px] w-[220px]")
      setSizeBtn("w-[351px] h-[61px]")
    }
  },[size.width])
  console.log(size.width)
  return (
    <div className="bg-[#D6EBFF]  ">
      <div className="max-w-[1600px] mx-auto" >
        <div className={`md:ml-16 ml-4 ${styleContent} pt-20 sm:pt-[70px] md:pt-20  `}>
          <h1 className={`${textSize} font-bold text-[#2F88FF] mb-4  font-serif leading-normal`}>
            Electronic payment solution in Viet Nam
          </h1>
          <p className="text-[#2F88FF] mb-4 font-serif md:pr-44 md:text-base text-xs xs:text-sm">
            PAYMENT is a modern and breakthrough technology in the field of
            electronic payment, bringing superior experiences to customers and
            partners.
          </p>
          <Link href="/store">
            <button className={`md:block hidden uppercase font-bold rounded-md ${sizeBtn} text-white bg-blue-500 text-lg hover:bg-blue-700`}>
              {" "}
              Shopping Now{" "}
            </button>
          </Link>
          <Link href="/store">
            <button className="text-xs xs:text-base font-bold text-white rounded-lg w-[90px] h-[30px] xs:w-[130px] xs:h-[44px] sm:h-8 md:hidden bg-blue-500 hover:bg-blue-700 "> SHOP NOW </button>
          </Link>
        </div>
        <img className="sm:block hidden pt-10  bg-[#D6EBFF] " src="../Index/Banner0.png" />
        <div className="sm:hidden pt-10 grid justify-items-end">
          {/* <img className=" h-[86px] w-[86px]" src="../Index/banner2.png" />
          <img className="h-[66px] w-[66px] ml-24 mt-2 absolute top-16 right-3" src="../Index/banner3.png" />
          <img className="mt-9" src="../Index/banner1.png" /> */}
          <img className = "" src="../Index/BannerMobile.png"/>
          {/* <img src= "../Index/imagebanner2.png" />
          <img src= "../Index/imagebanner3.png" />
          <img src= "../Index/imagebanner4.png" /> */}
        </div>
      </div>
    </div>
  );
}
