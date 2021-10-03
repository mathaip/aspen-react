import { useEffect, useState } from "react";
import { connectWallet } from "../utils/interact";
import "../stylesheet/new-style.css";
import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import {NavLink} from 'react-router-dom';
import product from '../images/american-pack-white-background.png';
import Web3 from "web3";

import { 
  MenuItem, 
  Select, 
  TextField,
  Button,
  Box, 
  FormControl 
} from '@material-ui/core';
import PurchaseIcon from '@material-ui/icons/ShoppingBasketOutlined';

import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../nft-contract";

import currentproviderweb3 from "../currentproviderweb3";
import {americanRevolution} from "../Collections/metadata-individual"
import {
    useParams,
    useHistory,
    useLocation
  } from "react-router-dom";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTPyKLdhLv1qon3CTWD6io7Ja2Q534ASI",
  authDomain: "aspen-923c0.firebaseapp.com",
  projectId: "aspen-923c0",
  storageBucket: "aspen-923c0.appspot.com",
  messagingSenderId: "280515005163",
  appId: "1:280515005163:web:b0c02760950aa2ea638cae",
  measurementId: "G-JHD61VC7FN"
};

// Initialize Firebase



const NFT_Contract = new currentproviderweb3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS
  );
function AmericanRevolutionPack() {
    const history = useHistory();
    const accounts = currentproviderweb3.eth.getAccounts();
    
    const [boughtMoment, setBoughtMoment] = useState()
    const [isConnected, setConnectedStatus] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [transactionHash, setTransactionHash] = useState([])
    const [packsLeft, setPacksLeft] = useState()
    const [listIdsFromFirebase,setListIdsFromFirebase] = useState([])
    const [disableBuy, setDisableBuy] = useState(false)
    
    useEffect(async () => {
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
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }else {
          firebase.app(); // if already initialized, use that one
        }
        let newcollectionIDs;
        const db = firebase.firestore()
        await db.collection('AmericanRevolutionids').doc('american-ids').get().then((res) => {newcollectionIDs = res.data()})
        var collectionIDs = newcollectionIDs.ids;
        var packCount = collectionIDs.length
        console.log(collectionIDs.length);
        setPacksLeft(packCount)
        if (packsLeft == 0){
          setDisableBuy(true);
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

      var nftContract= new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);


    
     const BuyPack = async (e) => {
        e.preventDefault()
        let newcollectionIDs;
        const db = firebase.firestore()
        await db.collection('AmericanRevolutionids').doc('american-ids').get().then((res) => {newcollectionIDs = res.data()})
        var collectionIDs = newcollectionIDs.ids;
        console.log(collectionIDs.length);



        if(collectionIDs.length > 0){
        //const collectionIDs = americanRevolution;
        const CollectionName = 'american revolution'
        const indexOfCollection = Math.floor(Math.random() * collectionIDs.length);
        const randomID = collectionIDs[indexOfCollection]

        console.log(randomID)


        await nftContract.events.momentBought({
        }, function(error, event){ console.log(event); })
        .on("connected", function(subscriptionId){
          console.log(subscriptionId);
          }).on('data', function(event){
          console.log(event); // same results as the optional callback above
        })

        const owner = "0xAaFfb0079df99299bC578b1806F6E6eF18AF6143"
        
        await nftContract.methods
        .buyMoment(randomID)
        .send({ from: walletAddress, to:CONTRACT_ADDRESS,
        gas:3100000,value: 190000000000000000})
        .on('error', function(error, receipt) { 
          console.log(error,receipt)})
        .on('confirmation', function(confirmationNumber, receipt){
        })
        .on('receipt', function(receipt){
            console.log(receipt);
        });

       let newArr;
       for( var i = 0; i < collectionIDs.length; i++){ 
    
        if ( collectionIDs[i] === randomID) { 
    
        collectionIDs.splice(i, 1); 
        db.collection('AmericanRevolutionids').doc('american-ids').set({ids:collectionIDs})
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        setPacksLeft(collectionIDs)

        }
       }
      




        
      history.push("/collectables/tokens/" + randomID)
        


        }
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
    
    return (
        <section className="showcase" style={alignTop}>
            <SideNav/>
            <div className="main">
                <NavBar/>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <p className="text-center col-12">0.19 BNB Per Pack</p>
                        <h1 className="text-center col-12">American Revolution</h1>
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-md-4" style={borderRight}>
                                    <h4 className="col-12 text-center"><strong>59</strong> </h4>
                                    <p className="col-12 text-center text-sm">Unique NFTS</p>
                                </div>
                                <div className="col-md-4" style={borderRight}>
                                    <h4 className="col-12 text-center">13 </h4>
                                    <p className="col-12 text-center text-sm">Founding Fathers</p>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="col-12 text-center">1776</h4>
                                    <p className="col-12 text-center text-sm">Birth of the American Republic</p>
                                </div>
                                <Box m={6} />
                                <div>
                                <p className="col-12 text-center text-md">The revolution that created the United States of America. Taxes, tea and property rights spurred the founding fathers to engage in a struggle for freedom against the rising empire of Britain. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={maxHeight}>
                        <img src={product} alt className="img-fluid" />
                        <Box m={4} />
                    
                        <Button  variant="outlined" disabled={true} onClick={BuyPack}  size="large" className="btn-orange" startIcon={<PurchaseIcon />}>  Buy Pack</Button>
                        <Box m={4} />

                        <h5><strong>Pack's left: {packsLeft}</strong> </h5>


                      <div>
                        <p>
                        </p>
                      </div>
                  
                        
                    </div>
              
                </div>
            </div>
            <div>
           

            </div>
        </section>
           
    )
}

export default AmericanRevolutionPack;