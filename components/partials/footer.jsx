import { Disclosure } from "@headlessui/react"
import { useState } from "react"
import { FooterNavigation, Media } from "../../data/globals"

export default function Footer() {
    const { Active, setActive } = useState(0)

    return (
        <footer className="mx-auto h-80 px-[20px] absolute my-8">
            <div className="hidden md:grid grid-cols-12 gap-16 ">
                <div className="col-span-4 space-y-2 ">
                    <div className=" mb-6">
                        <img src="/LOGO PAYMENT.png" />
                    </div>
                    <p className="text-justify font-normal text-xs leading-normal text-[#717171]">With Payment, we are bringing your favorite business to your Binance app. Go to Binance Marketplace with your existing Binance account and make a payment using Payment. Spending cryptocurrency has become a lot easier.</p>
                </div>

                <div className="md:flex mt-4 md:mt-0 col-span-6 md:space-x-2 space-y-4 md:space-y-0 justify-between">
                    <div className="space-y-3 md:w-28">
                        <h4 className="text-sm font-medium  mb-4">About us</h4>
                        <ul className="space-y-2">
                            {FooterNavigation["About us"].map((item) => (
                                <li key={item.name} className="text-xs text-[#2F88FF]">
                                    {item.name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                    <div className="space-y-3 md:w-28">
                        <h4 className="text-sm font-medium mb-4">Service</h4>
                        <ul className="space-y-2">
                            {FooterNavigation["Service"].map((item) => (
                                <li key={item.name} className="text-xs text-[#2F88FF]">
                                    {item.name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                    <div className="space-y-3 md:w-32">
                        <h4 className="text-sm font-medium  mb-4">Support</h4>
                        <ul className="space-y-2">
                            {FooterNavigation["Support"].map((item) => (
                                <li key={item.name} className="text-xs text-[#2F88FF]">
                                    {item.name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
            
        {/* mobile */}
            <div className="md:hidden">
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
                                <div className="font-semibold text-sm">{open ? "-" : "+"}</div>
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
                                <div className="font-semibold text-sm">{open ? "-" : "+"}</div>
                            </Disclosure.Button>
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
                                <div className="font-semibold text-sm">{open ? "-" : "+"}</div>
                            </Disclosure.Button>
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
            </div>

            <div className="space-y-4 mt-4">
                <h4 className="md:hidden font-semibold">Community</h4>
                <div className="flex space-x-4">
                    {Media.map((item) => (
                        <img src={item} />
                    ))}
                </div>
            </div>

            <div className="hidden md:block">
                <img className="absolute right-0 bottom-0" src="/footer/ellipse.png" />
            </div>

        </footer>
    )
}