import jsCookie from "js-cookie"
import fetcher from "../lib/fetcher"
import { API_URL } from "../url"
import Route from "next/router"

export default function UseKey(){
    const ApiKey = async (t="") => {
        const token = jsCookie.get("access_token")
        const { result, error, mes } = await fetcher(`${API_URL}/getApi`, "POST", {
            token: token
        })
        
        return result
    }
    const SecretKey = async () => {
        const token = jsCookie.get("access_token")
        const { result, error, mes } = await fetcher(`${API_URL}/getSecret`, "POST", {
            token: token
        })
        return result
    }
    return { ApiKey , SecretKey }
}