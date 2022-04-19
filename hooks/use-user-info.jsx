import jsCookie from 'js-cookie';
import fetcher from "../lib/fetcher";
import Router from 'next/router'
import jwt_decode from "jwt-decode";
import { API_URL } from '../url';
export default function useUserInfo() {
    const checkToken = async () => {
        const token = await jsCookie.get('access_token');
        if(!token) return false;
        const user_info = jwt_decode(token);
        var date = new Date().getTime();
        date = Math.round(date / 1000);
        if(date >= user_info['exp']) {
            jsCookie.remove('access_token');
            jsCookie.remove('active_token');
            await Router.push('/auth/login')
            return false;
        }
        return true;
    }
    const UserInfos = async ( t= "" ) => {
        const token = t.length > 0 ? t : await jsCookie.get('access_token');
        if(!token) return null;
        const { result, error, mes } = await fetcher(`${API_URL}/user`, 'POST', {
            token: token
        })
        if(error != 0) {
            jsCookie.remove('access_token');
            jsCookie.remove('active_token');
            await Router.push('/auth/login')
            return null;
        }
        return result;
    }
    const ApiKey = async () => {
        const token = jsCookie.get("access_token")
        const { result, error, mes } = await fetcher(`${API_URL}/getApi`, "POST", {
            token: token
        })
    }
    return { UserInfos, checkToken, getApiKey}
}
