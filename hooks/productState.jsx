import { atom } from "recoil";
import { product } from "../data/globals"
export const productListState = atom ({
    key: 'productlist' , 
    default: product,

})