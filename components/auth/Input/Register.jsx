import { Password } from '@mui/icons-material';
import { Button } from '@mui/material';
import * as EmailValidator from 'email-validator';
import InputPayment from '../../Invoice/InputPayment';
import Link from 'next/link'

export default function RegisterInput() {
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


    return (
        <div>
            <InputPayment label="Username" type="text" Validate={ValidInput} />
            <InputPayment label="Email" type="email" Validate={ValidEmail} />
            <InputPayment label="Password" type="password" Validate={ValidInput} />
            <InputPayment label="Password Confirmation " type="password" Validate={ValidInput} />
            <InputPayment label="Sponsor" type="text" Validate={ValidNone} />
            <Button className=" text-white bg-blue-500 hover:bg-blue-600 w-full normal-case text-sm p-2">Register Account</Button>
            <div className="flex justify-center py-4">
                <div>
                    <span>or</span>
                    <a className="text-blue-500 hover:text-blue-600 " >
                        <Link href="/auth/login"> login to your account </Link>
                    </a>
                </div>
            </div>
        </div>
    )
}
