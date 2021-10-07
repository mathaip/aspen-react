import React from 'react';
import { 
    MenuItem, 
    Select,
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    FormControlLabel, 
    Checkbox, 
    FormGroup 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BiSearch } from "react-icons/bi";


import logo from "../images/assets/Logo.svg";
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from "react-icons/ai";
import { SiMinutemailer, SiTwitter, SiDiscord  } from "react-icons/si";
import { GrLinkedinOption  } from "react-icons/gr";
import footerIcon from "../images/assets/footer-icon.svg";

import americanRevolutions from '../american-revolution';
import ProductItem from '../Components/Product';
import PaginationCustom from '../Components/Pagination';
import HeaderNew from "../Components/HeaderNew";
import "../stylesheet/landing.css";
import "../stylesheet/new-style.css";

function Explore() {
    const countPerPage = 6;
    const [query, setQuery] = React.useState('');
    const [type, setType] = React.useState('1');
    const [page, setPage] = React.useState(1);

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        filteredProducts = [];
        products = [];
    };

    const handlePageChange = (page) => {
        setPage(page);
    };

    var filteredProducts = [];

    console.log(americanRevolutions);

    if (query !== ''){
        var converted_query = query.toLowerCase();
        for(var i = 0; i < Object.keys(americanRevolutions).length; i++){
            var name = americanRevolutions[ i + 1 ].name.toLowerCase();
            if (name.search(converted_query) !== -1){
                filteredProducts.push({
                    ...americanRevolutions[ i + 1 ],
                    id: i + 1});
                // filteredProducts.push(americanRevolutions[ i + 1 ]);
            }
        }
    } else {
        for(var i = 0; i < Object.keys(americanRevolutions).length; i++){
            // filteredProducts.push(americanRevolutions[ i + 1 ]);
            filteredProducts.push({
                ...americanRevolutions[ i + 1 ],
                id: i + 1
            });
        }
    }

    var totalCount = Math.ceil(filteredProducts.length / countPerPage);

    var products = [];

    var lastIndex = 0;
    var startIndex = countPerPage * (page - 1)
    if (totalCount == page)
        lastIndex = filteredProducts.length;
    else
        lastIndex = countPerPage * page
    products = filteredProducts.slice(startIndex, lastIndex);

    return (
        <div className="detail-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
            <div className="py-[33px]">
                <HeaderNew />
            </div>
            <div className="row content-row">
                <div className="col-lg-9 col-md-7 col-sm-12 col-xs-12 flex items-center border-2 border-solid border-[#4A4A4A]" style={{fontSize: 45}}>
                    <BiSearch className="w-6 min-w-[24px] min-h-[24px] h-6 mr-[16px] md:mr-5" />
                    <input
                        className="flex-grow border-none bg-transparent outline-none h-full text-xl text-white"
                        placeholder="Search"
                        onChange={(e) => handleQueryChange(e)}
                    ></input>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 col-xs-12">
                    <Select
                        value={type}
                        onChange={handleTypeChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className="select-box text-white border-white" 
                    >
                        <MenuItem value={1}>Price (High to Low)</MenuItem>
                        <MenuItem value={2}>Price (Low to High)</MenuItem>
                        <MenuItem value={3}>Newest</MenuItem>
                        <MenuItem value={4}>Oldest</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="row content-row">
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 left-sidebar">
                    <p className="filter-text text-white">FILTER BY</p>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon  />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        Collection
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            defaultChecked
                                            color="default"
                                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                                        />
                                    }
                                    label="American Revolution"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="default"
                                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                                        />
                                    }
                                    label="NFTs"
                                />
                        
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 right-sidebar">
                    <div className="row product-grid col-12">
                        {
                            products.length > 0 ?
                            products.map(product => (
                                <ProductItem product={product}/>
                            )) : <div className="text-center" style={{width: '100%', paddingTop: '5%'}}><h3 style={{fontWeight: 100}}>No Products</h3></div>
                        }
                    </div>
                    <div className="row col-12">
                        {
                            products.length > 0 ?        
                            <div className="row content-row">
                                <div className="col-md-12">
                                    <PaginationCustom count={totalCount} page={page} parentCallback={handlePageChange}/>
                                </div>
                            </div>
                            : ''
                        }
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
                <img src={footerIcon} alt="" className="w-[100px] md:w-[150px] lg:w-[217px] h-[29px] absolute top-[-14px] left-[20px] md:left-[50px] lg:left-[100px]"></img>
            </div>
        </div>
    )
}

export default Explore;