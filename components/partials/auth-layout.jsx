import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Text from "../auth/text";
import Header from "./header";

export default function Authlayout({children}){
    const [style,setStyle]= useState({ bg:"bg-[rgba(255,255,255,0)]",position : "absolute"})
    const bgimage = "/Auth/bg-image.png"
 return(
     <div className="mx-auto ">

        <div className="md:flex max-w-[1600px] max-h-[1000px]">
            <div className="hidden md:flex w-1/2 text-black items-center relative ">
                <Header styleCustom={style} colorLogo="#FFF" isAuth={true}/>
                <Text/>
                <img src ={bgimage} className="hidden md:block top-0 -z-10 w-full"/>
            </div>
            <div className="w-full lg:w-1/2 bg-white md:flex md:items-center relative">
                {children}
            </div>
        </div>
     </div>
 )
}
