import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdPlayArrow } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineGithub } from "react-icons/ai";
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
import banner from "../images/assets/header-banner.jpg";
import footerIcon from "../images/assets/footer-icon.svg";
import american_revolution from "../images/assets/american_revolution.png";
import french_revolution from "../images/assets/french_revolution.png";
import russian_revolution from "../images/assets/russian_revolution.png";

const LandingPage  = () => {

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
      <div className="home-container w-screen min-h-screen text-sm font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
        <div className="flex pr-[138px] pl-[100px] h-20 justify-between bg-[#1a1a20]">
            <div className="flex items-center">
                <Link to="/Collections"><img src={logo} className="w-[105px] h-[30px] mr-[10px]" alt="logo"></img></Link>
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
            </div>
          <div className="flex items-center">
            <button className="h-10 py3 px-[19px] bg-[#fe6c19] border-0 outline-none flex items-center justify-start">Connect Wallet</button>
          </div>
        </div>
        <div className="w-full h-[700px] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center banner" style={{backgroundImage: banner}}>
            <div className="text-[70px] px-[189px] font-medium leading-[85px] text-center">Discover, collect, and sell extraordinary NFT Collection</div>
            <div className="mt-9 mx-auto flex items-center justify-center cursor-pointer">
                <div className="flex items-center justify-center w-[70px] h-[70px] border-2 border-solid border-white box-border rounded-full">
                    <MdPlayArrow className="text-[#5ce1e6] text-4xl" />
                </div>
                <div className="text-xl font-normal ml-[26px]">Lunching Review Aspen</div>
            </div>
        </div>
        <div className="relative bg-[#1a1a20] py-[70px] px-[100px] mb-[120px]">
            <div className="text-5xl font-bold mb-10">UPCOMING COLLECTION DROPS</div>
            <div className="w-full relative">
                <div className="flex items-center justify-center w-[70px] h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer absolute left-[-35px] top-[calc(50%-35px)]">
                    <BsArrowLeft className="text-white text-2xl" />
                </div>
                <div className="flex items-center justify-center w-[70px] h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer absolute right-[-35px] top-[calc(50%-35px)]">
                    <BsArrowRight className="text-white text-2xl" />
                </div>
                <div className="w-full flex gap-[35px]">
                    <div className="p-4 w-1/3 border-[6px] border-solid border-[#333333]">
                        <Link to="/collectables/tokens/1"><img src={american_revolution} className="w-full mb-9" alt=""></img></Link>
                        <div className="text-lg font-bold text-center mb-10">American Revolution</div>
                        <div className="flex items-center justify-between px-[30px]">
                            <span className="text-[#5c5c5c] text-sm font-bold">Left Bid: 600 ETH</span>
                            <span className="font-bold text-sm">$19,38,000.00</span>
                        </div>
                        <div className="flex items-center justify-between px-[30px]">
                            <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center h-[50px]">PLACE A BID</button>
                            <span className="text-sm font-bold tracking-[4px]">BID HISTORY</span>
                        </div>
                    </div>
                    <div className="p-4 w-1/3 border-[6px] border-solid border-[#333333]">
                        <Link to="/collectables/tokens/1"><img src={french_revolution} className="w-full mb-9" alt=""></img></Link>
                        <div className="text-lg font-bold text-center mb-10">French Revolution</div>
                        <div className="flex items-center justify-between px-[30px]">
                            <span className="text-[#5c5c5c] text-sm font-bold">Left Bid: 600 ETH</span>
                            <span className="font-bold text-sm">$19,38,000.00</span>
                        </div>
                        <div className="flex items-center justify-between px-[30px]">
                            <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center h-[50px]">PLACE A BID</button>
                            <span className="text-sm font-bold tracking-[4px]">BID HISTORY</span>
                        </div>
                    </div>
                    <div className="p-4 w-1/3 border-[6px] border-solid border-[#333333]">
                        <Link to="/collectables/tokens/1"><img src={russian_revolution} className="w-full mb-9" alt=""></img></Link>
                        <div className="text-lg font-bold text-center mb-10">Russian Revolution</div>
                        <div className="flex items-center justify-between px-[30px]">
                            <span className="text-[#5c5c5c] text-sm font-bold">Left Bid: 600 ETH</span>
                            <span className="font-bold text-sm">$19,38,000.00</span>
                        </div>
                        <div className="flex items-center justify-between px-[30px]">
                            <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center h-[50px]">PLACE A BID</button>
                            <span className="text-sm font-bold tracking-[4px]">BID HISTORY</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src={accent2} alt="" className="absolute left-8 bottom-[-42px] w-[86px] h-[84px]"></img>
        </div>
        <div className="section-2 relative px-[100px]">
            <button className="py-3 px-[19px] bg-none border border-solid border-white text-base text-white outline-none flex items-center justify-center h-[50px] absolute top-[5px] right-[100px]">Browse All</button>
            <div className="text-5xl font-bold mb-4">MORBI TORTOUR TURPIS,<br /> FAUCIBUS LOBORTIS NISLET</div>
            <div className="opacity-70 text-base font-normal mb-10">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper<br /> vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
            <div className="flex items-center mb-[30px] gap-[30px]">
                <div className="relative bg-no-repeat bg-right-top bg-cover h-[429px] w-[67.5%] collection-big">
                    <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center btn-26 absolute top-10 left-[53px]">GET AWESOME RARE ITEMS!</button>
                    <div className="absolute text-left top-[219px] left-12 text-[32px] font-medium max-w-[calc(100%-380px)]">Morbi tortor turpis, faucibus lobortis nisl et</div>
                    <div className="absolute text-left top-[315px] left-12 font-normal text-base opacity-70 max-w-[calc(100%-380px)]">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio</div>
                    <img src={bigPack} alt="" className="w-[316px] h-[calc(100%-66px)] absolute top-[37px] right-6"></img>
                </div>
                <div className="collection-small relative bg-no-repeat bg-right-top bg-cover h-[429px] w-[32.5%] flex flex-col items-center px-[22px]">
                    <img src={smallPack} alt="" className="w-[186px] h-64 mt-10 mx-auto"></img>
                    <div className="font-normal text-center text-2xl max-w-full mb-[6px]">Morbi tortor turpis, faucibus</div>
                    <div className="w-full text-center text-base font-thin opacity-70">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum</div>
                </div>
            </div>
            <div className="flex items-center mb-[113px] gap-[30px]">
                <div className="collection-small relative bg-no-repeat bg-right-top bg-cover h-[429px] w-[32.5%] flex flex-col items-center px-[22px]">
                    <img src={smallPack2} alt="" className="w-[186px] h-64 mt-10 mx-auto"></img>
                    <div className="font-normal text-center text-2xl max-w-full mb-[6px]">Morbi tortor turpis, faucibus</div>
                    <div className="w-full text-center text-base font-thin opacity-70">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum    </div>
                </div>
                <div className="relative bg-no-repeat bg-right-top bg-cover h-[429px] w-[67.5%] collection-big">
                    <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center btn-26 absolute top-10 left-[53px]">GET AWESOME RARE ITEMS!</button>
                    <div className="absolute text-left top-[219px] left-12 text-[32px] font-medium max-w-[calc(100%-380px)]">Morbi tortor turpis, faucibus lobortis nisl et</div>
                    <div className="absolute text-left top-[315px] left-12 font-normal text-base opacity-70 max-w-[calc(100%-380px)]">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio</div>
                    <img src={bigPack2} alt="" className="w-[316px] h-[calc(100%-66px)] absolute top-[37px] right-6"></img>
                </div>
            </div>
        </div>
        <div className="section-3 flex gap-[136px] md:gap-40 px-[100px] mb-[150px]">
            <div className="relative mt-3 ml-[29px]">
                <img src={arrow1} className="absolute left-[54px] w-[95px] h-[27px]" alt=""></img>
                <img src={arrow2} className="absolute bottom-[6px] w-[25px] h-[87.5px] right-[-12.5px]" alt=""></img>
                <img src={text1} className="absolute w-[29px] h-[149px left-0 bottom-[169px]" alt=""></img>
                <img src={text2} className="absolute w-[60px] h-[213px] bottom-10 left-[-30px]" alt=""></img>
                <img src={bigPack} className="w-[316px] h-[363px] m-[91px]" alt=""></img>
            </div>
            <div className="max-w-[47.67%]">
                <div className="w-full text-5xl font-bold mt-3 mb-[16px] tracking-[2px] leading-[1.2]">MORBI TORTOUR TUR FAUCIBUS LOBORTIS</div>
                <div className="w-full text-base font-normal opacity-70 mb-12">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
                <div className="text-5xl font-medium w-full text-left mb-[96px]">$17.000,00</div>
                <div className="flex items-center justify-start mb-9">
                    <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center h-[50px] mr-10">PLACE A BID</button>
                    <span className="">BID HISTORY</span>
                </div>
                <div className="w-full text-base font-normal opacity-70 mb-12">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id.</div>
            </div>
        </div>
        <div className="section-4 w-full mb-[150px]">
            <div className="py-[5px] px-[100px] flex items-center mb-[111px]">
                <div className="text-5xl font-bold mr-[42px]">ROADMAP</div>
                <div className="flex-grow leading-[1.8] text-base font-normal opacity-70">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
                <div className="flex ml-[142px] items-center gap-7">
                    <div className="flex items-center justify-center w-[70px] h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer">
                        <BsArrowLeft className="text-white text-2xl" />
                    </div>
                    <div className="flex items-center justify-center w-[70px] h-[70px] border-2 border-solid border-white box-border rounded-full cursor-pointer">
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
            <div className="items flex px-[100px] gap-[30px] overflow-x-scroll">
                {roadMaps.map((roadMap, index) => (
                    <div className="w-1/5 min-w-[364px] h-[350px] bg-[#1a1a20] flex flex-col justify-center items-center p-9" key={index}>
                        <div className="text-[#fe6c19] font-semibold text-2xl mb-7 text-center">{roadMap.title}</div>
                        <div className="text-base font-medium text-center leading-loose">{roadMap.content}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="mb-[150px] flex justify-between px-[100px] font-DmSans">
            <div className="w-2/5 mr-[170px]">
                <div className="text-5xl font-bold leading-[62.5px] mb-5">Who Our<br /> decentralized Is For?</div>
                <div className="font-normal text-lg opacity-70 leading-[30px] mb-[30px]">Nulla diam sapien, elementum non sem sed, dictum hendrerit tellus. Cras ultricies tincidunt augue eget finibus. Sed sapien velit, faucibus dignissim sodales non, mattis id eros. In est dui, accumsan eu.</div>
                <div className="font-normal text-lg opacity-70 leading-[30px] mb-10">Mauris semper tortor ut condimentum hendrerit. Aenean imperdiet lacus nisl, rutrum aliquet tellus volutpat sed. Nulla et sapien quis nulla ultrices efficitur vel et nibh. Vivamus egestas augue in dui elementum interdum. Cras accumsan purus tellus, quis hendrerit enim rutrum eu.</div>
                <div className="font-bold text-base mb-[20px]">Curious about our NFTs?</div>
                <button className="py-3 px-[19px] bg-transparent border-2 border-solid border-white outline-none flex items-center justify-center h-[50px]">Connect Wallet</button>
            </div>
            <div className="faq bg-[#1A1A20] p-10 flex-grow max-w-[calc(60%-170px)]">
                <div className="text-4xl font-bold mb-10">FAQ</div>
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <Disclosure as="div" className="mb-10" key={index}>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full py-[5px] text-lg font-medium text-left text-white rounded-lg outline-none">
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
            <img src={footerIcon} alt="" className="w-[217px] h-[29px] absolute top-[-14px] left-[100px]"></img>
        </div>
        <img src={accent} alt="" className="i-1"></img>
      </div>
    );
};

export default LandingPage;
