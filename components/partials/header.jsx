import { UserCircleIcon } from "@heroicons/react/solid";
import { LoginIcon, LogoutIcon, MenuIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import Link from "next/link"
import { Button, Popover } from "@mui/material";
import jsCookie from "js-cookie";
import Route from "next/router"
import useWindowSize from "../../hooks/useWindowSize";
import jwtDecode from "jwt-decode";
import { headerNavigation } from "../../data/globals";


export default function Header({ styleCustom, colorLogo, isLogin = false }) {

    const { bg, position } = styleCustom
    const router = useRouter()

    const [anchorEl1, setAnchorEl1] = useState(null);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const Logout = async () => {
        jsCookie.remove('access_token')
        Route.push("/auth/login")
    }
    const [token, setToken] = useState()
    const size = useWindowSize()
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        (
            async function () {
                const token = await jsCookie.get("access_token")
                setToken(token)
            }
        )()
    }, [])
        useEffect(() => {
        (async function () {
            if (size.width < 1024)
                setMobile(true)
            else setMobile(false)
        })(
        )
    }, [size.width])

    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const id2 = open2 ? '2' : undefined;
    const id1 = open1 ? "1" : undefined
    return (

        <header className={`${bg} w-full md:px-[20px] px-4 ${position} md:top-0 md:left-0 py-[15px] z-50`}>
            {!mobile
                ?
                <div className="max-w-[1600px] mx-auto flex  justify-between " >
                    <div className="flex items-center">
                        <Link href="/">
                            <a>
                                <Icon colorLogo={colorLogo} />
                            </a>
                        </Link>
                    </div>
                    {/* --PC--     */}

                    <div className={`flex space-x-6 items-center ${!isLogin ? "" : "hidden"}`}>
                        <div className="flex space-x-6 items-center h-full">
                            {headerNavigation.map((items, id) => {
                                return (
                                    <>
                                        {
                                            token ?
                                                <>
                                                    {(id < 2) ?

                                                        <>
                                                            <Link href={items.link}>
                                                                <a className={`${router.route == items.link ? "text-blue-500 border-b-4 border-blue-500" : ""} px-6 h-full w-full flex items-center`}>
                                                                    {items.name}
                                                                </a>
                                                            </Link>
                                                        </> :
                                                        null}
                                                </>
                                                : <>
                                                    <Link href={items.link}>
                                                        <a className={`${router.route == items.link ? "text-blue-500 border-b-4 border-blue-500" : ""} px-6 h-full w-full flex items-center`}>
                                                            {items.name}
                                                        </a>
                                                    </Link></>
                                        }
                                    </>
                                )

                            })}
                        </div>

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
                                            <div className="w-8"><LogoutIcon /></div>
                                            <div className="px-2">Log out</div>
                                        </button>
                                    </div>
                                </Popover>
                            </div>
                        }
                    </div>
                </div>
                :
                <div className="max-w-[1600px] mx-auto flex  justify-between ">
                    <div className=" text-[#2F88FF] ">
                        <button className="w-[30px]" aria-describedby={id1} onClick={handleClick1}>
                            <MenuIcon />
                        </button>
                        <Popover
                            id={id1}
                            open={open1}
                            anchorEl={anchorEl1}
                            onClose={handleClose1}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <div className="m-2 ">
                                {headerNavigation.map((items, id) => {
                                    return (
                                        <>
                                            {
                                                !token ?
                                                    <>
                                                        {(id < 2) ?

                                                            <Link href={items.link}>
                                                                <a className={`${router.route == items.link ? "text-blue-500 border-b-2 border-blue-500" : "border-b border-black"} px-4 p-2 h-full w-full flex items-center`}>
                                                                    {items.name}
                                                                </a>
                                                            </Link>
                                                            :
                                                            null}
                                                    </>
                                                    :
                                                    <Link href={items.link}>
                                                        <a className={`${router.route == items.link ? "text-blue-500 border-b-4 border-blue-500" : ""} p-2 h-full w-full flex items-center`}>
                                                            {items.name}
                                                        </a>
                                                    </Link>
                                            }</>
                                    )

                                })}
                            </div>
                        </Popover>
                    </div>
                    <Link href="/">
                        <a >
                            <img src="/LogoMobile.svg" className="w-[30px]" />
                        </a>
                    </Link>

                    <div className=" flex">
                        <button aria-describedby={id2} onClick={handleClick2} className="w-[30px] text-[#2F88FF]">
                            <UserCircleIcon />
                        </button>
                        <Popover
                            id={id2}
                            open={open2}
                            anchorEl={anchorEl2}
                            onClose={handleClose2}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            {!token ?
                                <div className=" items-center text-[#2F88FF]">
                                    <Link href="/auth/login">
                                        <a className="flex items-center p-2">
                                            <div className="w-8"><LoginIcon /></div>
                                            <div className="px-2">Log in</div>
                                        </a>
                                    </Link >
                                    <Link href="/auth/register">
                                        <a className="flex items-center p-2">
                                            Get Started
                                        </a>
                                    </Link>
                                </div>
                                :
                                <div className="w-max px-4">
                                    <Link href="/dashboard">
                                        <a>
                                            <button className="flex text-[#2F88FF] py-2 border-b border-gray-200">

                                                <div className="w-8"> <UserCircleIcon /></div>
                                                <div className="px-2 flex items-center">Name</div>
                                            </button>
                                        </a>
                                    </Link>

                                    <button className="flex text-[#E53535] py-2" onClick={Logout}>
                                        <div className="w-8"><LogoutIcon /></div>
                                        <div className="px-2 flex items-center">Log out</div>
                                    </button>
                                </div>}

                        </Popover>
                    </div>
                </div>}




        </header>
    )

}