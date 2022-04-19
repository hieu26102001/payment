import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Text from "../auth/text";
import Header from "./header";
import Link from "next/link"
import Icon from "../Icon";

export default function Authlayout({ children }) {
    const [style, setStyle] = useState({ bg: "bg-[rgba(255,255,255,0)]", position: "absolute" })
    const window = useWindowSize()
    const bgimage = (window.width < 768 ? "/Auth/bg-image2.png" : "/Auth/bg-image.png")
    // console.log(window)
    return (
        <div className="md:flex mx-auto max-w-[1600px] max-h-[1000px]">
            <div className="grid md:flex lg:w-1/2 text-black items-center relative  ">
                <div className="hidden md:flex">
                    <div className="absolute md:top-0 md:left-0 p-4">
                        <Link href="/">
                            <a className="  mx-auto ">
                                <Icon colorLogo="#FFF" />
                            </a>
                        </Link>
                    </div>
                </div>
                <Text />
                <div className="md:hidden flex  flex-col w-full items-center  absolute ">
                    <Link href="/">
                        <a className="  mx-auto ">
                            <Icon colorLogo="#FFF" />
                        </a>
                    </Link>
                </div>

                <div className=" md:flex flex justify-center top-0 -z-10 md:h-full w-full">
                    <img src={bgimage} className="w-full md:h-full " />

                </div>
            </div>
            <div className="w-full lg:w-1/2 bg-white md:flex md:items-center relative ">
                {children}
            </div>
        </div>
    )
}
