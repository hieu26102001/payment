import Table from '../components/dashboard/Table'
import Layout from '../components/partials/layout'
import QRcode from "../components/Popup/QRCode"
import { TextField, InputAdornment } from '@mui/material'
import QRCode from '../components/dashboard/QRCode'
import jsCookie from "js-cookie"
import Route from 'next/router'
import fetcher from '../lib/fetcher'
import { API_URL } from '../url'
import useUser from '../hooks/use-user'
import { useEffect, useState } from 'react'
import { stringify } from 'postcss'
import jwt_decode from "jwt-decode";
import useUserInfo from '../hooks/use-user-info'
import getApiKey from '../hooks/use-user-info'
import UseKey from '../hooks/use-key'
// import Route from "next/router"
export default function Dashboard() {

    const { ApiKey , SecretKey } = UseKey()
    const [APIKEY, setAPIKEY] = useState()
    const [Secret, setSecretKey] = useState()
    // console.log(token)
    // const token = jsCookie.get("access_token")
    // if(!token) Route.push("/auth/login") ;

    useEffect(() => {
        (async function ()  {
            const token = jsCookie.get("access_token")
            if (!token) return;
            const data = await ApiKey()
            setAPIKEY(data.apikey)
            // console.log(data)
        })()
    }, [])  
    useEffect(() => {
        (async () => {
            const token = jsCookie.get("access_token")
            if (!token) return;
            const data = await SecretKey()
            setSecretKey(data)
        })()
    }, [])
    console.log(Secret)
    console.log(APIKEY)

    return (
        <Layout>
            <div className='max-w-[1600px] mx-auto px-5 pt-20'>
                <div className='md:flex space-x-4'>
                    <div className='md:w-1/6 bg-white p-2 h-max'>
                     <QRCode Api={APIKEY} Secret={Secret} />
                    </div>

                    <div className="md:w-5/6 bg-white">
                        
                        <Table />
                    </div>
                </div>
            </div>
        </Layout>
    )
}