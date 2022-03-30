import {     UserCircleIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import Link from "next/link"
import { Button, Popover } from "@mui/material";
import jsCookie from "js-cookie";
import Route from "next/router"

export default function Header({ styleCustom, colorLogo, isLogin = false }) {
    const token = jsCookie.get('access_token')
    // console.log(token)
    const { bg, position } = styleCustom
    const router = useRouter()
    // console.log(router)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const Logout = async () =>{
        jsCookie.remove('access_token')
        Route.push("/")
     }
    

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <header className={`${bg} w-full md:px-[20px] pl-4 ${position} top-0 py-[15px] z-50`}>
            <div className="max-w-[1600px] mx-auto flex justify-between " >
                <div className="flex items-center">
                    <Link href="/">
                        <a>
                            <Icon colorLogo={colorLogo} />
                        </a>
                    </Link>
                </div>
                <div className={`flex space-x-6 items-center ${!isLogin ? "" : "hidden"}`}>
                    <div className="flex space-x-6 items-center h-full">
                        <Link href="/">
                            <a className={`${router.route == "/" ? "text-blue-500 border-b-4 border-blue-500" : ""} px-6 h-full w-full flex items-center`}>Home</a >
                        </Link>
                        <Link href="/store" >
                            <a className={`${router.route == "/store" ? "text-blue-500 border-b-4 border-blue-500" : ""} px-6 h-full flex items-center`}>Shopping</a >
                        </Link>
                    </div>
                    {!token
                        ? null
                        :
                        <div className="flex space-x-6 items-center h-full">
                            <Link href="/Invoice">
                                <a className={`${router.route == "/Invoice" ? "text-blue-500 border-b-4 border-blue-500" : ""} px-6 h-full flex items-center`}>Invoice</a>
                            </Link>
                            <Link href="/dashboard">
                                <a className={`${router.route == "/dashboard" ? "text-blue-500 border-b-4 border-blue-500" : ""} px-6 h-full flex items-center`}>Dashboard</a>
                            </Link>
                            <Link href="/wallet">
                                <a className={`${router.route == "/wallet" ? "text-blue-500 border-b-4 border-blue-500" : ""} px-6 h-full flex items-center`}>Wallet</a>
                            </Link>
                        </div>}

                </div>
                <div className={`flex items-center text-[#2F88FF] ${!isLogin ? "" : "hidden"}`}>
                    {!token ?
                        <div className="flex space-x-4  items-center">
                            <Link href="/auth/login"><a>Login</a></Link >
                            <Link href="/auth/register">
                                <a>
                                    <Button className="text-white bg-blue-500 hover:bg-blue-600 w-full normal-case text-sm py-4 px-8 rounded-full">
                                        Get Started
                                    </Button>
                                </a>
                            </Link>
                        </div>
                        :
                        <div className=" flex">
                            <Button aria-describedby={id} onClick={handleClick} className="w-8 text-[#2F88FF]">
                                <UserCircleIcon />
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <div className="w-max px-4">
                                    <button className="flex text-[#2F88FF] py-2 border-b border-gray-200">
                                        <div className="w-8"> <UserCircleIcon /></div>
                                        <div className="px-2">Name</div>
                                    </button>
                                    <button className="flex text-[#E53535] py-2" onClick={Logout}>
                                        <div className="w-8"><LogoutIcon/></div>
                                        <div className="px-2">Log out</div>
                                    </button>
                                </div>
                            </Popover>
                        </div>}


                </div>
            </div>
        </header>
    )

}