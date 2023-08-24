import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { fetchCategory } from "../../Api/Api";

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ handleChange, value ,genresData }) {
//   const [genresData, setgenresData] = React.useState([]);

//   const generateGenres = async () => {
//     const data = await fetchCategory();

//     setgenresData(data);
//   };
//   React.useEffect(() => {
//     generateGenres();
//   }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="white" >
          
          <Tab label="All" {...a11yProps(0)}/>
          {
           genresData.map((data,index)=>{
          return(   <Tab label={data.label} {...a11yProps(index+1)} key={data.key}/>)
            })
          }
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
  
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
