import { Disclosure } from "@headlessui/react"
import { useState } from "react"
import { FooterNavigation, Media } from "../../data/globals"
import { ChevronDownIcon } from '@heroicons/react/solid'
import Icon from "../Icon"

export default function Footer() {
    const { Active, setActive } = useState(0)

    return (
        <footer className="mx-auto md:px-24 px-4 pb-20 md:py-8 mt-8 border-t-2 border-gray-300  bg-transparent">
            <div className="max-w-[1600px] mx-auto text-gray-400">
                <div className="flex justify-between my-10">
                    {FooterNavigation.map((item) => {
                        return (
                            <div className="">{item.name}</div>
                        )
                    })}
                </div>
                <div className="flex justify-between items-center ">
                    <Icon colorLogo="#2F88FF" />
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

                {/* mobile */}
                {/* <div className="md:hidden">
                    <div className="col-span-4 mb-4 ">
                        <div className=" mb-6">
                            <img src="/LOGO PAYMENT.png" />
                        </div>
                        <p className="text-justify font-normal text-xs leading-normal text-[#717171]">With Payment, we are bringing your favorite business to your Binance app. Go to Binance Marketplace with your existing Binance account and make a payment using Payment. Spending cryptocurrency has become a lot easier.</p>
                    </div>
                    <Disclosure>
                        {({ open }) => (
                            <div className="my-3">
                                <Disclosure.Button className="flex justify-between w-full">
                                    <h4 className="text-sm font-semibold" >About us</h4>
                                    <ChevronDownIcon width={16} className={`${open ? "" : "rotate-90"}`} />
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                    <ul className="space-y-2 py-4">
                                        {FooterNavigation["About us"].map((item) => (
                                            <li key={item.name} className="text-xs font-Roboto text-[#717171]">
                                                {item.name}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </Disclosure.Panel>
                            </div>
                        )}

                    </Disclosure>

                    <Disclosure>
                        {({ open }) => (
                            <div className="my-3">
                                <Disclosure.Button className="flex justify-between w-full">
                                    <h4 className="text-sm font-semibold">Service</h4>
                                    <ChevronDownIcon width={16} className={`${open ? "" : "rotate-90"}`} />                            </Disclosure.Button>
                                <Disclosure.Panel>
                                    <ul className="space-y-2 py-4">
                                        {FooterNavigation["Service"].map((item) => (
                                            <li key={item.name} className="text-xs font-Roboto text-[#717171]">
                                                {item.name}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </Disclosure.Panel>
                            </div>
                        )}

                    </Disclosure>

                    <Disclosure>
                        {({ open }) => (
                            <div className="my-3">
                                <Disclosure.Button className="flex justify-between w-full">
                                    <h4 className="text-sm font-semibold">Support</h4>
                                    <ChevronDownIcon width={16} className={`${open ? "" : "rotate-90"}`} />                            </Disclosure.Button>
                                <Disclosure.Panel>
                                    <ul className="space-y-2 py-4">
                                        {FooterNavigation["Support"].map((item) => (
                                            <li key={item.name} className="text-xs font-Roboto text-[#717171]">
                                                {item.name}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                </div> */}
            </div>
        </footer>
    )
}