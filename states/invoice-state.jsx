import { atom } from "recoil";

export const dataNetwork = [
  {
    label:"BEP2",
    net:"Binace Chain (BNB)"
  },
  {
    label:"BEP20(BSC)",
    net:"Binace Smart Chain (BNB)"
  }
] 

export const NETWORK_STATE = atom({
  key:"network",
  default: dataNetwork[0]
})

