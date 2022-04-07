import { InvoiceHistory } from "../../data/Invoice-history";


export default function Table() {
    const page = InvoiceHistory.length
    return (
        <table className="table-fixed w-full p-2">
            <thead className="text-left text-xs font-medium text-gray-500 bg-[rgba(242,246,252,1)]">
                <tr className="border-b-2 border-gray-300">
                    <th scope="col" className="px-4 py-3 tracking-wider">ID</th>
                    <th scope="col" className="px-4 py-3 tracking-wider">Date create</th>
                    <th scope="col" className="px-4 py-3 tracking-wider">End time</th>
                    <th scope="col" className="px-4 py-3 tracking-wider">Amount</th>
                    <th scope="col" className="px-4 py-3 tracking-wider">Action</th>
                    <th scope="col" className="px-4 py-3 tracking-wider">Wallet</th>
                </tr>
            </thead>
            <tbody className="text-left text-xs font-medium text-gray-500  bg-white">
                {InvoiceHistory.map((item) => {

                    return (
                        <tr className="border-b-2  border-gray-300">
                            <td className="px-4 py-3 tracking-wider">{item.id}</td>
                            <td className="px-4 py-3 tracking-wider">{item.Datecreate}</td>
                            <td className="px-4 py-3 tracking-wider">{item.Endtime}</td>
                            <td className="px-4 py-3 tracking-wider">{item.Amount}</td>
                            <td className="px-4 py-3 tracking-wider">{item.Wallet}</td>
                            <td className="px-4 py-3 tracking-wider text-xs space-x-2 flex">
                                <button className="text-blue-500">Refresh</button>
                                <button className="text-blue-500">Withdraw</button>
                            </td>
                        </tr>)
                })}
            </tbody>
        </table>
    )
}