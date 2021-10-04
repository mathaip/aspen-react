import React from "react";
import "../stylesheet/detail.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import detailProduct from "../images/assets/detail-product.png";
import logo from "../images/assets/Logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { SiMinutemailer, SiTwitter, SiDiscord  } from "react-icons/si";
import { GrLinkedinOption  } from "react-icons/gr";

export const DetailPage = ({match}) => {

    return (
        <div className="detail-container w-screen min-h-screen font-medium bg-black text-white tracking-[1.4px] font-Montserrat pt-[]">
            <div className="py-[33px]">
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
            </div>
            <div className="section-3 flex gap-[136px] md:gap-40 px-[100px] mb-[80px]">
                <div className="relative mt-3 ml-[29px] bg-[#141414]">
                    <img src={detailProduct} className="w-full h-full" alt=""></img>
                </div>
                <div className="max-w-[47.67%]">
                    <div className="w-full text-5xl font-bold mt-3 mb-[16px] tracking-[2px] leading-[1.2] font-Montserrat">MORBI TORTOUR TUR FAUCIBUS LOBORTIS</div>
                    <div className="w-full text-base font-normal opacity-70 mb-12 font-Montserrat">Aenean sollicitudin rutrum justo in molestie. Cras ullamcorper vestibulum erat, sed viverra odio sollicitudin id. Morbi in sapien sed</div>
                    <div className="text-5xl font-medium w-full text-left mb-[96px] font-Montserrat">$17.000,00</div>
                    <div className="flex items-center justify-start mb-9">
                        <button className="py-3 px-[19px] bg-[#fe6c19] hover:bg-[#fc5c00] border-none outline-none flex items-center justify-center h-[50px] mr-10">PLACE A BID</button>
                        <span className="">Share</span>
                    </div>
                    <div className="w-full text-base font-normal opacity-70 mb-3">139 sold in the past 60 days</div>
                    <div className="w-full text-base font-normal opacity-70 mb-12">139 sold in the past 60 days</div>
                </div>
            </div>
            <div className="w-full flex px-[100px] mb-20">
                <div className="p-8 bg-[#1A1A20] relative w-[500px] h-[200px] mr-[30px]">
                    <div className="font-medium text-xl mb-8">Aspen Earned</div>
                    <div className="font-medium text-[40px]">0</div>
                    <button className="px-5 py-[17px] bg-[#4A4A4F] absolute right-8 top-[87px]">HARVEST</button>
                </div>
                <div className="p-8 bg-[#1A1A20] relative w-[500px] h-[200px]">
                    <div className="font-medium text-xl mb-8">Star Farming</div>
                    <button className="py-[17px] bg-[#FE6C19] w-full ">HARVEST</button>
                </div>
            </div>
            <div className="w-full px-[100px] mb-20 font-Montserrat">
                    <div className="font-bold text-5xl mb-4 font-Montserrat">Collectible Details</div>
                    <div className="font-normal text-base opacity-70 font-Montserrat">Phasellus bibendum tincidunt varius. Ut volutpat mollis euismod. Suspendisse aliquet dictum venenatis. Vestibulum lectus metus, ultricies at consequat non, fringilla a arcu. Quisque et leo pulvinar erat auctor pretium. Maecenas in est ante. Proin lacus lorem, semper ac sapien vitae, dignissim mollis nunc.</div>
            </div>
            <div className="w-full px-[100px] mb-20 flex gap-5 font-Montserrat">
                <div className="w-full">
                    <div className="font-bold text-5xl mb-4 font-Montserrat">Current Market Status</div>
                    <div className="font-normal text-base opacity-70 font-Montserrat">
                        This America is currently owned by address <span className="text-[#FE6C19]">Ronald.koeman</span> <br />
                        This America has not been listed for sale by its owner. <br />
                        There is a bid of 0.40Ξ ($1,175) for this punk from <span className="text-[#FE6C19]">0x1e30b4.</span></div>
                </div>
                <div className="w-full grid grid-cols-3 gap-y-[42px] gap-x-[87px]" >
                    <div className="">
                        <div className="font-bold text-5xl">618</div>
                        <div className="font-normal text-base">Edition size</div>
                    </div>
                    <div className="">
                        <div className="font-bold text-5xl">75</div>
                        <div className="font-normal text-base">Not for sale</div>
                    </div>
                    <div className="">
                        <div className="font-bold text-5xl">0</div>
                        <div className="font-normal text-base">Burned</div>
                    </div>
                    <div className="">
                        <div className="font-bold text-5xl">12</div>
                        <div className="font-normal text-base">For sale</div>
                    </div>
                    <div className="">
                        <div className="font-bold text-5xl">9</div>
                        <div className="font-normal text-base">Hidden in pacaks</div>
                    </div>
                    <div className="">
                        <div className="font-bold text-5xl">0</div>
                        <div className="font-normal text-base">Unavailable for purchase</div>
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
    )
}

export default DetailPage;