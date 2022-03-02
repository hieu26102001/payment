import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  createTheme,
  FormControlLabel,
  Link,
  TextField,
  ThemeProvider,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import clsx from "clsx";
import Box from "./Box";

export default function BillingDetail() {
  const Info = ({ header, value, unit, className }) => {
    return (
      <div className={clsx("flex justify-between ", className)}>
        <span>{header}</span>
        <span>
          {unit}
          {value}
        </span>
      </div>
    );
  };

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
            // position: "absolute",
            top:0,
            right: 0,
            color: "black",
          },
          root: {
            padding: 0,
            minHeight: 0,
            alignItems:"start",
            "&.Mui-expanded": {
              minHeight: 10,
            }
          },
          content: {
            margin: 0,
            "&.Mui-expanded": {
              margin: 0,
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  });

  return (
    <Box className="p-5 divide-y" >
      <ThemeProvider theme={theme}>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <div>
              <div className="capitalize text-black font-semibold pb-5">billing summary</div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-5 flex flex-col gap-3 ">
              <Info
                className="text-[#4F4F4F]"
                header="Subtotal"
                value={3720.27}
                unit="$"
              />
              <Info
                className="text-[#4F4F4F]"
                header="Discount"
                value={749.99}
                unit="$"
              />
              <Info
                className="text-[#4F4F4F]"
                header="Shipping"
                value={0.0}
                unit="$"
              />
              <Info
                className="text-[#4F4F4F]"
                header="Tax"
                value={228.72}
                unit="$"
              />
            </div>
          </AccordionDetails>
          
        </Accordion>
      </ThemeProvider>
      <div className="py-5 flex flex-col gap-7 ">
        <Info
          className="text-black font-bold mb-1"
          header="Total"
          value={3439.0}
          unit="$"
        />
        <TextField
          multiline
          maxRows={5}
          fullWidth
          label="Order Comment"
          InputLabelProps={{ shrink: true }}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <p>
              <span>Please check to acknowledge our </span>
              <Link underline="hover"
                onClick={(e) => {
                  e.preventDefault();
                  alert("link clicked!");
                }}
              >
                Privacy & Terms Policy
              </Link>
            </p>
          }
        />
      </div>
    </Box>
  );
}
