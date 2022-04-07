import Authform from "../../components/auth/Auth-form";
import InputPayment from "../../components/Invoice/InputPayment";
import Authlayout from "../../components/partials/auth-layout";
import LoginForm from "../../components/auth/Form/login";
import {useRouter} from "next/router"

export default function Login(){

    return(
        <Authlayout>
            <LoginForm/>
        </Authlayout>

    )
}