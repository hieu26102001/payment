import Authform from "../../components/auth/Auth-form";
import InputPayment from "../../components/Invoice/InputPayment";
import Authlayout from "../../components/partials/auth-layout";
import LoginInput from "../../components/auth/Input/login";
import {useRouter} from "next/router"

export default function Login(){

    return(
        <Authlayout>
           <Authform 
           label="Sign in" 
           title="Welcome back! Log In with your Email."
           page="/"
           > 
            <LoginInput/>
           </Authform>
        </Authlayout>

    )
}