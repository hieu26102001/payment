import jsCookie from "js-cookie";
import Route from "next/router"
import { API_URL } from "../url";
import fetcher from "../lib/fetcher";

export default function useUser(){
    const User = async () => {
        const token = await jsCookie.get("access_token")
        const {result, mes , error} = await fetcher(`${API_URL}/getApi`, "POST",{
            token: token
        })
        if(error == 1) {
            await Router.push('/auth/login')
            jsCookie.remove('access_token');
            jsCookie.remove('active_token');
            return null;
        }
        return result
    }
    return { User }
}