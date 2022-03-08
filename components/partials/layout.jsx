import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    const router = useRouter();
    console.log(router)
    // console.log(bgLayout)
    const [style,setStyle] = useState({opacity:"0.25",position:"absolute"})
    const [bgLayout,setBgLayout] = useState("bg-[#FFFFFF]")
    useEffect(()=>{
        if(router.pathname==="/Invoice"){
        setStyle({opacity:"1",position:"static"})
        setBgLayout("bg-[#F6F6F6]")
    }
        else{
        setStyle({opacity:"0.25",position:"absolute"})
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