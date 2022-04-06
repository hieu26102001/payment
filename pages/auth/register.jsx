import Authform from "../../components/auth/Auth-form";
import RegisterForm from "../../components/auth/Input/Register";
import Authlayout from "../../components/partials/auth-layout";


export default function Register() {
    
    return (
        <Authlayout>
            <Authform
            label="Signup new account"
            title="Enter your account details and a strong password to secure your account."
            >
                <RegisterForm />
            </Authform>
        </Authlayout>
    )
}