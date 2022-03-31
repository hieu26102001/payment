import Layout from "../components/partials/layout"
import CardProduct from "../element/Card"
import { product } from "../data/globals"
import { useState } from "react";
import Pagination from "../components/Pagination";




export default function Product() {


const [posts , setPosts] = useState([]);
const [currentPage, setcurrentPage] =useState(1);
const [postsPerPage] = useState(12)

// get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = product.slice(indexOfFirstPost , indexOfLastPost);
// change page

const paginate = pageNumber => setcurrentPage(pageNumber);
    return(
        <Layout>
            <div className = "bg-white px-9 mt-32 pt-4 pb-5 mx-5">
                <h2 className = "text-2xl text-[#4F4F4F] font-Roboto">Product</h2>
        <div className = "grid grid-cols-4 gap-5 px-9 mt-32 pt-4 pb-5 mx-5 bor">
            {currentPosts.map((item) => {
                return (
                    <div> 
                        <CardProduct image={item.image} title={item.title} price={item.price} decription = {item.decription} ></CardProduct>   
                    </div>
                )
            } )        
            }
        </div>
        <Pagination postPerPage={postsPerPage} totalPosts={product.length} paginate = {paginate}/>
        </div>
        </Layout>
    )

}