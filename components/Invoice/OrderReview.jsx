import { useState } from "react"
import { useRecoilValue } from "recoil"
import { cartState } from "../../states/cartState"
import Box from "../partials/Box"
import CardOrder from "./CardOrder"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from "next/link"
export default function OrderReview() {
  const [indexCard, setIndexCard] = useState(2)
  const [text, setText] = useState("See more")
  const [expand, setExpand] = useState({ index: 2, text: "See more" })
  const cart = useRecoilValue(cartState)

  const handleClick = () => {
    let p
    expand.index === 2 ?
      p = { index: cart.length, text: "Hide" }
      : p = { index: 2, text: "See more" }
    setExpand(p)
  }

  return (
    <Box label="order review" className={`p-5 ${cart.length>2?"  sm:h-[552px]":null} relative`} >
      {/* <AccordionPayment label="order review" subtext="3 products" /> */}
      <div className={`mt-8 ${expand.index===2?"overflow-hidden ":"overflow-y-scroll sm:h-[400px]"} `} >
        {cart.length>0 && 
        <ul className="flex flex-col gap-8 " >
          {cart.map((pr, i) =>
            i < expand.index &&
            <CardOrder card={pr} />
          )}
        </ul>}
      </div>
      {cart.length > 2 &&
      <div className="flex mt-8 absolute -top-3 right-5 sm:static" >
        <span onClick={handleClick} className="text-[#2F88FF]  mx-auto  cursor-pointer" >{expand.text}</span>
      </div>}
      <Link href="/product" >
        <button
          className={`bg-[#2F88FF] mt-5 sm:mt-0 w-full sm:w-auto sm:absolute top-5 right-5 text-white text-center flex items-center justify-center rounded text-base py-2 px-6  hover:bg-blue-800 `}>
          <h1 className="text-white text-base  mr-2">
          Add product
          </h1>
          <ShoppingCartOutlinedIcon className="text-xl " />
        </button>
      </Link>
    </Box>
  )
}