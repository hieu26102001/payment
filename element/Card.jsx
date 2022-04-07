import { BiCart } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { cartState, addToCart } from "../hooks/cartState";
export default function CardProduct({ title, price, image, decription ,props }) {
  // const [cart ,setCart ] = useRecoilValue(cartState)
  // const handleAddtoCart = (product) => {
  //   const newCart = addToCart(cart , product);
  //   setCart(newCart);
  // }

  return (
    <div className="bg-[#F2F6FC] px-2 md:py-3 justify-center md:block flex">
      <div>
        <img
          className=" justify-center md:w-[300px] md:h-[224px] w-[136px] h-[131px] "
          src={image}
        />
      </div>
      <div className="ml-4">
        <h3 className="font-Roboto text-xl mt-4 ml-3 font-medium text-[#4F4F4F]">
          {" "}
          {title}
        </h3>
        <p className="font-Roboto text-base text-[#606266] mt-2">
          {decription}
        </p>
        <div className="flex justify-between">
          <h3 className="text-[#2F88FF] text-2xl ml-3 mt-4">${price}</h3>
          <div className="flex justify-center">
            {/* <button className="bg-[#2F88FF] text-white md:px-9 md:py-3 md:rounded-md rounded-full  py-1 px-1 flex text-base mt-8">
              {" "}
              <h1 className="text-white text-base md:block hidden">
                Add 1 to basket
              </h1>{" "}
              <BiCart className="text-xl px-10 ml-2" />
            </button> */}
            {props}
          </div>
        </div>
      </div>
    </div>
  );
}
