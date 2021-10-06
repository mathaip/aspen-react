import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdPlayArrow } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { SiMinutemailer, SiTwitter, SiDiscord  } from "react-icons/si";
import { GrLinkedinOption  } from "react-icons/gr";
import { Disclosure } from '@headlessui/react'
import "../stylesheet/landing.css";
import logo from "../images/assets/Logo.svg";
import accent from "../images/assets/accent.svg";
import accent2 from "../images/assets/accent2.svg";
import bigPack from "../images/assets/big-pack.png";
import bigPack2 from "../images/assets/big-pack2.png";
import smallPack from "../images/assets/small-pack.png";
import smallPack2 from "../images/assets/small-pack2.png";
import arrow1 from "../images/assets/arrow1.svg";
import arrow2 from "../images/assets/arrow2.svg";
import text1 from "../images/assets/text1.svg";
import text2 from "../images/assets/text2.svg";
import footerIcon from "../images/assets/footer-icon.svg";
import american_revolution from "../images/assets/american_revolution.png";
import french_revolution from "../images/assets/french_revolution.png";
import russian_revolution from "../images/assets/russian_revolution.png";
import ResourceMenu from "../Components/ResourceMenu";

const LandingPage  = () => {

    const [visible, setVisible] = useState(false);
    const revolutionRef = React.useRef();
    const roadmapRef = React.useRef();
    
        function sideScroll(element,direction,speed,distance,step){
            let scrollAmount = 0;
            var slideTimer = setInterval(function(){
                if(direction === 'left'){
                    console.log(direction)
                    element.scrollLeft -= step;
                } else {
                    element.scrollLeft += step;
                }
                scrollAmount += step;
                if(scrollAmount >= distance){
                    window.clearInterval(slideTimer);
                }
            }, speed);
        }

    let faqs = [
        {
            title: 'Which Wallet Should I connect with?',
            content: 'Right now Aspen Labs only supports the use of the Metamask Browser Extension. You connect your wallet use the "connect wallet" button in the top right hand corner of the page. We recommend you use the Chrome Metamask Browser Extension. For more details you can visit https://metamask.io/',
        },
        {
            title: 'How can I purchase a Historical Pack?',
            content: 'Navigate to https://www.aspenlabs.io/Collections and select the pack collection that is being released at the time. Make sure your wallet is connected and press the buy pack button. If all the packs have been been bought the button will be disabled and Packs Left will be 0. If you successfully purchase a pack you will be redirected to the NFT',
        },
        {
            title: 'What cryptocurrency can I pay in?',
            content: 'Right now the platform only accepts payment in Etheruem. This goes for both the NFT market and the purchasing of packs. The price of packs will be listed in USD and the approximate ethereum value will be released on the day of the pack drop. E.g for the American Revolution Pack drop the price of a single pack will be 150 USD converted into Ethereum on the day of the drop.',
        },
        {
            title: 'How can I offer my historical moment for sale?',
            content: 'The Owner of the NFT can offer their Historical moment for sale by clicking the "offer moment for sale" button. You must enter the minimum bid price for your moment in wei. This is the minimum acceptable bid. E.g If you set the minimum bid price in wei at 1000 wei. Anyone who wants to bid will have to bid at least 1000 wei for their transaction to go through.',
        },
        {
            title: 'How Can I remove my Historical Moment from the Market?',
            content: 'If you have placed your moment for sale on the market you can remove your moment from the market by clicking " Remove From Market " button.',
        },
        {
            title: 'How Can I place a bid on a Historical Moment?',
            content: 'If you would like to place a bid on a moment first look at these three fields to determine if should bid and how much. If For Sale: false. You will not be able to bid on the moment.  If the moment is for sale it will say For Sale: True and it will have a Minimum bid price that you will have to place for your transaction to succeed. If there is a Current Bid set e.g "Current Bid (wei): 1000" , make sure your bid is higher than 1000 Wei. There can only be 1 current bid and it is always the highest bidder in terms of wei.  Note: Always Check those three fields above before you place your bid. When your bid is place the bid amount is taken from your wallet and store in the smart contract',
        },
        {
            title: 'Can I withdraw by Bid?',
            content: 'Yes you can withdraw your bid. There are two types of Withdrawing bids',
        },
        {
            title: 'How Can I accept an Offer for my Bid?',
            content: 'If you want to accept an offer for your bid. Enter the price current bid into the Accept Bid textfield and click "Accept Bid". The current bid amount will be sent your wallet, while the ownership of the Historical Moment will be transferred to the current bidder.',
        },
    ];

    let roadMaps = [
        { title: 'Q2.2021', content: 'release of dCOLLECT historical NFTs'},
        { title: 'Q2.2021', content: 'release of Aspen token via bounty and staking'},
        { title: 'Q3.2021', content: 'Whitepaper 1.0'},
        { title: 'Q3.2021', content: 'Hypersphere testnet'},
        { title: 'Q3.2021', content: 'Hypersphere beta release'},
        { title: 'Q3.2021', content: 'Hypersphere code release and auditing'},
        { title: 'Q4.2021', content: 'Hypersphere alpha release'},
        { title: 'Q1.2022', content: 'Hypersphere additional features'},
        { title: 'Q2.2022', content: 'dLEND research & development'},
        { title: 'Q3.2022', content: 'Research & development of payment application for businesses and customers'},
        { title: 'Q4.2022', content: 'Limited launch of dLEND application'},
        { title: 'Q1.2023', content: 'Launch of payment application for businesses '}
    ]
    return (
      <div className="home-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
        <div className="flex px-[20px] lg:pr-[138px] lg:pl-[100px] h-20 justify-between bg-[#1a1a20]">
            <div className="flex items-center">
                <Link to="/Collections"><img src={logo} className="w-[105px] min-w-[105px] h-[30px] mr-[10px]" alt="logo"></img></Link>
                <Link to="/marketplace" className="ml-10 text-white justify-center items-center hidden md:flex">
                    MARKETPLACE
                </Link>
                <Link to="#" className="ml-10 text-white justify-center items-center hidden md:flex">
                    STATS
                </Link>
                <ResourceMenu button={
                    <div className="ml-10 text-white hidden md:flex justify-center items-center">
                        RESOURCE
                        <MdOutlineKeyboardArrowDown className="text-white text-2xl" />
                    </div>
                } />
            </div>
            <div className="lg:flex items-center hidden">
                <button className="h-10 py3 px-[19px] bg-[#fe6c19] border-0 outline-none flex items-center justify-start">
                    Connect Wallet
                </button>
            </div>
            <button className="text-black text-2xl p-2 font-bold block lg:hidden" onClick={() => setVisible(true)}><AiOutlineMenu className="text-white text-3xl" /></button>
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
                    <button className="h-10 py3 px-[19px] bg-[#fe6c19] border-0 outline-none flex items-center justify-start">
                        Connect Wallet
                    </button>
                </ul>
            </nav>
        </div>
        <div className="w-full h-[500px] lg:h-[600px] xl:h-[700px] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center banner">
            <div className="text-[28px] md:text-[32px] lg:text-[56px] xl:text-[70px] px-[4px] sm:px-[10px] md:px-[16px] lg:px-[90px] xl:px-[189px] leading-[40px] md:leading-[55px] lg:leading-[70px] xl:leading-[85px] font-medium text-center">
                Discover, collect, and sell extraordinary NFT Collection
            </div>
            <div className="mt-[8px] md:mt-[16px] lg:mt-[36px] mx-auto flex items-center justify-center cursor-pointer">
                <div className="flex items-center justify-center w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px] border-2 border-solid border-white box-border rounded-full">
                    <MdPlayArrow className="text-[#5ce1e6] text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
                </div>
                <div className="text-lg lg:text-xl font-normal ml-[12px] md:ml-[18] xl:ml-[26px]">
                    Lunching Review Aspen
                </div>
            </div>
        </div>
        <div className="relative bg-[#1a1a20] py-[50px] md:py-[60px] lg:py-[70px] px-[20px] md:px-[70px] lg:px-[100px] mb-[120px]">
            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10">
                UPCOMING COLLECTION DROPS
            </div>
            <div className="w-full relative">
                <div 
                    className="flex items-center justify-center w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer absolute left-[-20px] lg:left-[-22.5px] xl:left-[-35px] top-[calc(50%-20px)] lg:top-[calc(50%-22.5px)] xl:top-[calc(50%-35px)]"
                    onClick={() => sideScroll(revolutionRef.current,'left',10,300,10)}
                >
                    <BsArrowLeft className="text-white text-xl lg:text-3xl xl:text-4xl" />
                </div>
                <div 
                    className="flex items-center justify-center w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer absolute right-[-20px] lg:right-[-22.5px] xl:right-[-35px] top-[calc(50%-20px)] lg:top-[calc(50%-22.5px)] xl:top-[calc(50%-35px)]"
                    onClick={() => sideScroll(revolutionRef.current,'right',10,300,10)}
                >
                    <BsArrowRight className="text-white text-xl lg:text-3xl xl:text-4xl" />
                </div>
                <div id="revolutions" ref={revolutionRef} className="w-full flex gap-[35px] overflow-x-scroll">
                    <div className="p-[8px] 2xl:p-4 min-w-[370px] w-1/3 border-[6px] border-solid border-[#333333]">
                        <Link to="/AmericanRevolution"><img src={american_revolution} className="w-full mb-[8px] md:mb-9" alt=""></img></Link>
                        <div className="text-lg font-medium md:font-bold text-center mb-[8px] md:mb-10">American Revolution</div>
                        <div className="flex items-center justify-between px-[30px] mb-[16px] md:mb-[29px]">
                            <span className="text-[#5c5c5c] text-xs md:text-sm font-medium md:font-bold">Left Bid: 600 ETH</span>
                            <span className="text-xs md:text-sm font-medium md:font-bold">$19,38,000.00</span>
                        </div>
                        <div className="flex items-center justify-between px-[30px]">
                            <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center text-xs 2xl:text-sm h-[35px] 2xl:h-[50px]">PLACE A BID</button>
                            <span className="text-xs font-medium tracking-[4px]">BID HISTORY</span>
                        </div>
                    </div>
                    <div className="p-[8px] 2xl:p-4 min-w-[370px] w-1/3 border-[6px] border-solid border-[#333333]">
                        <Link to="/FrenchRevolution"><img src={french_revolution} className="w-full mb-[8px] md:mb-9" alt=""></img></Link>
                        <div className="text-lg font-medium md:font-bold text-center mb-[8px] md:mb-10">French Revolution</div>
                        <div className="flex items-center justify-between px-[30px] mb-[16px] md:mb-[29px]">
                            <span className="text-[#5c5c5c] text-xs md:text-sm font-medium md:font-bold">Left Bid: 600 ETH</span>
                            <span className="text-xs md:text-sm font-medium md:font-bold">$19,38,000.00</span>
                        </div>
                        <div className="flex items-center justify-between px-[30px]">
                            <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center text-xs 2xl:text-sm h-[35px] 2xl:h-[50px]">PLACE A BID</button>
                            <span className="text-xs font-medium tracking-[4px]">BID HISTORY</span>
                        </div>
                    </div>
                    <div className="p-[8px] 2xl:p-4 min-w-[370px] w-1/3 border-[6px] border-solid border-[#333333]">
                        <Link to="/RussianRevolution"><img src={russian_revolution} className="w-full mb-[8px] md:mb-9" alt=""></img></Link>
                        <div className="text-lg font-medium md:font-bold text-center mb-[8px] md:mb-10">Russian Revolution</div>
                        <div className="flex items-center justify-between px-[30px] mb-[16px] md:mb-[29px]">
                            <span className="text-[#5c5c5c] text-xs md:text-sm font-medium md:font-bold">Left Bid: 600 ETH</span>
                            <span className="text-xs md:text-sm font-medium md:font-bold">$19,38,000.00</span>
                        </div>
                        <div className="flex items-center justify-between px-[30px]">
                            <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center text-xs 2xl:text-sm h-[35px] 2xl:h-[50px]">PLACE A BID</button>
                            <span className="text-xs font-medium tracking-[4px]">BID HISTORY</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src={accent2} alt="" className="absolute left-2 w  md:left-4 lg:left-6 xl:left-8 w-[84px] bottom-[-24px] h-[48px] md:botton-[-30px] md:h-[60px] lg:bottom-[-36px] lg:h-[72px] xl:bottom-[-42px] xl:h-[84px]"></img>
        </div>
        <div className="section-2 relative px-[20px] md:px-[70px] lg:px-[85px] xl:px-[100px]">
            <div className="text-2xl md:text-[28px] lg:text-4xl xl:text-5xl font-bold mb-10">MORBI TORTOUR TURPIS,<br /> FAUCIBUS LOBORTIS NISLET</div>
            <button className="w-[140px] mb-10 md:mb-0 sm:w-[123px] bg-none border border-solid border-white text-base text-white outline-none flex items-center justify-center h-[50px] sm:absolute top-[5px] right-[100px]">Browse All</button>
            <div className="opacity-70 text-[14px] sm:text-base font-normal mb-10">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper<br /> vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
            <div className="flex flex-col xl:flex-row items-center mb-[30px] gap-[30px]">
                <div className="w-full lg:w-10/12 xl:w-[67.5%] h-full bg-no-repeat bg-right-top bg-cover collection-big flex justify-between items-center pl-[20px] md:pl-[53px] pt-[15px] md:pt-[37px] pr-4 md:pr-6 pb-[20px] md:pb-[29px] flex-col md:flex-row">
                    <div>
                        <button className="w-full md:w-auto mb-[20px] md:mb-[149px] py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center text-[12px] h-[30px]">GET AWESOME RARE ITEMS!</button>
                        <div className="text-left text-2xl md:text-[32px] font-medium max-w-full w-full">Morbi tortor turpis, faucibus lobortis nisl et</div>
                        <div className="text-left font-normal text-base opacity-70 w-full">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio</div>
                    </div>
                    <img src={bigPack} alt="" className="w-[316px] h-[calc(100%-66px)]"></img>
                </div>
                <div className="w-full lg:w-10/12 xl:w-[32.5%] collection-small relative bg-no-repeat bg-right-top bg-cover h-full flex flex-col items-center py-6 md:py-10 px-[15px] md:px-[22px]">
                    <img src={smallPack} alt="" className="w-[186px] h-64 mx-auto mb-[7px]"></img>
                    <div className="font-normal text-center text-2xl md:text-[32px] max-w-full mb-[6px]">Morbi tortor turpis, faucibus</div>
                    <div className="w-full text-center text-base font-thin opacity-70">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum</div>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center mb-[30px] gap-[30px]">
            <div className="w-full lg:w-10/12 xl:w-[67.5%] h-full bg-no-repeat bg-right-top bg-cover collection-big flex justify-between items-center pl-[20px] md:pl-[53px] pt-[15px] md:pt-[37px] pr-4 md:pr-6 pb-[20px] md:pb-[29px] flex-col md:flex-row">
                    <div>
                        <button className="w-full md:w-auto mb-[20px] md:mb-[149px] py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center text-[12px] h-[30px]">GET AWESOME RARE ITEMS!</button>
                        <div className="text-left text-2xl md:text-[32px] font-medium max-w-full w-full">Morbi tortor turpis, faucibus lobortis nisl et</div>
                        <div className="text-left font-normal text-base opacity-70 w-full">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio</div>
                    </div>
                    <img src={bigPack2} alt="" className="w-[316px] h-[calc(100%-66px)]"></img>
                </div>
                <div className="w-full lg:w-10/12 xl:w-[32.5%] collection-small relative bg-no-repeat bg-right-top bg-cover h-full flex flex-col items-center py-6 md:py-10 px-[15px] md:px-[22px]">
                    <img src={smallPack2} alt="" className="w-[186px] h-64 mx-auto mb-[7px]"></img>
                    <div className="font-normal text-center text-2xl md:text-[32px] max-w-full mb-[6px]">Morbi tortor turpis, faucibus</div>
                    <div className="w-full text-center text-base font-thin opacity-70">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum</div>
                </div>
            </div>
        </div>
        <div className="section-3 flex flex-col lg:flex-row gap-[50px] md:gap-[136px] px-[20px]  md:px-[70px] lg:px-[85px] xl:px-[100px] mb-[50px] md:mb-[150px] overflow-x-hidden">
            <div className="collection w-full lg:w-10/12 xl:w-auto relative mt-3 ml-[29px] max-w-full">
                <img src={arrow1} className="absolute left-[54px] w-[95px] h-[27px]" alt=""></img>
                <img src={arrow2} className="absolute bottom-[6px] w-[25px] h-[87.5px] right-[-12.5px]" alt=""></img>
                <img src={text1} className="absolute w-[29px] h-[149px left-0 bottom-[169px]" alt=""></img>
                <img src={text2} className="absolute w-[60px] h-[213px] bottom-10 left-[-30px]" alt=""></img>
                <img src={bigPack} className="w-[316px] h-[363px] my-[91px] mx-auto lg:mx-[91px] max-w-full" alt=""></img>
            </div>
            <div className="w-full lg:w-10/12 xl:w-auto max-w-full lg:max-w-[47.67%]">
                <div className="w-full text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-[16px] tracking-[2px] leading-[1.2]">MORBI TORTOUR TUR FAUCIBUS LOBORTIS</div>
                <div className="w-full text-base font-normal opacity-70 mb-12">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-medium w-full text-left mb-[50px] md:mb-[96px]">$17.000,00</div>
                <div className="flex items-center justify-start mb-9">
                    <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center h-[50px] mr-10">PLACE A BID</button>
                    <span className="">BID HISTORY</span>
                </div>
                <div className="w-full text-base font-normal opacity-70 mb-12">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id.</div>
            </div>
        </div>
        <div className="section-4 w-full mb-[50px] md:mb-[150px]">
            <div className="py-[20px] px-[20px] md:px-[50px] lg:px-[100px] flex flex-col lg:flex-row items-start lg:items-center mb-[50px] md:mb-[111px]">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mr-[42px] mb-[20px]">ROADMAP</div>
                <div className="flex-grow leading-[1.8] text-base font-normal opacity-70 mb-[20px]">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
                <div className="flex ml-[0px] lg:ml-[142px] justify-between items-center gap-7 w-full lg:w-auto">
                    <div 
                        className="flex items-center justify-center w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer"
                        onClick={() => sideScroll(roadmapRef.current,'left',10,400,10)}
                    >
                        <BsArrowLeft className="text-white text-2xl" />
                    </div>
                    <div 
                        className="flex items-center justify-center w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer"
                        onClick={() => sideScroll(roadmapRef.current,'right',10,400,10)}
                    >
                        <BsArrowRight className="text-white text-2xl" />
                    </div>
                </div>
            </div>
            <div className="h-1 bg-[#232323] w-full mb-[56px] flex justify-evenly items-center">
                <div className="bg-[#5ce1e6] rounded-full w-6 h-6 border-4 border-solid border-white"></div>
                <div className="bg-[#5ce1e6] rounded-full w-6 h-6 border-4 border-solid border-white"></div>
                <div className="bg-[#5ce1e6] rounded-full w-6 h-6 border-4 border-solid border-white"></div>
                <div className="bg-[#5ce1e6] rounded-full w-6 h-6 border-4 border-solid border-white"></div>
            </div>
            <div ref={roadmapRef} className="items flex px-[20px] md:px-[50px] lg:px-[100px] gap-[30px] overflow-x-scroll">
                {roadMaps.map((roadMap, index) => (
                    <div className="w-[300px] min-w-[300px] h-[350px] bg-[#1a1a20] flex flex-col justify-center items-center p-9" key={index}>
                        <div className="text-[#fe6c19] font-semibold text-2xl mb-7 text-center">{roadMap.title}</div>
                        <div className="text-base font-medium text-center leading-loose">{roadMap.content}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="mb-[150px] flex flex-col lg:flex-row justify-between px-[20px] md:px-[50px] lg:px-[100px    ] font-DmSans">
            <div className="mr-0 w-full lg:w-2/5 lg:mr-[170px] mb-[100px] lg:mb-0">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[46px] md:leading-[62.5px] mb-5">Who Our<br /> decentralized Is For?</div>
                <div className="font-normal text-base md:text-lg opacity-70 leading-[30px] mb-[30px]">Nulla diam sapien, elementum non sem sed, dictum hendrerit tellus. Cras ultricies tincidunt augue eget finibus. Sed sapien velit, faucibus dignissim sodales non, mattis id eros. In est dui, accumsan eu.</div>
                <div className="font-normal text-base md:text-lg opacity-70 leading-[30px] mb-10">Mauris semper tortor ut condimentum hendrerit. Aenean imperdiet lacus nisl, rutrum aliquet tellus volutpat sed. Nulla et sapien quis nulla ultrices efficitur vel et nibh. Vivamus egestas augue in dui elementum interdum. Cras accumsan purus tellus, quis hendrerit enim rutrum eu.</div>
                <div className="font-bold text-base mb-[20px]">Curious about our NFTs?</div>
                <button className="py-3 px-[19px] bg-transparent border-2 border-solid border-white outline-none flex items-center justify-center h-[50px]">Connect Wallet</button>
            </div>
            <div className="faq bg-[#1A1A20] p-10 flex-grow max-w-full lg:max-w-[calc(60%-170px)]">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">FAQ</div>
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <Disclosure as="div" className="mb-[20px] md:mb-10" key={index}>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full py-[5px] text-base md:text-lg font-medium text-left text-white rounded-lg outline-none focus:outline-none">
                                <span>{faq.title}</span>
                                {open ? (
                                    <AiOutlineMinus className={`w-5 h-5 text-white`}/>
                                ) : (
                                    <AiOutlinePlus className={`w-5 h-5 text-white`}/>
                                )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="pt-[10px] text-base font-normal opacity-70">
                                {faq.content}
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                    ))}
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
        <img src={accent} alt="" className="absolute right-[10px] w-[33px] top-[548px] lg:top-[628px] xl:top-[698px] h-[100px] lg:h-[148px] xl:h-[196px]"></img>
      </div>
    );
};

export default LandingPage;
