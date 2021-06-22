import {React, useEffect, useState} from 'react';
import "../stylesheet/new-style.css";

import { makeStyles } from '@material-ui/core/styles';
import { 
    MenuItem, 
    Select, 
    TextField,
    Button,
    Box, 
    FormControl 
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PurchaseIcon from '@material-ui/icons/ShoppingBasketOutlined';

import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import americanRevolutions from '../american-revolution';

import productImage from '../images/american-pack-white-background.png';
import {momentBids, momentsOfferedForSale, offerMomentForSale,withdrawBidForMoment,enterBidForMoment,acceptBidForMoment,momentsNoLongerForSale} from '../utils/interact'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../nft-contract"
import web3 from "../web3";

const nftContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    buttonDisabled: {
        color: theme.palette.grey[900] 
    },
}));

export const DetailPage = ({match}) => {
    const {
        params: { tokenId },
    } = match;

    const tokenid = tokenId.toString();
    const product = americanRevolutions[tokenid];
    const [quantity, setQuantity] = useState('');
    const [ownedBy,setOwnedBy] = useState('');
    const [isForSale, setisForSale] = useState(false);
    const [hasBids, setHasBids] = useState(false);
    const [minPrice,setMinPrice] = useState()
    const [disableOwnerButtons, setDisabaleOwnerButtons] = useState()
    const [isConnected, setConnectedStatus] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [disableBidsButtons, setDisableBidsButtons] = useState()
    const [acceptBidMinPrice,setAcceptBidMinPrice ] = useState();
    const [enterBidValue, setEnterBidValue] = useState();
    const [offerMinPrice, setOfferMinPrice] = useState();
    const [currentBid, setCurrentBid] = useState();
    const [currentBidder, setCurrentBidder] = useState();




    useEffect(async() => {

        await nftContract.methods
            .momentIDToAddress(tokenId)
            .call({
                from: window.ethereum.selectedAddress,
                gas: 2100000
            })
            .then(res => setOwnedBy(res));
        await nftContract.methods
            .momentBids(tokenId)
            .call({
                from: window.ethereum.selectedAddress,
                gas: 2100000
            })
            .then(res => setHasBids(res.hasBid));
        await nftContract.methods
            .momentBids(tokenId)
            .call({
                from: window.ethereum.selectedAddress,
                gas: 2100000
            })
            .then(res => setCurrentBid(res.value));
        await nftContract.methods
            .momentBids(tokenId)
            .call({
                from: window.ethereum.selectedAddress,
                gas: 2100000
            })
            .then(res => setCurrentBidder(res.bidder));
        await nftContract.methods
            .momentsOfferedForSale(tokenId)
            .call({
                from: window.ethereum.selectedAddress,
                gas: 2100000
            })
            .then(res => setisForSale(res.isForSale));
        await nftContract.methods
            .momentsOfferedForSale(tokenId)
            .call({
                from: window.ethereum.selectedAddress,
                gas: 2100000
            })
            .then(res => setMinPrice(res.minValue));
            
       

    },[]);


    const classes = useStyles();

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };

  const onclickAcceptBid = async()=>{
    await acceptBidForMoment(tokenId, acceptBidMinPrice)
    await nftContract.methods
        .momentIDToAddress(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setOwnedBy(res));
    await nftContract.methods
        .momentBids(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setHasBids(res.hasBid));
    await nftContract.methods
        .momentBids(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setCurrentBid(res.value));
    await nftContract.methods
        .momentBids(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setCurrentBidder(res.bidder));
    await nftContract.methods
        .momentsOfferedForSale(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setisForSale(res.isForSale));
    await nftContract.methods
        .momentsOfferedForSale(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setMinPrice(res.minValue));
        

  }

  const onclickEnterBid = async()=>{
    await nftContract.methods
        .enterBidForMoment(tokenId)
        .send({
            from: window.ethereum.selectedAddress,
            gas: 2100000,
            value: enterBidValue
        })
        .then(res => console.log(res));
  } 

  const onclickWithdrawBid = async()=>{
    await nftContract.methods
    .withdraw()
    .send({
        from: window.ethereum.selectedAddress,
        gas: 2100000
    })
    .then(res => console.log(res));
}
const onclickWithdrawBidForMoment = async()=>{
    await nftContract.methods
    .withdrawBidForMoment(tokenId)
    .send({
        from: window.ethereum.selectedAddress,
        gas: 2100000
    })
    .then(res => console.log(res));
}
  
  
const onclickOfferMomentForSale = async()=>{
    await nftContract.methods
        .offerMomentForSale(tokenId, offerMinPrice)
        .send({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
    await nftContract.methods
        .momentsOfferedForSale(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setisForSale(res.isForSale));
    await nftContract.methods
        .momentsOfferedForSale(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setMinPrice(res.minValue));
        
}

const onClickRemoveFromMarket = async()=>{
    await nftContract.methods
        .momentsNoLongerForSale(tokenId)
        .send({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
    await nftContract.methods
        .momentsOfferedForSale(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setisForSale(res.isForSale));
    await nftContract.methods
        .momentsOfferedForSale(tokenId)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => setMinPrice(res.minValue));
}

  

    return (
        <section className="showcase" style={alignTop}>
            <SideNav />
            <div className="main">
                <NavBar />
                <div className="row content-row product-detail">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{fontSize: 45}}>
                        <img src={product.img || ''} alt="card product diagram" className="product-img" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="row content-row">
                            <div className="col-md-12">
                                <span className="badge badge-custom">Owned By: {ownedBy}</span>
                            </div>
                            <div className="col-md-12">
                                <span className="badge badge-custom"> Has Bids:{JSON.stringify(hasBids)}</span>
                            </div>
                            <div className="col-md-12">
                                <span className="badge badge-custom"> For Sale:{JSON.stringify(isForSale)}</span>
                            </div>
                            <div className="col-md-12">
                                <span className="badge badge-custom"> Minimum Bid Price:{minPrice}</span>
                            </div>
                            <div className="col-md-12">
                                <span className="badge badge-custom"> Current Bid (Wei):{currentBid}</span>
                            </div>
                            <div className="col-md-12">
                                <span className="badge badge-custom"> Current Bidder :{currentBidder}</span>
                            </div>
                            <div className="col-md-12">
                                <h1 className="product-title">{product.name}</h1>
                            </div>
                            <div className="col-md-12">
                                <h4>{product.description}</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{product.price || " American Revolution "}</p>
                            </div>
                            <div className="col-md-6">
                                <Box component="fieldset" mb={3} borderColor="transparent" className="box">
                                    <Rating name="read-only" value={50} readOnly />
                                </Box>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <TextField 
                                        onChange={event => setEnterBidValue(event.target.value)}
                                        displayEmpty
                                        placeholder="Enter Bid"
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    />
                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                <Button onClick={onclickEnterBid} disabled={true}   classeName={{ disabled: classes.disabledButton }}  variant="outlined" size="large" className="btn-orange" startIcon={<PurchaseIcon />}>Make Bid</Button>
                                <Box component="fieldset" mb={3} borderColor="transparent" className="box">
                                </Box>


                                </FormControl>
                                <FormControl variant="outlined" className={classes.formControl}>

                                <Button variant="outlined" disabled={true} onClick={onclickWithdrawBidForMoment}  size="large" className="btn-orange" startIcon={<PurchaseIcon />}>Withdraw Current Bid</Button>
                                <Box component="fieldset" mb={3} borderColor="transparent" className="box">
                                </Box>
                                <Button variant="outlined" disabled={true} onClick={onclickWithdrawBid}  size="large" className="btn-orange" startIcon={<PurchaseIcon />}>Withdraw Losing Bid</Button>

                                </FormControl>

                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <TextField 
                                        onChange={event => setAcceptBidMinPrice(event.target.value)}
                                        displayEmpty
                                        placeholder="Enter Price to accept Bid in Wei "
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    />
                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                <Button variant="outlined" disabled={true} onClick={onclickAcceptBid}  size="large" className="btn-orange" startIcon={<PurchaseIcon />}>Accept Bid</Button>
                                <Box component="fieldset" mb={3} borderColor="transparent" className="box">
                                </Box>


                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <TextField 
                                        onChange={event => setOfferMinPrice(event.target.value)}
                                        displayEmpty
                                        placeholder="Enter Minimum Sale Price in Wei "
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    />
                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                <Button variant="outlined" disabled={true} onClick={onclickOfferMomentForSale}  size="large" className="btn-orange" startIcon={<PurchaseIcon />}>Offer for Sale</Button>
                                <Box component="fieldset" mb={3} borderColor="transparent" className="box">
                                </Box>

                                <Button variant="outlined" disabled={true} onClick={onClickRemoveFromMarket}  size="large" className="btn-orange" startIcon={<PurchaseIcon />}>Remove From Market</Button>

                                </FormControl>
                            </div>

                            <div className="col-md-12">
                                <p className="text-center">Delivered via the Ethereum Blockchain</p>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                <Button variant="outlined" size="large" >Find in explore</Button>
                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <p className="text-center">Find NFTs and place bid via explorer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row content-row product-detail">
                    <div className="col-md-12">
                        <hr className="custom-divider"></hr>
                        <h3 className="product-under-text"><a href="/explore">Click here</a> for list of nfts contained in the pack</h3>
                        <h3 className="product-under-text"><a href={product.metadata}>Click here</a> to view metadata of nft </h3>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailPage;