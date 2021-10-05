import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import "../stylesheet/new-style.css";
import ProductItem from '../Components/Product';
import PaginationCustom from '../Components/Pagination';

import americanRevolutions from '../american-revolution';

import productImg from '../images/american-pack-white-background.png';
import frenchrevolution from '../images/frenchrevolution.png';
import RussianRevolution from '../images/Russian-pack.png';
import philosophers from '../images/philosophers-pack.png';
import taiping from '../images/taiping-rebellion.png';
import logo from "../images/assets/Logo.svg";
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from "react-icons/ai";
import { SiMinutemailer, SiTwitter, SiDiscord  } from "react-icons/si";
import { GrLinkedinOption  } from "react-icons/gr";
import "../stylesheet/landing.css";
import footerIcon from "../images/assets/footer-icon.svg";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

function Explore() {
    const nftProducts = [
        {
            name: 'American Revolutuion',
            img: productImg,
            description: '448 Packs',
            price: 'USD $149.00',
            releaseDate: '1 Moment per Pack'
        },
        {
            name: 'French Revolutuion',
            img: frenchrevolution,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'July 2021'
        },
        {
            name: 'Russian Revolutuion',
            img: RussianRevolution,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'August 2021'
        },
        {
            name: 'Philosophers',
            img: philosophers,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'Fall 2021'
        },
        {
            name: 'Taiping Rebellion',
            img: taiping,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'Fall 2021'
        },
        {
            name: 'Demo Product',
            img: productImg,
            description: 'Demo Product Description',
            price: 'USD $4.00',
            releaseDate: 'Fall 2021'
        }
    ];

    const classes = useStyles();
    const countPerPage = 6;
    const [query, setQuery] = React.useState('');
    const [type, setType] = React.useState('1');
    const [page, setPage] = React.useState(1);
    const [visible, setVisible] = React.useState(false);

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
    var data = americanRevolutions;

    if (query != ''){
        var converted_query = query.toLowerCase();
        for(var i = 0; i < Object.keys(americanRevolutions).length; i++){
            var name = americanRevolutions[ i + 1 ].name.toLowerCase();
            if (name.search(converted_query) != -1){
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

    console.log(totalCount);
    console.log(page);

    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };

    return (
        <div className="detail-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
            <div className="py-[33px]">
                <div className="w-full h-[50px] px-[20px] lg:px-[100px] flex items-center justify-between">
                    <Link to="/Collections"><img src={logo} alt="" className="w-[122px] min-w-[122px] h-9"></img></Link>
                    <div className="flex gap-10">
                        <Link to="/marketplace" className="ml-10 text-white hidden md:flex justify-center items-center">
                            MARKETPLACE
                        </Link>
                        <Link to="#" className="ml-10 text-white hidden md:flex justify-center items-center">
                            STATS
                        </Link>
                        <Link to="#" className="ml-10 text-white hidden md:flex justify-center items-center">
                            RESOURCE
                            <MdOutlineKeyboardArrowDown className="text-white text-2xl" />
                        </Link><button class="py-[16px] px-[30px] bg-transparent outline-none border-2 border-solid border-white hidden lg:flex">Connect Wallet</button>
                        <button className="text-black text-2xl p-2 font-bold block lg:hidden" onClick={() => setVisible(true)}><AiOutlineMenu className="text-white text-3xl" /></button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div hidden={!visible} className={`${visible ? 'bg-gray-300 opacity-25':'opacity-100'} fixed top-0 left-0 h-screen w-screen z-10`} onClick={() => setVisible(false)}></div>
                <nav className={`${visible ? 'translate-x-0':'translate-x-full'} transform transition-all duration-300 ease-out w-64 fixed right-0 overflow-x-scroll bg-gray-700 top-0 h-screen z-10 pl-[20px] pr-[10px]`}>
                    <div className="flex justify-end">
                        <button  className="p-2 text-white text-xl font-bold" onClick={() => setVisible(false)}>&#9747;</button>
                    </div>
                    <h1 className="text-xl font-bold pt-5 text-center">Menu</h1>
                    <ul className="list-none text-white flex flex-col items-center">
                        <Link to="/marketplace" className="text-white flex mb-[16px]">
                            MARKETPLACE
                        </Link>
                        <Link to="#" className="text-white flex mb-[16px]">
                            STATS
                        </Link>
                        <Link to="#" className="text-white flex mb-[16px] items-center">
                            RESOURCE
                            <MdOutlineKeyboardArrowDown className="text-white text-2xl" />
                        </Link>
                        <button className="h-10 py3 px-[19px] bg-[#fe6c19] border-0 outline-none flex items-center justify-start">
                            Connect Wallet
                        </button>
                    </ul>
                </nav>
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