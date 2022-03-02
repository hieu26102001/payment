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
                    <div className="w-full mb-2 ">
                        <div className="border-8 border-blue-200 bg-blue-200 ">
                            <div className="flex justify-between">
                                <div className="">Store</div>
                                <div className="p-1 text-right">Heyo Trip</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Product Name</div>
                                <div className="p-1 text-right ">Ticket</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Date</div>
                                <div className="p-1 text-right ">2021-20-01 12:32</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Payment Method</div> 
                                <div className="p-1 text-right ">Crypto</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Currency</div>
                                <div className="p-1 text-right ">67.49 BTC</div>
                            </div>
                        </div>
                    </div>
                    <Link href="/">
                        <Button variant="contained" className="bg-[#2F88FF] w-full text-white">Back to home</Button>
                    </Link>
                </div>
            </div>
        </Popup>
    )
}