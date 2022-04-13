import { BiCart } from "react-icons/bi";
import { useRecoilState} from "recoil";
import { cartState, addToCart } from "../hooks/cartState";
import { useEffect, useState } from "react";
import useWindowSize from "./../hooks/useWindowSize";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
export default function CardProduct({ title, price, image, decription ,item }) {
  const [cart ,setCart ] = useRecoilState(cartState)
  const handleAddtoCart = (product) => {
    const newCart = addToCart(cart , product);
    setCart(newCart);
  }
  const size = useWindowSize()
  const [textSize,setTextSize] = useState("xs:text-2xl md:text-[20px]")
  const [styleContent,setStyleContent] = useState("")
  const [sizeBtn,setSizeBtn] = useState("rounded-md px-8 py-2")
  useEffect(()=>{
    if(size.width <=640 ){
      setTextSize("xs:text-base  md:text-[18px]")
      setStyleContent("absolute md:top-1 md:w-[440px] w-[220px]")
      setSizeBtn("rounded-full py-1 px-1")
    }
    else{
      setTextSize("md:text-[20px]")
      setStyleContent("")
      setSizeBtn("rounded-md px-8 py-2")
    }
  },[size.width])

  return (
    <div className="bg-[#F2F6FC] px-2 md:py-3 justify-center md:block flex">
      <div>
        <img
          className=" justify-center md:w-[300px] md:h-[224px] w-[136px] h-[131px] "
          src={image}
        />
      </div>
      <div className="md:ml-0 ml-4">
        <h3 className= {`font-Roboto mt-4 ml-3 font-bold text-[#4F4F4F] ${textSize}` }>
          {" "}
          {title}
        </h3>
        <p className="font-Roboto text-base text-[#606266] mt-2">
          {decription}
        </p>
        <div className="md:block flex justify-between">
          <h3 className="text-[#2F88FF] text-2xl ml-3 mt-4 ">${price}</h3>
          <div className="flex justify-center">
            <button 
            onClick = {() => handleAddtoCart(item)}
             className={`bg-[#2F88FF] text-white flex text-base mt-8 mb-6 ${sizeBtn}`}>
              {" "}
              <h1 className="text-white text-base md:block hidden">
                Add 1 to basket
              </h1>{" "}
              <ShoppingCartSharpIcon className="text-xl px-10 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
