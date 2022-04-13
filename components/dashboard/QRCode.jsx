import { TextField, InputAdornment, InputLabel } from "@mui/material"
import fetcher from "../../lib/fetcher"
import { API_URL } from "../../url"
import jsCookie from "js-cookie"
import copy from "clipboard-copy";
import  UseKey  from '../../hooks/use-key'
import { useState, useEffect } from "react";
export default function QRCode({ Api= "" , Secret = ""} ) {
 
    return (
        <div >
            <div className="flex justify-between text-xl font-medium">
                <div>Dashboard</div>
            </div>
            <div className="grid justify-items-center">
                <img src="/Icon/QR.svg" />
                <div className='text-xs py-3'>Scan to get address</div>
            </div>
            <div className="my-4 mb-5">
                <InputLabel shrink className="px-2">API Key</InputLabel>
                <TextField
                    disabled
                    fullWidth
                    defaultValue={Api}
                    value={Api}
                    id="API Key"
                    focused
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <button onClick={() => {
                                    copy(Api)
                                }}
                                >
                                    <img src="/Icon/copy.svg" />
                                </button>
                            </InputAdornment>
                        )
                    }}
                />

            </div>
            <div className="my-4 mb-5">
                <InputLabel shrink className="px-2">Secret Key</InputLabel>
                <TextField
                    disabled
                    fullWidth
                    defaultValue={Secret}
                    value={Secret}
                    id="Secret Key"
                    type="password"
                    focused
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <button onClick={() => {
                                    copy(Secret)
                                }}
                                    nested>
                                    <img src="/Icon/copy.svg" />
                                </button>
                            </InputAdornment>)
                    }}

                />
            </div>
        </div>
    )
}