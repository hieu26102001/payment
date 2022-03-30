import { TextField,InputAdornment } from "@mui/material"

export default function QRCode() {
    return (
        <div className='w-1/6 bg-white p-2 h-max'>
            <div className="flex justify-between text-xl font-medium">
                <div>Dashboard</div>
            </div>
            <div className="grid justify-items-center">
                <img src="/Icon/QR.svg" />
                <div className='text-xs py-3'>Scan to get address</div>
            </div>
            <div className="my-4">
                <TextField
                    disabled
                    fullWidth
                    label="API Key"
                    defaultValue="e8PCuahTDMmajuriqjQvujMN5N"
                    id="API Key"
                    focused
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <button onClick={() => {
                                    copy("e8PCuahTDMmajuriqjQvujMN5N")
                                }}
                                >
                                    <img src="/Icon/copy.svg" />
                                </button>
                            </InputAdornment>
                        )
                    }}
                />

            </div>
            <div className="my-4">
                <TextField
                    disabled
                    fullWidth
                    label="Secret Key"
                    defaultValue="671hdklanhfjalo20kdbndxjkakI"
                    id="Secret Key"
                    focused
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <button onClick={() => {
                                    copy("671hdklanhfjalo20kdbndxjkakI")
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