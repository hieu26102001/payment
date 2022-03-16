import { useState } from "react";
import Text from "../auth/text";
import Header from "./header";

export default function Authlayout({children}){
    const [style,setStyle]= useState({ opacity : "0",position : "absolute"})
    const bgimage = "/Auth/bg-image.png"
 return(
     <div className="mx-auto">

        <div className="md:flex max-w-[1600px]">
            <div className="hidden lg:flex w-1/2 text-black items-center relative ">
                <Header styleCustom={style} />
                <div className="absolute top-[26rem] ">
                <Text/>
                </div>
                <img src ={bgimage} className="hidden md:block top-0 -z-10 w-full"/>
            </div>
            <div className="flex items-center w-1/2 justify-center">
                {children}
            </div>
        </div>
     </div>
 )
}
