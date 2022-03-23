import { Accordion, AccordionDetails, AccordionSummary, createTheme, ThemeProvider, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "../partials/Box";
import clsx from "clsx";
import { useEffect, useState } from "react";
export default function AccordionPayment({labelClass, label, subtext, children, expendable = true, controller}) {

  const [open,setOpen] = useState(false)
  // console.log(controller)
  const theme = createTheme({
    components: {
      MuiPaper:{
        styleOverrides:{
          root:{
            boxShadow:"none"
          }
        }
      },
      MuiAccordionSummary: {
        styleOverrides: {
          expandIconWrapper: {
            position: "absolute",
            top: 21,
            right: 20,
            color: "black",
          },
          root: {
            padding: 20,
          },
          content: {
            margin: 0,
            "&.Mui-expanded": {
              margin: 0,
            },
          },
        },
      },
    },
  });
  useEffect(()=>{
    controller? controller(open):null
  },[open])
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Accordion disableGutters expanded={expendable? open: expendable} onChange={()=>{expendable? setOpen(!open):null}} >
          <AccordionSummary 
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={clsx("",labelClass)}
          >
            {/* <Typography> */}
              <div  >
                  <div className="capitalize text-black font-semibold">
                    {label}
                  </div>
                  <p className="text-[#1E2329]">{subtext}</p>
              </div>
            {/* </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            {children}
          </AccordionDetails>
        </Accordion>
        
      </ThemeProvider>
    </div>
  );
}
