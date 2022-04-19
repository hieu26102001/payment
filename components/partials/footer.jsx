import { Disclosure } from "@headlessui/react"
import { useState,useEffect } from "react"
import { FooterNavigation, Media } from "../../data/globals"
import { ChevronDownIcon } from '@heroicons/react/solid'
import Icon from "../Icon"
import Link from "next/link"
import useWindowSize from "../../hooks/useWindowSize"

export default function Footer() {

    const size = useWindowSize()
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        if (size.width <= 768)
            setMobile(true)
        else setMobile(false)
    }, [size.width])
    return (

        <footer className="mx-auto md:px-24 px-4 pb-20 md:py-8 mt-8 border-t-2 border-gray-300  bg-transparent">
            {/* PC */}
            {!mobile
                ?
                <div className="max-w-[1600px] mx-auto text-gray-400 grid ">
                    <div className="flex flex-wrap justify-between my-10">
                        {FooterNavigation.map((item) => {
                            return (
                                <div className="">{item.name}</div>
                            )
                        })}
                    </div>
                    <div className="flex justify-between items-center ">
                        <Link href="/">
                            <a>
                                <Icon colorLogo="#2F88FF" />
                            </a>
                        </Link>
                        <div className="flex space-x-3 items-center">
                            {Media.map((item) => {
                                return (
                                    <img src={item} />
                                )
                            })}
                        </div>
                        <div className="flex items-center">
                            © 2000-2021, All Rights Reserved
                        </div>
                    </div>
                </div>
                :
                <div className="text-[#9A9EA6] ">
                    <Link href="/">
                        <a className="flex items-center justify-center pt-10 pb-8">
                            <img src="/LogoMobile.svg" className="w-12" />
                        </a>
                    </Link>
                    <div className="flex flex-wrap justify-center ">
                        {FooterNavigation.map((item) => {
                            return (
                                <div className="px-3 py-2 ">{item.name}</div>
                            )
                        })}
                    </div>
                    <div className="flex items-center justify-center py-8">
                        © 2000-2021, All Rights Reserved
                    </div>
                    <div className="flex space-x-3 items-center justify-center">
                        {Media.map((item) => {
                            return (
                                <img src={item} className="w-10 " />
                            )
                        })}
                    </div>
                </div>
            }

            {/* Mobile */}




        </footer>
    )
}