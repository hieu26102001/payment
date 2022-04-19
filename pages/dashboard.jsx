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

    const { ApiKey, SecretKey } = UseKey()
    const [APIKEY, setAPIKEY] = useState()
    const [Secret, setSecretKey] = useState()
    useEffect(() => {
        (async function () {
            const token = jsCookie.get("access_token")
            // if (!token) {
            //     var destination = "/auth/login"
            //     window.location.href = destination
            // }
        })()
    }, [])

    useEffect(() => {
        (async function () {
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


    return (
        <Layout>
            <div className='max-w-[1600px] mx-auto px-5 pt-20'>
                <div className='md:flex md:space-x-4'>
                    <div className='lg:w-1/6 md:w-1/3 bg-white p-2 h-max'>
                        <QRCode Api={APIKEY} Secret={Secret} />
                    </div>

                    <div className="lg:w-5/6 md:w-2/3 w-full p-2 bg-white my-4 md:my-0 relative">
                        <Table />
                    </div>
                </div>
            </div>
        </Layout>
    )
}