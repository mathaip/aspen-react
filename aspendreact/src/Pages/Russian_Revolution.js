import { useEffect, useState } from "react";
import { connectWallet, setApprovalForAll } from "../utils/interact";
import "../stylesheet/new-style.css";
import SideNav from "../Components/SideNav";
import NavBar from "../Components/NavBar";
import { NavLink } from "react-router-dom";
import product from "../images/Russian-pack.png";
import russian_revolution from "../images/assets/russian_revolution.png";
import {
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  FormControl,
} from "@material-ui/core";
import PurchaseIcon from "@material-ui/icons/ShoppingBasketOutlined";

import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../nft-contract";
import currentproviderweb3 from "../currentproviderweb3";
import { americanRevolution } from "../Collections/metadata-individual";
import { useParams, useHistory, useLocation } from "react-router-dom";
import HeaderNew from "../Components/HeaderNew";

const NFT_Contract = new currentproviderweb3.eth.Contract(
  CONTRACT_ABI,
  CONTRACT_ADDRESS
);
function RussianRevolutionPack() {
  const history = useHistory();
  const accounts = currentproviderweb3.eth.getAccounts();

  const [boughtMoment, setBoughtMoment] = useState();
  const [isConnected, setConnectedStatus] = useState(false);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [transactionHash, setTransactionHash] = useState([]);
  const [packsLeft, setPacksLeft] = useState();

  useEffect(async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
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
          "🦊 Connect to Metamask using the top right button. " + walletAddress
        );
      }
    }
  });

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setConnectedStatus(walletResponse.connectedStatus);
    setStatus(walletResponse.status);
    if (isConnected) {
      setWallet(walletAddress);
    }
  };

  var nftContract = new currentproviderweb3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS
  );

  const BuyPack = async (e) => {
    e.preventDefault();
    //const collectionIDs = americanRevolution;
    const CollectionName = "american";
    //const collectionIDObject = collectionIDs[0]
    //var keys = Object.keys(collectionIDObject);
    //const randomID = keys[Math.floor(Math.random() * keys.length)];
    const randomID = 7;
    console.log(randomID);

    await nftContract
      .getPastEvents(
        "PacksLeft",
        {
          filter: {
            myIndexedParam: [20, 23],
            myOtherIndexedParam: "0x123456789...",
          }, // Using an array means OR: e.g. 20 or 23
          fromBlock: 0,
          toBlock: "latest",
        },
        function (error, events) {
          console.log(events);
        }
      )
      .then(function (events) {
        console.log(events); // same results as the optional callback above
      });
    await nftContract.events
      .PacksLeft(
        {
          filter: {
            myIndexedParam: [20, 23],
            myOtherIndexedParam: "0x123456789...",
          }, // Using an array means OR: e.g. 20 or 23
          fromBlock: 0,
        },
        function (error, event) {
          console.log(event);
        }
      )
      .on("connected", function (subscriptionId) {
        console.log(subscriptionId);
      });

    await nftContract.events
      .momentBought({}, function (error, event) {
        console.log(event);
      })
      .on("connected", function (subscriptionId) {
        console.log(subscriptionId);
      })
      .on("data", function (event) {
        console.log(event); // same results as the optional callback above
      });

    await nftContract.methods
      .buyMoment(randomID, CollectionName)
      .send({ from: walletAddress, gas: 2100000, value: 10000000000000000 })
      .then((res) => setPacksLeft(res.events.PacksLeft.returnValues.packCount));

    history.push("/collectables/tokens/" + randomID);

    //keys.pop(randomID)
  };

  const alignTop = {
    alignItems: "start",
    paddingTop: "60px",
  };
  const maxHeight = {
    height: "100vh",
  };
  const borderRight = {
    borderRight: "1px solid white",
  };

  return (
    <div className="detail-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="row mt-4">
        <div className="col-md-8">
          <p className="text-center col-12"> Price TBD </p>
          <h1 className="text-center col-12">Russian Revolution</h1>
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-md-4" style={borderRight}>
                <h4 className="col-12 text-center">
                  <strong>39</strong>
                </h4>
                <p className="col-12 text-center text-sm">Unique NFTS</p>
              </div>
              <div className="col-md-4" style={borderRight}>
                <h4 className="col-12 text-center">1 </h4>
                <p className="col-12 text-center text-sm">Tsar</p>
              </div>
              <div className="col-md-4">
                <h4 className="col-12 text-center">14,000,000 </h4>
                <p className="col-12 text-center text-sm">
                  
                  sq. Mile BattleField
                </p>
              </div>
              <Box m={6} />
              <div>
                <p className="col-12 text-center text-md">
                  Bloody, confusing and wrought with incredible stories, the
                  Russian Revolution created the first communist state on Earth.
                  The Czecho-Slovak legion attempts to fights across the
                  entirety of Russia circumnavigate the globe and get back home.
                  Lenin and Trotsky surrounded in Moscow and St Petersburg fight
                  their way to dominance. The inept Tsar finding a fate all too
                  familiar for deposed autocrats. This is one of the most
                  important moments in 20th century history.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4" style={maxHeight}>
          <img src={russian_revolution} alt className="w-full h-auto" />
          <Box m={4} />

          <Button
            disabled={true}
            variant="outlined"
            onClick={BuyPack}
            size="large"
            className="btn-orange"
            startIcon={<PurchaseIcon />}
          >
            
            Buy Pack
          </Button>

          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RussianRevolutionPack;
