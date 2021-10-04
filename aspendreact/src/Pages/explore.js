import React from "react";
import "../stylesheet/explore.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { SiMinutemailer, SiTwitter, SiDiscord  } from "react-icons/si";
import { GrLinkedinOption  } from "react-icons/gr";
import logo from "../images/assets/Logo.svg";
import product1 from "../images/assets/product1.png";
import product2 from "../images/assets/product2.png";
import product3 from "../images/assets/product3.png";
import product4 from "../images/assets/product4.png";
import product5 from "../images/assets/product5.png";
import product6 from "../images/assets/product6.png";
import product7 from "../images/assets/product7.png";
import product8 from "../images/assets/product8.png";
import product9 from "../images/assets/product9.png";
import product10 from "../images/assets/product10.png";
import product11 from "../images/assets/product11.png";
import product12 from "../images/assets/product12.png";
import product13 from "../images/assets/product13.png";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="w-screen min-h-screen text-sm font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
        <div className="explore-header h-[470px] relative py-[33px]">
            <div className="w-full h-[50px] px-[100px] flex items-center justify-between">
            <Link to="/Collections"><img src={logo} alt="" className="w-[122px] h-9"></img></Link>
            <div className="flex gap-10">
                <Link to="/explore" className="ml-10 text-white flex justify-center items-center">
                MARKETPLACE
                </Link>
                <Link to="#" className="ml-10 text-white flex justify-center items-center">
                STATS
                </Link>
                <Link to="#" className="ml-10 text-white flex justify-center items-center">
                RESOURCE
                <MdOutlineKeyboardArrowDown className="text-white text-2xl" />
                </Link>
                <button className="py-[16px] px-[30px] bg-transparent outline-none border-2 border-solid border-white">
                Connect Wallet
                </button>
            </div>
            </div>
            <div className="mt-[135px] mb-[38px] text-center text-[70px] font-Montserrat font-medium">
            Explore the marketplace
            </div>
            <div className="w-[889px] mx-auto h-[50px] pl-[13px] flex items-center border-2 border-solid border-[#4A4A4A]">
            <BiSearch className="w-6 h-6 mr-5" />
            <input
                className="flex-grow border-none bg-transparent outline-none h-full text-xl text-white"
                placeholder="Search"
            ></input>
            </div>
        </div>
        <div className="w-full bg-[#1A1A20] px-[100px] pt-[60px] pb-[75px]">
            <div className="font-medium text-5xl text-center mb-10">What are you looking for</div>
            <div className="w-full flex gap-9">
                <div className="w-full">
                    <Link to="/collectables/tokens/1"><img src={product1} alt="" className="w-full mb-7"></img></Link>
                    <div className="font-semibold text-2xl text-center">Nam at dui vitae eros fauc</div>
                </div>
                <div className="w-full">
                    <Link to="/collectables/tokens/1"><img src={product2} alt="" className="w-full mb-7"></img></Link>
                    <div className="font-semibold text-2xl text-center">Nam at dui vitae eros fauc</div>
                </div>
                <div className="w-full">
                    <Link to="/collectables/tokens/1"><img src={product3} alt="" className="w-full mb-7"></img></Link>
                    <div className="font-semibold text-2xl text-center">Nam at dui vitae eros fauc</div>
                </div>
            </div>
        </div>
        <div className="w-full px-[100px] pt-[150px]">
            <div className="flex justify-between items-end mb-7">
                <div className="font-medium text-5xl">Hot Moments</div>
                <div className="font-normal text-xl flex items-center">
                    Eksplore marketplace
                    <FiArrowUpRight className="w-20px h-[9px]" />
                </div>
            </div>
            <div className="w-full flex gap-[30px] mb-[200px]">
                <div className="w-full bg-[#171717]">
                    <Link to="/collectables/tokens/1"><img src={product4} alt="" className="w-full"></img></Link>
                    <div className="w-full p-[27px] pb-[19px] border-b border-solid border-gray-600">
                        <div className="w-full mb-[2px] flex justify-between text-[#868686] text-xs">
                            <div>Price</div>
                            <div>Copies</div>
                        </div>
                        <div className="w-full flex justify-between text-sm">
                            <div>9.22 €</div>
                            <div>125/499</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-4 text-[#FE6C19] font-bold text-sm">
                        PLACE A BID
                    </div>
                </div>
                <div className="w-full bg-[#171717]">
                    <Link to="/collectables/tokens/1"><img src={product5} alt="" className="w-full"></img></Link>
                    <div className="w-full p-[27px] pb-[19px] border-b border-solid border-gray-600">
                        <div className="w-full mb-[2px] flex justify-between text-[#868686] text-xs">
                            <div>Price</div>
                            <div>Copies</div>
                        </div>
                        <div className="w-full flex justify-between text-sm">
                            <div>9.22 €</div>
                            <div>125/499</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-4 text-[#FE6C19] font-bold text-sm">
                        PLACE A BID
                    </div>
                </div>
                <div className="w-full bg-[#171717]">
                    <Link to="/collectables/tokens/1"><img src={product6} alt="" className="w-full"></img></Link>
                    <div className="w-full p-[27px] pb-[19px] border-b border-solid border-gray-600">
                        <div className="w-full mb-[2px] flex justify-between text-[#868686] text-xs">
                            <div>Price</div>
                            <div>Copies</div>
                        </div>
                        <div className="w-full flex justify-between text-sm">
                            <div>9.22 €</div>
                            <div>125/499</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-4 text-[#FE6C19] font-bold text-sm">
                        PLACE A BID
                    </div>
                </div>
                <div className="w-full bg-[#171717]">
                    <Link to="/collectables/tokens/1"><img src={product7} alt="" className="w-full"></img></Link>
                    <div className="w-full p-[27px] pb-[19px] border-b border-solid border-gray-600">
                        <div className="w-full mb-[2px] flex justify-between text-[#868686] text-xs">
                            <div>Price</div>
                            <div>Copies</div>
                        </div>
                        <div className="w-full flex justify-between text-sm">
                            <div>9.22 €</div>
                            <div>125/499</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-4 text-[#FE6C19] font-bold text-sm">
                        PLACE A BID
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full px-[100px] mb-[125px]">
            <div className="font-medium text-5xl mb-7">Hot Moments</div>
            <div className="w-full grid grid-cols-3 gap-[30px]">
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product8} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-sm mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product9} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-sm mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product10} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-sm mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product11} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-sm mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product12} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-sm mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product13} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-sm mb-6">American Revolution</div>
                </div>
            </div>
        </div>
        <div className="w-full relative">
            <div className="w-full py-10 bg-[#141414]">
                <Link to="/Collections"><img src={logo} className="w-[126px] h-[36px] mx-auto mb-10" alt="logo"></img></Link>
                <div className="w-full flex gap-7 justify-center">
                    <SiMinutemailer className="w-5 h-5" />
                    <SiTwitter className="w-5 h-5" />
                    <GrLinkedinOption className="w-5 h-5" />
                    <SiDiscord className="w-5 h-5" />
                    <AiOutlineGithub className="w-5 h-5" />
                </div>
            </div>
            <div className="w-full py-[20px] bg-[#1A1A1A] flex justify-center text-base font-normal opacity-60">
                Copyright © 2021 Aspen. All rights reserved
            </div>
        </div>
    </div>
  );
};

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
// }));

// function Explore() {
//     const nftProducts = [
//         {
//             name: 'American Revolutuion',
//             img: productImg,
//             description: '448 Packs',
//             price: 'USD $149.00',
//             releaseDate: '1 Moment per Pack'
//         },
//         {
//             name: 'French Revolutuion',
//             img: frenchrevolution,
//             description: 'Pack Size TBD',
//             price: 'Price TBD',
//             releaseDate: 'July 2021'
//         },
//         {
//             name: 'Russian Revolutuion',
//             img: RussianRevolution,
//             description: 'Pack Size TBD',
//             price: 'Price TBD',
//             releaseDate: 'August 2021'
//         },
//         {
//             name: 'Philosophers',
//             img: philosophers,
//             description: 'Pack Size TBD',
//             price: 'Price TBD',
//             releaseDate: 'Fall 2021'
//         },
//         {
//             name: 'Taiping Rebellion',
//             img: taiping,
//             description: 'Pack Size TBD',
//             price: 'Price TBD',
//             releaseDate: 'Fall 2021'
//         },
//         {
//             name: 'Demo Product',
//             img: productImg,
//             description: 'Demo Product Description',
//             price: 'USD $4.00',
//             releaseDate: 'Fall 2021'
//         }
//     ];

//     const classes = useStyles();
//     const countPerPage = 6;
//     const [query, setQuery] = React.useState('');
//     const [type, setType] = React.useState('1');
//     const [page, setPage] = React.useState(1);

//     const handleTypeChange = (event) => {
//         setType(event.target.value);
//     };

//     const handleQueryChange = (event) => {
//         setQuery(event.target.value);
//         filteredProducts = [];
//         products = [];
//     };

//     const handlePageChange = (page) => {
//         setPage(page);
//     };

//     var filteredProducts = [];

//     var data = americanRevolutions;

//     if (query != ''){
//         var converted_query = query.toLowerCase();
//         for(var i = 0; i < Object.keys(americanRevolutions).length; i++){
//             var name = americanRevolutions[ i + 1 ].name.toLowerCase();
//             if (name.search(converted_query) != -1){
//                 filteredProducts.push({
//                     ...americanRevolutions[ i + 1 ],
//                     id: i + 1});
//                 // filteredProducts.push(americanRevolutions[ i + 1 ]);
//             }
//         }
//     } else {
//         for(var i = 0; i < Object.keys(americanRevolutions).length; i++){
//             // filteredProducts.push(americanRevolutions[ i + 1 ]);
//             filteredProducts.push({
//                 ...americanRevolutions[ i + 1 ],
//                 id: i + 1
//             });
//         }
//     }

//     var totalCount = Math.ceil(filteredProducts.length / countPerPage);

//     var products = [];

//     var lastIndex = 0;
//     var startIndex = countPerPage * (page - 1)
//     if (totalCount == page)
//         lastIndex = filteredProducts.length;
//     else
//         lastIndex = countPerPage * page
//     products = filteredProducts.slice(startIndex, lastIndex);

//     console.log(totalCount);
//     console.log(page);

//     const alignTop = {
//         alignItems: "start",
//         paddingTop: "60px"
//     };

//     return (
//         <section className="showcase explore" style={alignTop}>
//             <SideNav />
//             <div className="main">
//                 <NavBar />
//                 <div className="row content-row">
//                     <div className="col-lg-9 col-md-7 col-sm-12 col-xs-12 select-type" style={{fontSize: 45}}>
//                         <SearchIcon fontSize="inherit" />
//                         <TextField placeholder="Search" type="search" inputProps={{style: {fontSize: 25}}} className="search-text"
//                             onChange={handleQueryChange}/>
//                     </div>
//                     <div className="col-lg-3 col-md-5 col-sm-12 col-xs-12 select-type">
//                         <Select
//                             value={type}
//                             onChange={handleTypeChange}
//                             displayEmpty
//                             className={classes.selectEmpty}
//                             inputProps={{ 'aria-label': 'Without label' }}
//                             className="select-box" inputProps={{style: {fontSize: 25}}}
//                         >
//                             <MenuItem value={1}>Price (High to Low)</MenuItem>
//                             <MenuItem value={2}>Price (Low to High)</MenuItem>
//                             <MenuItem value={3}>Newest</MenuItem>
//                             <MenuItem value={4}>Oldest</MenuItem>
//                         </Select>
//                     </div>
//                 </div>
//                 <div className="row content-row">
//                     <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 left-sidebar">
//                         <p className="filter-text">FILTER BY</p>
//                         <Accordion>
//                             <AccordionSummary
//                             expandIcon={<ExpandMoreIcon  />}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             >
//                             Collection
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 <FormGroup row>
//                                     <FormControlLabel
//                                         control={
//                                             <Checkbox
//                                                 defaultChecked
//                                                 color="default"
//                                                 inputProps={{ 'aria-label': 'checkbox with default color' }}
//                                             />
//                                         }
//                                         label="American Revolution"
//                                     />
//                                     <FormControlLabel
//                                         control={
//                                             <Checkbox
//                                                 color="default"
//                                                 inputProps={{ 'aria-label': 'checkbox with default color' }}
//                                             />
//                                         }
//                                         label="NFTs"
//                                     />

//                                 </FormGroup>
//                             </AccordionDetails>
//                         </Accordion>

//                     </div>
//                     <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 right-sidebar">
//                         <div className="row product-grid col-12">
//                             {
//                                 products.length > 0 ?
//                                 products.map(product => (
//                                     <ProductItem product={product}/>
//                                 )) : <div className="text-center" style={{width: '100%', paddingTop: '5%'}}><h3 style={{fontWeight: 100}}>No Products</h3></div>
//                             }
//                         </div>
//                         <div className="row col-12">
//                             {
//                                 products.length > 0 ?
//                                 <div className="row content-row">
//                                     <div className="col-md-12">
//                                         <PaginationCustom count={totalCount} page={page} parentCallback={handlePageChange}/>
//                                     </div>
//                                 </div>
//                                 : ''
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

export default Explore;
