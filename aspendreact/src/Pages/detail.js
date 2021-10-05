import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheet/detail.css";
import { SiMinutemailer, SiTwitter, SiDiscord  } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GrLinkedinOption  } from "react-icons/gr";
import detailProduct from "../images/assets/detail-product.png";
import logo from "../images/assets/Logo.svg";


export const DetailPage = ({match}) => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="detail-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pt-[]">
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
            <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] lg:gap-[136px] xl:gap-40 px-[20px] md:px-[50px] lg:px-[100px] mb-[40px] lg:mb-[60px] xl:mb-[80px]">
                <div className="mt-0 md:mt-3 ml-0 md:ml-[29px]">
                    <div className="bg-[#141414]">
                        <img src={detailProduct} className="w-[500px] h-auto m-auto" alt=""></img>
                    </div>
                </div>
                <div className="max-w-full md:max-w-[47.67%]">
                    <div className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-[10px] md:mb-[16px] tracking-[2px] leading-[1.2] font-Montserrat">MORBI TORTOUR TUR FAUCIBUS LOBORTIS</div>
                    <div className="w-full text-sm md:text-base font-normal opacity-70 mb-[20px] xl:mb-12 font-Montserrat">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-medium w-full text-left mb-10 xl:mb-[96px] font-Montserrat">$17.000,00</div>
                    <div className="flex items-center justify-start mb-[20px] xl:mb-9">
                        <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center h-[50px] mr-10">PLACE A BID</button>
                        <span className="">Share</span>
                    </div>
                    <div className="w-full text-base font-normal opacity-70 mb-[6px] xl:mb-3">139 sold in the past 60 days</div>
                    <div className="w-full text-base font-normal opacity-70 mb-4 xl:mb-12">139 sold in the past 60 days</div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[30px] md:flex-row items-center px-[20px] md:px-[50px] lg:px-[100px] mb-10 md:mb-20">
                <div className="p-4 md:p-6 lg:p-8 bg-[#1A1A20] relative w-full md:w-[500px] h-[160px] lg:h-[200px]">
                    <div className="font-medium text-xl mb-[20px] lg:mb-8">Aspen Earned</div>
                    <div className="font-medium text-[30px] lg:text-[40px]">0</div>
                    <button className="px-5 py-[10px] lg:py-[17px] text-xs md:text-sm bg-[#4A4A4F] absolute right-8 top-[75px] lg:top-[87px]">HARVEST</button>
                </div>
                <div className="p-8 bg-[#1A1A20] relative w-full md:w-[500px] h-[160px] lg:h-[200px]">
                    <div className="font-medium text-xl mb-[20px] lg:mb-8">Star Farming</div>
                    <button className="py-[10px] lg:py-[17px] text-xs md:text-sm bg-[#FE6C19] w-full ">Connect wallet</button>
                </div>
            </div>
            <div className="w-full px-[20px] md:px-[50px] lg:px-[100px] mb-10 md:mb-20 font-Montserrat">
                    <div className="font-medium text-3xl lg:text-4xl xl:text-5xl mb-4 font-Montserrat">Collectible Details</div>
                    <div className="font-normal text-sm md:text-base opacity-70 font-Montserrat">Phasellus bibendum tincidunt varius. Ut volutpat mollis euismod. Suspendisse aliquet dictum venenatis. Vestibulum lectus metus, ultricies at consequat non, fringilla a arcu. Quisque et leo pulvinar erat auctor pretium. Maecenas in est ante. Proin lacus lorem, semper ac sapien vitae, dignissim mollis nunc.</div>
            </div>
            <div className="w-full px-[20px] md:px-[50px] lg:px-[100px] mb-10 md:mb-20 flex flex-col md:flex-row gap-5 font-Montserrat">
                <div className="w-full">
                    <div className="font-medium text-3xl lg:text-4xl xl:text-5xl mb-4 font-Montserrat">Current Market Status</div>
                    <div className="font-normal text-sm md:text-base opacity-70 font-Montserrat">
                        This America is currently owned by address <span className="text-[#FE6C19]">Ronald.koeman</span> <br />
                        This America has not been listed for sale by its owner. <br />
                        There is a bid of 0.40Ξ ($1,175) for this punk from <span className="text-[#FE6C19]">0x1e30b4.</span></div>
                </div>
                <div className="w-full grid grid-cols-3 gap-y-[20px] md:gap-y-[30px] lg:gap-y-[42px] gap-x-[17px] md:gap-x-[67px] lg:gap-x-[87px]" >
                    <div className="">
                        <div className="font-medium text-3xl lg:text-4xl xl:text-5xl">618</div>
                        <div className="font-normal text-sm md:text-base">Edition size</div>
                    </div>
                    <div className="">
                        <div className="font-medium text-3xl lg:text-4xl xl:text-5xl">75</div>
                        <div className="font-normal text-sm md:text-base">Not for sale</div>
                    </div>
                    <div className="">
                        <div className="font-medium text-3xl lg:text-4xl xl:text-5xl">0</div>
                        <div className="font-normal text-sm md:text-base">Burned</div>
                    </div>
                    <div className="">
                        <div className="font-medium text-3xl lg:text-4xl xl:text-5xl">12</div>
                        <div className="font-normal text-sm md:text-base">For sale</div>
                    </div>
                    <div className="">
                        <div className="font-medium text-3xl lg:text-4xl xl:text-5xl">9</div>
                        <div className="font-normal text-sm md:text-base">Hidden in pacaks</div>
                    </div>
                    <div className="">
                        <div className="font-medium text-3xl lg:text-4xl xl:text-5xl">0</div>
                        <div className="font-normal text-sm md:text-base">Unavailable for purchase</div>
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
    )
}

export default DetailPage;