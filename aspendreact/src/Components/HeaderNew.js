import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/assets/Logo.svg";
import { Link } from "react-router-dom";
import ResourceMenu from '../Components/ResourceMenu/index';

const HeaderNew = () => {

    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className="w-full h-[50px] px-[20px] lg:px-[100px] flex items-center justify-between">
                <Link to="/Collections"><img src={logo} alt="" className="w-[122px] min-w-[122px] h-9"></img></Link>
                <div className="flex gap-10">
                    <Link to="/marketplace" className="ml-10 text-white hidden md:flex justify-center items-center">
                        MARKETPLACE
                    </Link>
                    <Link to="#" className="ml-10 text-white hidden md:flex justify-center items-center">
                        STATS
                    </Link>
                    <Link to="#" className="flex items-center">
                        <ResourceMenu button={
                            <div className="ml-10 text-white hidden md:flex justify-center items-center">
                                RESOURCE
                                <MdOutlineKeyboardArrowDown className="text-white text-2xl" />
                            </div>
                        } />
                    </Link>
                    <button className="py-[16px] px-[30px] bg-transparent outline-none border-2 border-solid border-white hidden lg:flex">
                        Connect Wallet
                    </button>
                    <button className="text-black text-2xl p-2 font-bold block lg:hidden" onClick={() => setVisible(true)}><AiOutlineMenu className="text-white text-3xl" /></button>
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
                        <button className="h-10 py3 px-[19px] bg-[#fe6c19] border-0 outline-none flex items-center justify-start">
                            Connect Wallet
                        </button>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default HeaderNew;
