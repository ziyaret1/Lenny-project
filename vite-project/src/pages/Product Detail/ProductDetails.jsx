import RelatedProduct from '../../components/Related Product/RelatedProduct'
import Breadcrumb from '../../layouts/Breadcrumb/Breadcrumb'
import DetailProduct from './Detail Product/DetailProduct'
import DetailMenu from './Details Menu/DetailMenu'
import MerchantInfo from './Merchant Information/MerchantInfo'
import ProductReviews from './Product Reviews/ProductReviews'


const ProductDetails = () => {
  return (
    <div>
        <Breadcrumb/>
        <DetailMenu/>
        <DetailProduct/>
        <MerchantInfo/>
        <ProductReviews/>
        <RelatedProduct/>
    </div>
  );
}

export default ProductDetails


// //! MIU Material
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }


// const ProductDetails = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div>
//         <Breadcrumb/>

//         <Box sx={{ width: '90%', padding: '5%'}}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Detail Product" {...a11yProps(0)} />
//           <Tab label="Merchant" {...a11yProps(1)} />
//           <Tab label="Reviews" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//       <DetailProduct/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//       <MerchantInfo/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//       <ProductReviews/>
//       </CustomTabPanel>
//     </Box>
//     </div>
//   );
//   }

