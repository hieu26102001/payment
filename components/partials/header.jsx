import { UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import Link from "next/link"
import { Button } from "@mui/material";

export default function Header({ styleCustom, colorLogo,isAuth = false }) {
    
    const { bg, position } = styleCustom
    console.log(bg)
    return (
        <header className={`${bg} w-full md:px-[20px] pl-4 ${position} top-0 py-[15px] z-50`}>
            <div className="max-w-[1600px] mx-auto flex justify-between " >
                <div className="">
                    <a href="/">
                    <Icon colorLogo={colorLogo}/>
                    </a>
                </div>
                <div className={`flex space-x-4 items-center ${!isAuth?"":"hidden"}`}>
                    <a href="/">Home</a >
                    <a href="/store">Shopping</a >
                    {/* <div>Dashboard</div>a href=""
                    <div>Wallet</div> */}
                </div>
                <div className={`flex items-center text-[#2F88FF] ${!isAuth?"":"hidden"}`}>
                    <div className="flex space-x-4  items-center">
                        <a href="/auth/login">Login</a >
                        <a href="/auth/register">
                            <Button className="text-white bg-blue-500 hover:bg-blue-600 w-full normal-case text-sm py-4 px-8 rounded-full">
                                Get Started
                            </Button>
                        </a>
                    </div>
                    <div className="w-8"><UserCircleIcon/></div>
                </div>
            </div>
        </header>
    )

}