import Popup from "../partials/PopupLayout";
import Button from '@mui/material/Button';
import Link from "next/link";

export default function Success(){
    return(
        <Popup>
            <div className="justify-items-center space-y-2 grid">
                <img  src="/Icon/Success.png"/>
                <div className="text-base">Payment Successful</div>
                <div className="text-2xl">67.49 BCT</div>
                <div className="w-full py-4 ">
                    <table className="w-full mb-2 ">
                        <tbody className="border-8 border-blue-200 bg-blue-200 ">
                            <tr>
                                <td className="">Store</td>
                                <td className="p-1 text-right">Heyo Trip</td>
                            </tr>
                            <tr>
                                <td>Product Name</td>
                                <td className="p-1 text-right ">Ticket</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td className="p-1 text-right ">2021-20-01 12:32</td>
                            </tr>
                            <tr>
                                <td>Payment Method</td> 
                                <td className="p-1 text-right ">Crypto</td>
                            </tr>
                            <tr>
                                <td>Currency</td>
                                <td className="p-1 text-right ">67.49 BTC</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link href="/">
                    <Button variant="contained" className="bg-[#2F88FF] w-full text-white">Back to home</Button>
                    </Link>
                </div>
            </div>
        </Popup>
    )
}