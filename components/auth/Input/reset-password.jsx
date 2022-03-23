import { Button } from "@mui/material";
import InputPayment from "../../Invoice/InputPayment";
import Link from "next/link"

export default function ResetPassword() {
    const ValidInput = (text) => {
        if (!text || text.trim() === "")
            return { error: true, helperText: "Required" };
        else return { error: false, helperText: " " };
    }
    return (
        <div>
            <InputPayment label="Password" type="password" Validate={ValidInput} />
            <InputPayment label="Password Confirm" type="password" Validate={ValidInput} />
            <Button className=" text-white bg-blue-500  hover:bg-blue-600 w-full normal-case text-sm p-2">Verify Update Password</Button>
            <div className="flex justify-center  py-4">
                <div>
                    <span>or </span>
                    <a className="text-blue-500 hover:text-blue-600 " >
                        <Link href="/auth/register"> sign up new account </Link>
                    </a>
                </div>
            </div>
        </div>
    )
}