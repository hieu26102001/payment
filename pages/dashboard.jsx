import Table from '../components/dashboard/Table'
import Layout from '../components/partials/layout'
import QRcode from "../components/Popup/QRCode"
import { TextField, InputAdornment } from '@mui/material'
import QRCode from '../components/dashboard/QRCode'

export default function Dashboard() {
    return (
        <Layout>
            <div className='max-w-[1600px] mx-auto px-5 pt-20'>
                <div className='flex space-x-4'>
                    <QRCode/>
                    <div className="w-5/6 bg-white">
                        <Table />
                    </div>
                </div>
            </div>
        </Layout>
    )
}