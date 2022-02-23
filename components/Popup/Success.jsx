import Popup from "../partials/PopupLayout";

export default function Success(){
    return(
        <Popup>
            <div className="justify-items-center grid">
                <img  src="/Icon/Success.png"/>
                <h3>Payment Successful</h3>
                <div>

                </div>
                <button className="bg-[#2F88FF] text-white">Back to home</button>
            </div>
        </Popup>
    )
}