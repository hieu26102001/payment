import Layout from "../components/partials/layout";
import CardProduct from "../element/Card";
import { product } from "../data/globals";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useRecoilValue, useRecoilState } from "recoil";
import { productListState } from "../hooks/productState";
import { cartState, addToCart } from "../hooks/cartState";
import { BiCart } from "react-icons/bi";
import CartInFo from "../hooks/CardInfo";

export default function Product() {
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddtoCart = (product) => {
  const newCart = addToCart(cart, product);
  setCart(newCart);
 
  };
  const productlist = useRecoilValue(productListState);
  const [posts, setPosts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productlist.slice(indexOfFirstPost, indexOfLastPost);
  // change page
  console.log(cart);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  return (
    <Layout>
      <h1> </h1>
      <div className="bg-white md:px-9 mt-32 pt-4 pb-5 md:mx-4">
        <h2 className="text-2xl text-[#4F4F4F] font-Roboto">Products</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 px-9 mt-8 pt-4 pb-5 md:mx-5 ">
          {currentPosts.map((item) => {
            return (
              <div key={item.id}>
                <CardProduct
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  decription={item.decription}
                ></CardProduct>
                <button
                  onClick = {() => handleAddtoCart(item)}
                  className="bg-[#2F88FF] hover:bg-blue-800 text-white md:px-9 md:py-3 md:rounded-md rounded-full  py-1 px-1 flex text-base mt-8"
                >
                  {" "}
                  <h1 className="text-white text-base md:block hidden">
                    Add 1 to basket
                  </h1>{" "}
                  <BiCart className="text-xl px-10 ml-2" />
                </button>
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
