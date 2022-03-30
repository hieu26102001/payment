import { Button } from "@mui/material";
import InputPayment from "../../Invoice/InputPayment";
import Link from "next/link"

export default function RecoverPassword() {
    const ValidEmail = (email) => {
        if (!email || email.trim() === "")
            return { error: true, helperText: "Required" };
        else if (EmailValidator.validate(email) === false)
            return { error: true, helperText: "Email required" }
        else return { error: false, helperText: "" }
    }
    return (
        <form>
            <InputPayment label="Email" type="Email" Validate={ValidEmail} />
            <Button className=" text-white bg-blue-500 hover:bg-blue-600 w-full normal-case text-sm p-2">Send password reset link</Button>
            <div className="flex justify-center  py-4">
                <div>
                    <span>or</span>
                    <Link href="/auth/login" >
                        <a className="text-blue-500 hover:text-blue-600 ">
                            login to your account
                        </a>
                    </Link>
                </div>
            </div>
        </form>
    )
}