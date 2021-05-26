import { useEffect, useState } from "react";
import { connectWallet, createToken } from "../utils/interact";
import "../stylesheet/new-style.css";
import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import { NavLink } from 'react-router-dom';
import product from '../images/american-pack-white-background.png';
import { Button as MuiButton } from '@material-ui/core'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../nft-contract";
import web3 from "../web3";
import { americanRevolutionIDs, collectionName } from "../Collections/American_Revolution"
import {
    useParams,
    useHistory,
    useLocation
} from "react-router-dom";

const NFT_Contract = new web3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS
);

function MarketDetails() {
    const history = useHistory();
    const accounts = web3.eth.getAccounts();

    const [boughtMoment, setBoughtMoment] = useState()
    const [isConnected, setConnectedStatus] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [transactionHash, setTransactionHash] = useState([])

    useEffect(async() => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_accounts" })
                if (accounts.length) {
                    setConnectedStatus(true);
                    setWallet(accounts[0]);
                } else {
                    setConnectedStatus(false);
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            } catch {
                setConnectedStatus(false);
                setStatus(
                    "🦊 Connect to Metamask using the top right button. " +
                    walletAddress
                );
            }
        }
    });

    const connectWalletPressed = async() => {
        const walletResponse = await connectWallet();
        setConnectedStatus(walletResponse.connectedStatus);
        setStatus(walletResponse.status);
        if (isConnected) {
            setWallet(walletAddress);
        }
    };


    async function BuyPack(tokenID, collectionName) {
        const collectionIDs = americanRevolutionIDs;
        const randomID = collectionIDs[Math.floor(Math.random() * collectionIDs.length)];
        const CollectionName = collectionName

        let data = "0x01"
        let nftContract = await new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        await nftContract.methods
            .buyMoment(randomID, CollectionName)
            .send({
                from: walletAddress,
                gas: 2100000
            })
            .then(res => setTransactionHash(res.transactionHash));
        console.log(transactionHash)
    }
    const onclick = () => {


    }
    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };
    const maxHeight = {
        height: "100vh"
    };
    const borderRight = {
        borderRight: "1px solid black"
    }

    return ( <
        section className = "showcase"
        style = { alignTop } >
        <
        SideNav / >
        <
        div className = "main" >
        <
        NavBar / >
        <
        div className = "row mt-4" >
        <
        div className = "col-md-8" >
        <
        p className = "text-center col-12" > From $199 < /p> <
        h1 className = "text-center col-12" > Taiping Rebellion < /h1> <
        div className = "col-12" >
        <
        div className = "row justify-content-center" >
        <
        div className = "col-md-4"
        style = { borderRight } >
        <
        h4 className = "col-12 text-center" > 170 < /h4> <
        p className = "col-12 text-center text-sm" > NFTS < /p> <
        /div> <
        div className = "col-md-4"
        style = { borderRight } >
        <
        h4 className = "col-12 text-center" > 3 rd < /h4> <
        p className = "col-12 text-center text-sm" > Most Deadly Conflict < /p> <
        /div> <
        div className = "col-md-4" >
        <
        h4 className = "col-12 text-center" > 1850 - 1871 < /h4> <
        p className = "col-12 text-center text-sm" > Birth of the Heavenly Kingdom < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "col-md-4"
        style = { maxHeight } >
        <
        img src = { product }
        alt className = "img-fluid" / >
        <
        MuiButton size = "large"
        variant = "contained"
        color = "primary" >
        Buy Pack <
        /MuiButton> <
        /div>

        <
        /div> <
        /div> <
        div >


        <
        /div> <
        /section>

    )
}

export default MarketDetails;