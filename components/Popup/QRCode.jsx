import { Input, TextField, InputAdornment, Button } from "@mui/material";
import PopupLayout from "../partials/PopupLayout";
import copy from "clipboard-copy";
import CountDown from "../../utils/Timecount";
import Popup from "reactjs-popup";
import { XCircleIcon } from "@heroicons/react/outline"

export default function QR() {

    return (
        <PopupLayout >

            <div >
                <div className="flex justify-between text-xl font-medium">
                    <div>BTC Deposit Address</div>
                    <button>
                        <XCircleIcon width={24} />
                    </button>
                </div>
                <div className="grid justify-items-center">
                    <img src="/Icon/QR.svg" />
                    <div>Time remaining: <span>58:31</span></div>
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
                            endAdornment: (
                                <InputAdornment position="end">
                                    <button onClick={() => {
                                        copy("0.012049")
                                    }}
                                    >
                                        <img src="/Icon/copy.svg" />
                                    </button>
                                </InputAdornment>
                            )
                        }}
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
                            endAdornment: (
                                <InputAdornment position="end">
                                    <button onClick={() => {
                                        copy("672hdmakeioqo92gcbusuGhaywhJJkxjd")
                                    }}
                                        nested>
                                        <img src="/Icon/copy.svg" />
                                    </button>
                                </InputAdornment>)
                        }}

                    />
                </div>
                <Button variant="contained" className="bg-[#2F88FF] w-full text-white">Payment</Button>
            </div>
        </PopupLayout>

    )
}