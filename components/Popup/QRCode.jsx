import { Input, TextField,InputAdornment } from "@mui/material";
import Popup from "../partials/PopupLayout";

export default function QR() {
    return (
        <Popup>
            <div className="flex justify-between text-xl font-medium">
                <div>BTC Deposit Address</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="grid justify-items-center">
                <img src="/Icon/QR.svg"/>
                <div>Time remaining: 58:31</div>
            </div>
            <div className="my-2">
                <TextField 
                    disabled 
                    fullWidth 
                    label="BTC amount" 
                    defaultValue="0.012049" 
                    id="BTC amount" 
                    focused 
                    InputProps={{
                    endAdornment:(
                    <InputAdornment position="end">
                        <img src="/Icon/copy.svg"/>
                    </InputAdornment>)}}
                    />
            </div>
            <div className="my-2">
                <TextField 
                    disabled 
                    fullWidth 
                    label="Wallet address" 
                    defaultValue="672hdmakeioqo92gcbusuGhaywhJJkxjd" 
                    id="Wallet address" 
                    focused
                    InputProps={{
                    endAdornment:(
                    <InputAdornment position="end">
                        <img src="/Icon/copy.svg"/>
                    </InputAdornment>)}}

                    />
            </div>
        </Popup>    
    )
}