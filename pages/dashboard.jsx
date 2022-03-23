import Table from '../components/dashboard/Table'
import Layout from '../components/partials/layout'
import QRcode from "../components/Popup/QRCode"
import { TextField, InputAdornment } from '@mui/material'

export default function Dashboard() {
    return (
        <Layout>
            <div className='max-w-[1600px] mx-auto px-5 pt-20'>
                <div className='flex space-x-4'>
                    <div className='w-1/6'>
                        <div className="flex justify-between text-xl font-medium">
                            <div>Dashboard</div>
                        </div>
                        <div className="grid justify-items-center">
                            <img src="/Icon/QR.svg" />
                            <div className='text-xs py-3'>Scan to get address</div>
                        </div>
                        <div className="my-2">
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
                        <div className="my-2">
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
                    <div className="w-5/6">
                        <Table />
                    </div>
                </div>
            </div>
        </Layout>
    )
}