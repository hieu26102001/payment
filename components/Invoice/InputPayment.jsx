import {
  createTheme,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function InputPayment({ label, Validate, selectInput = false, children,...props }) {
  const [inputText, setInputText] = useState();
  const [firstRender, setFirstRender] = useState(true);
  const [validInfo, setValidInfo] = useState({ error: false, helperText: " " });

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
          },
        },
      },
    },
  });
  useEffect(() => {
    if (!firstRender) {
      setValidInfo(Validate(inputText));
    }
    setFirstRender(false);

    // console.log(inputText)
  }, [inputText]);

  return (
    <div className="mb-3">
      {
        selectInput ?
          <>
            <InputLabel shrink >{label}</InputLabel>
            <TextField
              size="small"
              select
              // label={label}
              {...props}
              defaultValue={selectInput[0]}
              fullWidth
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setInputText(e.target.value)}
              helperText={validInfo.helperText}
              error={validInfo.error}
            >
              {selectInput.map((item, index) =>
                <MenuItem value={item}>{item}</MenuItem>
              )}
            </TextField>
          </>
          :
          <ThemeProvider theme={theme}>
            <InputLabel shrink >{label}</InputLabel>
            <TextField
              fullWidth
              size="small"
              {...props}
              helperText={validInfo.helperText}
              error={validInfo.error}
              onBlur={(e) => setInputText(e.target.value)}
              // label={label}
              InputLabelProps={{ shrink: true, focused: false }}
              InputProps={{
                endAdornment: !validInfo.error ? (
                  <InputAdornment position="end">
                    {validInfo.iconValid}
                  </InputAdornment>
                ) : null,
              }}
            />
          </ThemeProvider>}
    </div>
  );
}
