import { Menu, Transition } from "@headlessui/react";
import { React, Fragment } from "react";
import { Link } from "react-router-dom";
// import { ChevronDownIcon } from '@heroicons/react/solid'

const ResourceMenu = ({ button }) => {
    const pages = [
        { label: "Introduction", route: "/introduction" },
        { label: "Help", route: "/help" },
        { label: "Roadmap", route: "/roadmap" },
        { label: "Disclosures", route: "/disclosure" },
        { label: "FAQS", route: "/faqs" },
    ];

    const protocals = [
        { label: "Tokenomics", route: "/tokenomics" },
        { label: "dCOLLECT", route: "/dcollect" },
    ];

    const additional = [
        { label: "Business Inquires", route: "/business-inquire" },
        { label: "Customer Support", route: "/customer-support" },
        { label: "Upcoming Project", route: "/upcoming-project" },
    ];

    return ( <
        Menu as = "div"
        className = "relative inline-block text-left" >
        <
        Menu.Button > { button } < /Menu.Button> <
        Transition as = { Fragment }
        enter = "transition ease-out duration-100"
        enterFrom = "transform opacity-0 scale-95"
        enterTo = "transform opacity-100 scale-100"
        leave = "transition ease-in duration-75"
        leaveFrom = "transform opacity-100 scale-100"
        leaveTo = "transform opacity-0 scale-95" >
        <
        Menu.Items className = "absolute z-10 right-0 w-56 mt-2 origin-top-right bg-black divide-y divide-gray-500 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
        <
        div className = "px-1 py-1 " > {
            pages.map((page, index) => ( <
                Menu.Item key = { index } > {
                    ({ active }) => ( <
                        Link to = { page.route }
                        className = "text-white w-full px-3 py-2 text-sm" >
                        <
                        div className = "w-full pl-2" > { page.label } <
                        /div> <
                        /Link>
                    )
                } <
                /Menu.Item>
            ))
        } <
        /div> <
        div className = "px-1 py-1 " > {
            protocals.map((page, index) => ( <
                Menu.Item key = { index } > {
                    ({ active }) => ( <
                        Link to = { page.route }
                        className = "text-white w-full px-3 py-2 text-sm" >
                        <
                        div className = "w-full pl-2" > { page.label } <
                        /div> <
                        /Link>
                    )
                } <
                /Menu.Item>
            ))
        } <
        /div> <
        div className = "px-1 py-1 " > {
            additional.map((page, index) => ( <
                Menu.Item key = { index } > {
                    ({ active }) => ( <
                        Link to = { page.route }
                        className = "text-white w-full px-3 py-2 text-sm" >
                        <
                        div className = "w-full pl-2" > { page.label } <
                        /div> <
                        /Link>
                    )
                } <
                /Menu.Item>
            ))
        } <
        /div> <
        /Menu.Items> <
        /Transition> <
        /Menu>
    );
};

export default ResourceMenu;