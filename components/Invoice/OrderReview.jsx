import { useState } from "react"
import { useRecoilValue } from "recoil"
import { cartState } from "../../states/cartState"
import Box from "../partials/Box"
import CardOrder from "./CardOrder"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
    <Box label="order review" className="p-5 h-[552px] relative" >
      {/* <AccordionPayment label="order review" subtext="3 products" /> */}
      <div className="mt-8 overflow-y-scroll h-[400px]" >
        <ul className="flex flex-col gap-8 " >
          {cart.map((pr, i) =>
            i < expand.index &&
            <CardOrder card={pr} />
          )}
        </ul>
      </div>
      <div className="flex mt-8 absolute sm:static" >
        {cart.length > 2 && <span onClick={handleClick} className="text-[#2F88FF]  mx-auto  cursor-pointer" >{expand.text}</span>}
      </div>
      <button
        className={`bg-[#2F88FF] absolute top-5 right-5 text-white text-center flex items-center rounded text-base py-2 px-6  hover:bg-blue-800 `}>
        <h1 className="text-white text-base md:block hidden mr-2">
        Add product
        </h1>
        <ShoppingCartOutlinedIcon className="text-xl " />
      </button>
    </Box>
  )
}