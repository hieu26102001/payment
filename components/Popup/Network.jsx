import Popup from "../partials/PopupLayout"

const Fee = () => (
<div className="grid justify-items-end">
    <div>Network Fee 0.0005 BNB</div>
    <div className="text-gray-400 text-xs">~ $0.292315</div>
</div>)
export default function Network() {
    return (
        <Popup>
                <div className="">
                <div className="text-xl mb-6 font-semibold">Select network</div>
                <p className="text-gray-400 mb-8">
                    Ensure the network matches the addresses network entered to avoid withdrawal losses
                </p>
                </div>
                <form class="flex flex-col">
                    <label className="flex items-center border-2 border-gray-300 p-2 my-1">
                        <input type="radio" id="BEP2" name="drone" value="BEP2"
                        />
                        <div className="flex justify-between w-full py-1 px-3">
                            <div>
                                <label for="BEP2">BEP2</label>
                                <div className="text-gray-400 text-xs">Binace Chain (BNB)</div>
                            </div>
                            <Fee/>
                        </div>
                    </label>
                    <label className="flex items-center border-2 border-gray-300 p-2 my-1">
                        <input type="radio" id="BEP20(BSC)" name="drone" value="BEP20(BSC)" />
                        <div className="flex justify-between w-full py-1 px-3">
                            <div >
                                <label for="BEP20(BSC)">BEP20(BSC)</label>
                                <div className="text-gray-400 text-xs">Binace Smart Chain (BNB)</div>
                            </div>
                            <Fee/>
                        </div>
                    </label>
                </form>
        </Popup>
    )
}