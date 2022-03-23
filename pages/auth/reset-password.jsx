import Authform from "../../components/auth/Auth-form";
import ResetPassword from "../../components/auth/Input/reset-password";
import Authlayout from "../../components/partials/auth-layout";

export default function Reset(){
    return(
        <Authlayout>
            <Authform label="Reset Your Password">
                <ResetPassword/>
            </Authform>
        </Authlayout>
    )
}