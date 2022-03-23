import {
  Checkbox, FormControl, FormControlLabel, MenuItem, TextField, RadioGroup, Radio, Dialog, FormLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as EmailValidator from "email-validator";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputPayment from "../components/Invoice/InputPayment";
import Box from "../components/partials/Box";
import AccordionPayment from "../components/Invoice/AccordionPayment";
import BillingSummary from "../components/Invoice/BillingSummary";
import { useRef, useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Responsive from "../components/Responsive";
import Network from "../components/Popup/Network";
const coinData = [
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

const payMethodList = [
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
const validEmail = (email) => {
  if (!email || email.trim() === "")
    return { error: true, helperText: "Vui lòng nhập đầy đủ thông tin" };
  else if (EmailValidator.validate(email))
    return {
      error: false,
      helperText: " ",
      iconValid: <CheckCircleIcon color="info" fontSize="small" />,
    };
  else
    return { error: true, helperText: "Sai Email" };

};
const validInput = (text) => {
  if (!text || text.trim() === "")
    return { error: true, helperText: "Vui lòng nhập đầy đủ thông tin" };
  else return { error: false, helperText: " " };
};
const validPhone = (phone) => {
  let re = /^\d{10}$/;
  if (!phone || phone.trim() === "")
    return { error: true, helperText: "Vui lòng nhập đầy đủ thông tin" };
  else if (!phone.match(re))
    return { error: true, helperText: "Sai định dạng số điện thoại" };
  else return { error: false, helperText: " " };
};

export default function Invoice() {
  const size = useWindowSize();

  const [payMethod, setPayMethod] = useState(payMethodList[0].value);
  const [coinUnit, setCoinUnit] = useState();
  const [payCoin, setPayCoin] = useState(coinData[0]);
  const [openNetwork, setOpenNetwork] = useState(false)
  const [openPayMethod, setOpenPayMethod] = useState(false)
  const handleOpenDialog = (setOpen) => {
    setOpen(true)
  }
  const handleCloseDialog = (setOpen) => {
    setOpen(false)
  }

  console.log(payCoin);
  // useEffect(() => {
  //   setPayCoin(coinData.find((c) => c.unit === coinUnit));
  // }, [coinUnit]);
  useEffect(() => {
    size.width >= 768 ? setOpenPayMethod(true) : null
    console.log(openPayMethod)
  }, [size.width])
  return (
    <section className="py-9 md:px-2">
      <div className="flex flex-col md:grid md:grid-cols-5 gap-5 md:gap-11 m-auto max-w-[1600px]">
        <div className="md:col-span-3 flex flex-col gap-5">
          <Responsive
            Computer={<Box label="contact name" className="p-5" />}
            Mobile={<AccordionPayment label="contact name" ></AccordionPayment>}
            sizeWindow={size}
          >
            <div className="mt-8" >
              <form action="">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputPayment label="First Name" Validate={validInput} />
                  <InputPayment label="Last Name" Validate={validInput} />
                </div>
                <InputPayment label="Email Address" Validate={validEmail} />
                <InputPayment label="Street Address" Validate={validInput} />
                <div className="grid md:grid-cols-2 gap-4">
                  <InputPayment label="State/Province" Validate={validInput} selectInput={["Viet Nam", "Japan", "Korea"]} />
                  <InputPayment label="City" Validate={validInput} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <InputPayment label="Zip/Postal Code" Validate={validInput} type="number" />
                  <InputPayment label="Phone" Validate={validPhone} type="number" />
                </div>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Additional Request (Optional)"
                />
              </form>
            </div>
          </Responsive>
          {/* SELECT NETWORK */}
          <div>
            <Box>
              <AccordionPayment
                label="select network"
                subtext="Binance Chain"
              >
                <Network />
              </AccordionPayment>
            </Box>
          </div>
          {/* <Dialog open={size.width >= 768 ? openNetwork : false}  >
            <Network/>
            <button onClick={() => handleCloseDialog(setOpenNetwork)} >cancel</button>
          </Dialog> */}
          <div>
            <Responsive
              Computer={<Box label="payment method" className="p-5 flex flex-col gap-7" />}
              Mobile={<AccordionPayment label="payment method" controller={setOpenPayMethod} />}
              sizeWindow={size}
            >
              <FormControl fullWidth >
                <RadioGroup
                  onChange={(e) => setPayMethod(e.target.value)}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={!payMethod && payMethodList[0].value}
                  name="radio-buttons-group"
                  style={{ display: "flex", flexDirection: "column", gap: 30 }}
                >
                  {payMethodList.map((item) => (
                    <div className={`${item.value === "paypal" ? "border-2 relative" : null} ${payMethod === item.value ? " bg-[rgba(22,96,207,0.1)]" : null} border relative py-4 px-3  rounded`} >
                      <FormControlLabel
                        // style={{alignItems: item.value === "paypal" ? "start" : "center", display: "flex" }}
                        value={item.value}
                        control={<Radio style={{ padding: "0px 9px" }} />}
                        className={`${item.content?"py-1":"py-4"} pl-4 flex flex-row-reverse mr-0 items-center justify-between`}
                        label={
                          <div className="flex justify-between items-center gap-5" >
                            {item.icon?
                            <img className="w-7" src={item.icon} ></img>: 
                            <img className="w-7" src={payCoin.icon} ></img>}
                            <div>
                              <div className="font-medium text-lg">{item.label}</div>
                              <div className="hidden md:inline text-[#4F4F4F]" >{item.content}</div>
                            </div>
                          </div>}
                        checked={payMethod && payMethod === item.value}
                        disableTypography
                      />
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              {payMethod === "crypto" && openPayMethod && (
                // <Box className="p-5">
                  <RadioGroup
                    fullWidth
                    // onChange={(e) => setCoinUnit(e.target.value)}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {coinData.map((coin) => (
                      // <FormLabel
                      //   value={coin.unit}
                      //   control={<Radio />}
                      //   label={
                          <div className={`${payCoin && payCoin.unit === coin.unit?"border-[#2F88FF]":"border-[#DCDFE6]"} cursor-pointer flex gap-2 items-center border rounded p-4 `}
                              //  onClick={()=>handleSetCoin(coin)}
                              onClick={()=>setPayCoin(coin)}
                          >
                            <img src={coin.icon} className="inline" />
                            <span className="text-[#606266]" >{coin.text}</span>
                          </div>
                        // }
                      // checked={payCoin && payCoin.unit === coin.unit}
                      // />
                    ))}
                  </RadioGroup>
                // </Box>
              )}
            </Responsive>
          </div>


        </div>
        <div className="md:col-span-2 flex flex-col gap-5">
          <Box >
            <AccordionPayment label="order review" subtext="3 products" />
          </Box>
          <Box className="md:py-0 py-3" >
            <AccordionPayment label="discount codes" />
          </Box>
          {/* <AccordionPayment label="billing summary"> */}
          <BillingSummary />
          {/* </AccordionPayment> */}
          {payCoin && payMethod === "crypto" && (
            <Box className="p-5 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={payCoin.icon} className="inline" />
                <span className="uppercase font-semibold">{payCoin.unit}</span>
              </div>
              <span className="font-semibold">{payCoin.price}</span>
            </Box>
          )}
        </div>
      </div>
    </section>
  );
}
