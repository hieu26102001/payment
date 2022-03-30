import InputPayment from "../../Invoice/InputPayment"
import Link from "next/link"
import { Button } from "@mui/material"
import Head from "next/head"
import jsCookie from "js-cookie"
import Route from "next/router"
import Authform from "../Auth-form"

export default function LoginForm() {
    const ValidInput = (text) => {
        if (!text || text.trim() === "")
            return { error: true, helperText: "Required" };
        else return { error: false, helperText: " " };
    }
    const onSubmit = async (event) => {
        var _header = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        event.preventDefault();
        const body = {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
        }

        const response = await fetch("https://pay.fmcpay.com/api/login", {
            method: "POST",
            headers: _header,
            body: JSON.stringify(body),
        })
        const data = await response.json()
        const { result, mes, error } = data
    console.log(result)

        console.log(mes)
        if (error === 0) {
            const cookie = jsCookie.set("access_token", result.access_token, { expires: 0.5 })
            Route.push("/dashboard")
            // console.log(cookie)
        }
        else return (mes)
    }
    return (
        <Authform label="Sign in" title="Welcome back! Log In with your Email.">
            <form method="POST" onSubmit={onSubmit}>
                <InputPayment name="email" label="Email *" type="text" Validate={ValidInput} />
                <InputPayment name="password" label="Password *" type="password" Validate={ValidInput} />
                <div className="flex flex-col space-y-4">
                    <Link href="/auth/recover-password">
                        <a href="/auth/recover-password ">
                            Forgot your password?
                        </a>
                    </Link>
                    <Button className=" text-white bg-blue-500 hover:bg-blue-600 text-sm normal-case p-2" type="submit">Sign in</Button>
                    <div className="flex justify-center space-x-1">
                        <div>
                            <span>or </span>
                            <Link href="/auth/register">
                                <a className="text-blue-500 hover:text-blue-600 " >
                                    signup new account
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </Authform>
    )
}