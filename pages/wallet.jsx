import Box from "../components/partials/Box"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import FiatSpot from "../components/Wallet/FiatSpot"
import History from "../components/Wallet/History"
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "../components/partials/layout";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
        // </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#ECF5FF"
          }
        },
      },
    },
  },
});

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <section className="bg-[#F3F5F7] pt-8 pb-20" >
          <Box className="max-w-[1400px] mx-auto pb-10" >
            <Tabs value={value} className="w-full" onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Fiat and Spot" {...a11yProps(0)} className="capitalize" />
              <Tab label="History" {...a11yProps(1)} className="capitalize" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <FiatSpot />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <History />
            </TabPanel>
          </Box>
        </section>
      </ThemeProvider>
    </Layout>
  );
}
