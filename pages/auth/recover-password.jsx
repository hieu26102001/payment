import Authform from "../../components/auth/Auth-form";
import RecoverPassword from "../../components/auth/Input/recorver-password";
import Authlayout from "../../components/partials/auth-layout";


export default function Recover() {

    return (
        <Authlayout>
            <Authform
            label="Recover your password"
            title=""
            >
                <RecoverPassword/>
            </Authform>
        </Authlayout>
    )
}