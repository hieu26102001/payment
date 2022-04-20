import { useRecoilState } from "recoil"
import { addToCart, cartState, decreaseProduct } from "../../states/cartState"
import FormattedNumber from "../FormattedNumber"
import CloseIcon from '@mui/icons-material/Close';


export default function CardOrder({ card }) {
  const { product, quantity } = card
  const [cart ,setCart ] = useRecoilState(cartState)
  const handleAddtoCart = () => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
    // console.log(cart)
  }

  const decreaseProduct = (product) => {
    let newCart = cart
    newCart = newCart.map(c =>{
        if(c.product.id === product.id){
          if(c.quantity>1)
            return {...c, quantity: c.quantity-1}
        }
        return c
      })
    setCart([...newCart])
  }

  const removeProduct = (product) => {
    let newCart = [...cart]
    newCart.splice(newCart.findIndex(card => card.product.id===product.id) ,1)
    setCart([...newCart])
  }

  return (
    <li>
      <div className="flex gap-4" >
        <img src={product.image} className="w-28 sm:w-[139px] md:w-20 lg:w-[139px] lg:h-[139px]" />
        <div className="flex flex-col lg:gap-5" >
          <div>{product.decription}</div>
          <div className="flex gap-2" >
            <FormattedNumber value={product.newPrice} currency="USD" className="text-[#2F88FF]" options={{ minimumFractionDigits: 2 }} />
            <FormattedNumber value={product.oldPrice} currency="USD" className="text-[#B2BCCA]" options={{ minimumFractionDigits: 2 }} />
          </div>
          <div className="flex gap-7" >
            <button onClick={() =>decreaseProduct(product)} className="w-6 h-6 border border-[#DCDFE6] rounded" >-</button>
            <span>{quantity}</span>
            <button onClick={handleAddtoCart} className="w-6 h-6 border border-[#DCDFE6] rounded" >+</button>
          </div>
        </div>
        <CloseIcon onClick={()=> removeProduct(product)} className="top-5 right-3" />
      </div>
    </li>
  )
}