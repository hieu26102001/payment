import { useRecoilValue } from "recoil";
import { cartState } from "./cartState";
import { useState } from "react";
export default function CartInFo() {

    const cart = useRecoilValue(cartState)
    const [quantity , setquantity] = useState(0)
    const handleChange = (quantity)=> {
        setquantity()
    }
    return (
        <div> 
            <h2> Card Info:</h2>
            {
                cart.map(item => {
                    return (
                        <div>
                            <li key={item.id}> { item.product.title} - {item.product.price}: {item.quantity} </li>
                            <button onClick = {() => setquantity(quantity + 1)}> + </button>
                            </div>
                            

                    )
                })

            }

        </div>
        
        )
}