import { InvoiceHistory } from "../../data/Invoice-history";
import { useState } from "react";
import Pagination from "../Pagination";

export default function Table() {

    const [currentPage, setcurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = InvoiceHistory.slice(0).reverse();
    const posts = currentPosts.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setcurrentPage(pageNumber);
    console.log(posts)
    
    return (
        <div className="w-full h-full">
            <div className="flex justify-between text-xl font-medium">Invoice History</div>
            <div className="flex rounded border w-min border-gray-400 my-2 ">
                <input type="text" className="px-4 py-2 h-8" placeholder="Search..." />
            </div>
            <table className="table-fixed w-full p-2 mb-9">
                <thead className="text-left text-xs font-medium text-gray-500 bg-[rgba(242,246,252,1)]">
                    <tr className="border-b-2 border-gray-300">
                        <th scope="col" className="px-4 py-3 tracking-wider">ID</th>
                        <th scope="col" className="px-4 py-3 tracking-wider lg:table-cell hidden">Date create</th>
                        <th scope="col" className="px-4 py-3 tracking-wider lg:table-cell hidden">End time</th>
                        <th scope="col" className="px-4 py-3 tracking-wider">Amount</th>
                        <th scope="col" className="px-4 py-3 tracking-wider">Wallet</th>
                        <th scope="col" className="px-4 py-3 tracking-wider lg:table-cell hidden">Action</th>
                    </tr>
                </thead>
                <tbody className="text-left text-xs font-medium text-gray-500  bg-white">
                    {posts.map((item) => {

                        return (
                            <tr className="border-b-2  border-gray-300">
                                <td className="px-4 py-3 tracking-wider">{item.id}</td>
                                <td className="px-4 py-3 tracking-wider lg:table-cell hidden">{item.Datecreate}</td>
                                <td className="px-4 py-3 tracking-wider lg:table-cell hidden">{item.Endtime}</td>
                                <td className="px-4 py-3 tracking-wider truncate">{item.Amount}</td>
                                <td className="px-4 py-3 tracking-wider truncate">{item.Wallet}</td>
                                <td className="px-4 py-3 tracking-wider text-xs space-x-2 lg:table-cell hidden">
                                    <button className="text-blue-500">Refresh</button>
                                    <button className="text-blue-500">Withdraw</button>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
            <div className="absolute bottom-1 right-0 text-md flex">
                <Pagination
                    postPerPage={postsPerPage}
                    totalPosts={InvoiceHistory.length}
                    paginate={paginate}
                />
            </div>
        </div>

    )
}