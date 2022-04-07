import { Button } from "@mui/material";
import InputPayment from "../Invoice/InputPayment";
import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/solid";
import {useRouter} from "next/router"
import Alert from "../Alert";

export default function Authform({ label, title,children }) {
    const router = useRouter()

    return (
        <div className=" flex  w-full my-auto">
            <div className="md:flex hidden hover:underline text-gray-400 absolute top-0 py-[24px] pl-4 left-0">
                <button className="grid justify-items-center grid-cols-2" onClick={() => router.back()}>
                            <ChevronLeftIcon className="h-full " />
                            <h3 className="place-self-center">Back</h3>
                </button>
            </div>
            <div className="w-2/3 mx-auto items-center flex">
                <div className="py-8 md:py-16 w-full">
                    <h1 className="text-2xl font-bold mb-4">{label}</h1>
                    <h2 className="text-lg text-[#8692A6] border-b-2 mb-8 pb-4 border-gray-200">{title}</h2>
                    <Alert/>
                    {children}
                </div>
            </div>
        </div>
    )
}