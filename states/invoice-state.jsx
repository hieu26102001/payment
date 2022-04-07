import jsCookie from "js-cookie";
import { atom, selector, useResetRecoilState } from "recoil";
//DATA
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

export const coinData = [
  {
    icon: "/Icon/Bitcoin (BTC).svg",
    unit: "BTC",
    text: "Pay using BTC",
    price: 0.005634,
  },
  {
    icon: "/Icon/Ethereum (ETH).svg",
    unit: "ETH",
    text: "Pay using ETH",
    price: 0.005634,
  },
  {
    icon: "/Icon/Fantom (FTM).svg",
    unit: "FTM",
    text: "Pay using FTM",
    price: 0.005634,
  },
  {
    icon: "/Icon/HUSD (HUSD).svg",
    unit: "HUSD",
    text: "Pay using HUSD",
    price: 0.005634,
  },
  {
    icon: "/Icon/ICON (ICX).svg",
    unit: "ICX",
    text: "Pay using ICX",
    price: 0.005634,
  },
  {
    icon: "/Icon/Tether (USDT).svg",
    unit: "USDT",
    text: "Pay using USDT",
    price: 0.005634,
  },
  {
    icon: "/Icon/UMA (UMA).svg",
    unit: "UMA",
    text: "Pay using UMA",
    price: 0.005634,
  },
];

export const payMethodList = [
  {
    value: "paypal",
    label: "PayPal",
    content: 'You will be redirected to the PayPal website after submitting your order',
    icon: "Icon/PayPal0.svg"
  },
  {
    value: "crypto",
    label: "Pay with Crypto",
  },
];

//STATE
export const NETWORK_STATE = atom({
  key:"network/get",
  default: dataNetwork[0]
})

export const COIN_PAYMENT_STATE = atom({
  key: "coinPayment/get",
  default: coinData[0]
})

export const PAYMENT_METHOD_STATE = atom({
  key:"paymentMethod/get",
  default: payMethodList[0].value
})

export const OPEN_LIST_COIN_STATE = selector({
  key: "openListCoin/get",
  get: ({get}) =>{
    const payMethod = get(PAYMENT_METHOD_STATE)
    let openListCoinPayment = payMethod==="crypto"
    return openListCoinPayment 
  }
})

export const CURRENT_ACCESS_TOKEN = atom({
  key:"currentAccessToken/get",
  default: jsCookie.get("access_token")
}) 


