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
    // console.log(network)
    return (

        <form class="flex flex-col">
            {dataNetwork.map((network, i) =>
                <label key={i} onClick={() => setNetwork(network)} className="flex items-center border rounded cursor-pointer border-gray-300 p-2 my-1">
                    <input type="radio" id="BEP2" name="drone" value="BEP2"
                    />
                    <div className="flex justify-between w-full py-1 px-3">
                        <div>
                            <label for="BEP2">{network.label}</label>
                            <div className="text-gray-400 text-xs">{network.net}</div>
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