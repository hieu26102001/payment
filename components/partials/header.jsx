import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Header({styleCustom}) {

    const {bg,position} = styleCustom
    console.log(bg)  
    return (
        <header className={`${bg} w-full md:px-[20px] ml-4 ${position} top-0 py-[24px]`}>
            <div className="max-w-[1600px] mx-auto" >
                <img src="/LOGO PAYMENT.png" />
            </div>
        </header>
    )

}