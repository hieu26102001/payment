import Layout from "../components/partials/layout";
import CardProduct from "../element/Card";
import { product } from "../data/globals";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useRecoilValue, useRecoilState } from "recoil";
import { productListState } from "../states/productState";
import { cartState, addToCart } from "../states/cartState";
//import CartInFo from "../hooks/CardInfo";

export default function Product() {
  const productlist = useRecoilValue(productListState);
  const [posts, setPosts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productlist.slice(indexOfFirstPost, indexOfLastPost);
  // change page
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  return (
    <Layout>
      <h1> </h1>
      <div className="bg-white md:px-9 mt-[72px] pt-4 pb-[108px] md:mx-5">
        <h2 className="text-2xl text-[#4F4F4F] font-Roboto">Products</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1 gap-y-5 gap-x-8 justify-items-center  mt-8 pt-4 pb-9 ">
          {currentPosts.map((item) => {
            return (
              <div key={item.id}>
                <CardProduct
                  image={item.image}
                  title={item.title}
                  price={item.newPrice}
                  decription={item.decription}
                  item={item}
                ></CardProduct>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <AiOutlineLeft
            className="text-[#606266]"
            onClick={() => setcurrentPage(pageNumber - 1)}
          />
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={product.length}
            paginate={paginate}
          />
          <AiOutlineRight className="text-[#606266]" />
        </div>
      </div>
      {/* <h1>Cart Info</h1>
          <CartInFo/> */}
    </Layout>
  );
}
