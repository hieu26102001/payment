import { Disclosure } from "@headlessui/react"
import { useState } from "react"
import { FooterNavigation, Media } from "../../data/globals"
import { ChevronDownIcon } from '@heroicons/react/solid'
import Icon from "../Icon"
import Link from "next/link"

export default function Footer() {
    const { Active, setActive } = useState(0)

    return (
        <footer className="mx-auto md:px-24 px-4 pb-20 md:py-8 mt-8 border-t-2 border-gray-300  bg-transparent">
            <div className="max-w-[1600px] mx-auto text-gray-400">
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
        </footer>
    )
}