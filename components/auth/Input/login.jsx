import InputPayment from "../../Invoice/InputPayment"
import Link from "next/link"
import { Button } from "@mui/material"
import Head from "next/head"

export default function LoginInput() {
    const ValidInput = (text) => {
        if (!text || text.trim() === "")
            return { error: true, helperText: "Required" };
        else return { error: false, helperText: " " };
    }
    return (
        <div>
            <Head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
                </style>
            </Head>
            <InputPayment label="Username *" type="text" Validate={ValidInput} />
            <InputPayment label="Password *" type="password" Validate={ValidInput} />
            <div className="flex flex-col space-y-4">
                <a href="/auth/recover-password">
                    <Link href="/auth/recover-password ">
                        Forgot your password?
                    </Link>
                </a>
                <Button className=" text-white bg-blue-500 hover:bg-blue-600 text-sm normal-case p-2">Sign in</Button>
                <div className="flex justify-center space-x-1">
                    <div>
                        <span>or </span>
                        <a className="text-blue-500 hover:text-blue-600 " >
                            <Link href="/auth/register"> signup new account </Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}