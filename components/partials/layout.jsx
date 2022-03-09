import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
// const Header = dynamic(() => import("./header"), { ssr: false })
export default function Layout({ children }) {
    const router = useRouter();
    console.log(router)
    // console.log(bgLayout)
    const [style,setStyle] = useState({bg:"bg-[rgba(255,255,255,0.25)]",position:"absolute"})
    const [bgLayout,setBgLayout] = useState("bg-[#FFFFFF]")
    
    useEffect(()=>{
        if(router.pathname==="/Invoice"){
        setStyle({bg:"bg-[#FFFFFF]",position:"static"})
        setBgLayout("bg-[#F6F6F6]")
        }
        else{
        setStyle({bg:"bg-[rgba(255,255,255,0.25)]",position:"absolute"})
        setBgLayout("bg-[#FFFFFF]")
    }
    },[router.pathname])
    console.log(bgLayout)
    return (
        <div className={`font-Notosans mx-auto relative ${bgLayout}`}>
            <Header styleCustom={style} />
            {children}
            <Footer />
        </div>
    )

}