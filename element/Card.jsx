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
  const [sizeBtn,setSizeBtn] = useState("rounded-md")
  const [sizeImg , setImage] = useState("w-[300px] h-224px")
  useEffect(()=>{
    if(size.width <=640 ){
      setTextSize("xs:text-base  md:text-[18px] ml-4")
      setStyleContent("ml-3")
      setSizeBtn("rounded-full py-2 px-2 mb-4")
      setImage("w-[136px] h-[131px]")
    }
    else{
      setTextSize("md:text-[20px]")
      setStyleContent("")
      setSizeBtn("rounded-md px-8 py-5 mb-5")
      setImage("w-[300px] h-224px")
    }
  },[size.width])

  return (
    <div className="bg-[#F2F6FC] pt-2 py-3 justify-center md:block flex">
      <div className = "justify-center flex">
        <img
          className= {` ${setImage} mb `}
          src={image}
        />
      </div>
      <div className="">
        <h3 className= {`font-Roboto mt-4 ml-6 font-bold text-[#4F4F4F] ${textSize} ml-4` }>
          {" "}
          {title}
        </h3>
        <p className="font-Roboto text-base text-[#606266] mt-2 ml-4">
          {decription}
        </p>
        <div className="md:block flex justify-between">
          <h3 className="text-[#2F88FF] text-2xl ml-4 mt-4 ">${price}</h3>
          <div className="flex justify-center text-center">
            <button 
            onClick = {() => handleAddtoCart(item)}
             className={`bg-[#2F88FF] text-white text-center font- flex text-base mt-8 hover:bg-blue-800  ${sizeBtn}`}>
              {" "}
              <h1 className="text-white text-base md:block hidden mr-2">
                Add 1 to basket
              </h1>{" "}
              <ShoppingCartSharpIcon className="text-xl px-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
