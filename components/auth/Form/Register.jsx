import { Password } from '@mui/icons-material';
import { Button } from '@mui/material';
import * as EmailValidator from 'email-validator';
import InputPayment from '../../Invoice/InputPayment';
import Link from 'next/link'
import { useState } from 'react';
import jsCookie from 'js-cookie';

export default function RegisterForm() {
    const ValidInput = (text) => {
        if (!text || text.trim() === "")
            return { error: true, helperText: "Required" };
        else return { error: false, helperText: " " };
    }
    const ValidPassword = (text) => {
        if (!text || text.trim() === "")
            return { error: true, helperText: "Required" };
        else return { error: false, helperText: " " };
    }
    const ValidEmail = (email) => {
        if (!email || email.trim() === "")
            return { error: true, helperText: "Required" };
        else if (EmailValidator.validate(email) === false)
            return { error: true, helperText: "Email required" }
        else return { error: false, helperText: "" }
    }
    const ValidNone = (none) => {
        return {
            error: false, helperText: ""
        }
    }

    const [result, setResult] = useState()
    const onSubmit = async (event) => {
        event.preventDefault();
        var _header = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        const body = {
            name: event.currentTarget.name.value,
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
            password_confirmation: event.currentTarget.password_confirmation.value,
            sponsor: event.currentTarget.sponsor.value,
        }
        const cookie = jsCookie.get("access_token")
        console.log(cookie)
        const response = await fetch("https://pay.fmcpay.com/api/register", {
            method: "POST",
            headers:_header,
            body: JSON.stringify(body),
        })
        const data = await response.json()
        console.log(data)
        console.log(response)
    }

    return (
        <form method="POST" onSubmit={onSubmit}>
            <InputPayment name="name" label="Username" type="text" Validate={ValidInput} />
            <InputPayment name="email" label="Email" type="email" Validate={ValidEmail} />
            <InputPayment name="password" label="Password" type="password" Validate={ValidInput} />
            <InputPayment name="password_confirmation" label="Password Confirmation " type="password" Validate={ValidInput} />
            <InputPayment name="sponsor" label="Sponsor" type="text" Validate={ValidNone} />
            <Button className=" text-white bg-blue-500 hover:bg-blue-600 w-full normal-case text-sm p-2"
                type="submit">
                Register Account
            </Button>

            <div className="flex justify-center py-4">
                <div>
                    <span>or </span>
                    <Link href="/auth/login">
                        <a className="text-blue-500 hover:text-blue-600">
                            login to your account
                        </a>
                    </Link>
                </div>
            </div>
        </form>
    )
}
