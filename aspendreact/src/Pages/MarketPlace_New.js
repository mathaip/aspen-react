import React, { useState, useEffect } from "react";
import "../stylesheet/explore.css";
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
import americanRevolutions from '../american-revolution';
import HeaderNew from "../Components/HeaderNew";
import metadata from "../metadata-individual.json";

const Explore = () => {

    const [filteredResult, setFilteredResult] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [moments, setMoments] = useState([]);

    useEffect(() => {
        let tmpMoments = [];
        const data = metadata.ids;
        for (let index = 0; index < 4; index++) {
            let key = getRandomInt(0, data.length);
            if(tmpMoments.find((e) => e.id === key)) {
                index--;
            } else {
                tmpMoments.push(metadata.ids[`${key}`]);
            }
        }
        setMoments(tmpMoments);
    }, [])

    useEffect(() => {
        if(filterText === '') {
            setFilteredResult([]);
        } else {
            let filtered = {};
            Object.keys(americanRevolutions).forEach((key) => {
                let name = americanRevolutions[key].name.toLowerCase();
                if(name.search(filterText.toLowerCase()) !== -1) {
                    filtered[key] = americanRevolutions[key];
                }
            })
            setFilteredResult(filtered);
        }
    }, [ filterText ])

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

  return (
    <div className="w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
        <div className="explore-header h-[470px] relative py-[33px]">
            <HeaderNew />
            <div className="mt-[135px] mb-[15px] md:mb-[38px] text-center text-[40px] md:text-[56px] lg:text-[70px] font-Montserrat font-medium">
                Explore the marketplace
            </div>
            <div className="w-[889px] max-w-[80%] mx-auto h-[40px] md:h-[50px] pl-[13px] flex items-center border-2 border-solid border-[#4A4A4A]">
                <BiSearch className="w-6 min-w-[24px] min-h-[24px] h-6 mr-[16px] md:mr-5" />
                <input
                    className="flex-grow border-none bg-transparent outline-none h-full text-xl text-white"
                    placeholder="Search"
                    onChange={(e) => setFilterText(e.target.value)}
                ></input>
                {Object.keys(filteredResult).length > 0 &&
                    <div className="absolute w-full top-[40px] md:top-[50px] left-0 max-h-[200px] overflow-y-scroll ">
                        {Object.keys(filteredResult).map((key) => (
                            <Link to={`/collectables/tokens/${key}`} key={key}>
                                <div className="w-full py-2 pl-[13px] text-white no-underline bg-[#ffffff1f] hover:bg-[#ffffff48] cursor-pointer">
                                    {filteredResult[key].name}
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </div>
        <div className="w-full bg-[#1A1A20] px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[40px] lg:py-[65px]">
            <div className="font-medium text-3xl md:text-4xl lg:text-5xl text-center mb-10">What are you looking for</div>
            <div className="w-full flex justify-center flex-wrap">
                <div className="w-full sm:w-[80%] md:w-1/2 lg:w-1/3 mb-[10px]">
                    <Link to="/collectables/tokens/1"><img src={product1} alt="" className="w-full mb-7"></img></Link>
                    <div className="font-semibold text-2xl text-center">Nam at dui vitae eros fauc</div>
                </div>
                <div className="w-full sm:w-[80%] md:w-1/2 lg:w-1/3 mb-[10px]">
                    <Link to="/collectables/tokens/1"><img src={product2} alt="" className="w-full mb-7"></img></Link>
                    <div className="font-semibold text-2xl text-center">Nam at dui vitae eros fauc</div>
                </div>
                <div className="w-full sm:w-[80%] md:w-1/2 lg:w-1/3 mb-[10px]">
                    <Link to="/collectables/tokens/1"><img src={product3} alt="" className="w-full mb-7"></img></Link>
                    <div className="font-semibold text-2xl text-center">Nam at dui vitae eros fauc</div>
                </div>
            </div>
        </div>
        <div className="w-full px-[20px] md:px-[50px] lg:px-[100px] pt-[40px] md:pt-[100px] lg:pt-[150px]">
            <div className="flex flex-col md:flex-row md:items-end items-center justify-between mb-7">
                <div className="font-medium text-3xl md:text-4xl lg:text-5xl mb-[10px] md:mb-0">Hot Moments</div>
                <Link to="/explore" className="font-normal text-md md:text-lg lg:text-xl flex items-center">
                    Exsplore marketplace
                    <FiArrowUpRight className="w-20px h-[9px]" />
                </Link>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[50px] md:mb-[200px]">
                {moments.map((moment, key) => (
                    <div className="w-full bg-[#171717]" key={key}>
                        <Link to={`/collectables/tokens/${moment.id}`}><img src={moment.img} alt="" className="h-[333px] max-w-full w-auto mx-auto"></img></Link>
                        <div className="w-full p-[27px] pb-[19px] border-b border-solid border-gray-600">
                            <div className="w-full mb-[2px] flex justify-between text-[#868686] text-xs">
                                <div>Price</div>
                                <div>Copies</div>
                            </div>
                            <div className="w-full flex justify-between text-[14px]">
                                <div>9.22 €</div>
                                <div>125/499</div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center py-4 text-[#FE6C19] font-bold text-[14px]">
                            PLACE A BID
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full px-[20px] md:px-[50px] lg:px-[100px] mb-[50px] md:mb-[125px]">
            <div className="font-medium text-3xl md:text-4xl lg:text-5xl mb-7 md:mb-0">Vintage Collection</div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product8} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-[14px] mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product9} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-[14px] mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product10} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-[14px] mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product11} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-[14px] mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product12} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-[14px] mb-6">American Revolution</div>
                </div>
                <div className="bg-[#171717] text-center">
                    <Link to="/collectables/tokens/1"><img src={product13} alt="" className="my-9 mx-auto"></img></Link>
                    <div className="w-[30px] h-[5px] bg-white mb-1 mx-auto"></div>
                    <div className="font-bold text-2xl mb-1">Pennsylvania</div>
                    <div className="font-normal text-[14px] mb-6">American Revolution</div>
                </div>
            </div>
        </div>
        <div className="w-full relative">
            <div className="w-full py-[20px] md:py-10 bg-[#141414]">
                <Link to="/Collections"><img src={logo} className="w-[126px] h-[36px] mx-auto mb-[20px] md:mb-10" alt="logo"></img></Link>
                <div className="w-full flex gap-7 justify-center">
                    <SiMinutemailer className="w-5 h-5" />
                    <SiTwitter className="w-5 h-5" />
                    <GrLinkedinOption className="w-5 h-5" />
                    <SiDiscord className="w-5 h-5" />
                    <AiOutlineGithub className="w-5 h-5" />
                </div>
            </div>
            <div className="w-full py-[20px] bg-[#1A1A1A] flex justify-center text-xs md:text-base font-normal text-center opacity-60">
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
