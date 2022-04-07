import AccordionPayment from "../Invoice/AccordionPayment"
import Box from "../partials/Box"
import Popup from "../partials/PopupLayout"
import { dataNetwork, NETWORK_STATE } from "../../states/invoice-state"
import { useRecoilState } from "recoil"
const Fee = () => (
    <div className="grid justify-items-end">
        <div>Network Fee 0.0005 BNB</div>
        <div className="text-gray-400 text-xs">~ $0.292315</div>
    </div>)
export default function Network() {
    const [network, setNetwork] = useRecoilState(NETWORK_STATE)
    console.log(network)
    return (

        <form class="flex flex-col mt-8">
            {dataNetwork.map((n, i) =>
                <label key={i} onClick={() => setNetwork(n)} className={`flex items-center border ${n.label===network.label?"border-[#2F88FF]":"border-gray-300"} rounded cursor-pointer  p-2 my-1`}>
                    <input type="radio" id={n.label} name="drone" value={n.label} checked={n.label===network.label}
                    />
                    <div className="flex justify-between w-full py-1 px-3">
                        <div>
                            <label for={n.label}>{n.label}</label>
                            <div className="text-gray-400 text-xs">{n.net}</div>
                        </div>
                        <Fee />
                    </div>
                </label>)}
            {/* <label className="flex items-center border rounded cursor-pointer border-gray-300 p-2 my-1">
                    <input type="radio" id="BEP20(BSC)" name="drone" value="BEP20(BSC)" />
                    <div className="flex justify-between w-full py-1 px-3">
                        <div >
                            <label for="BEP20(BSC)">BEP20(BSC)</label>
                            <div className="text-gray-400 text-xs">Binace Smart Chain (BNB)</div>
                        </div>
                        <Fee />
                    </div>
                </label> */}
        </form>


    )
}