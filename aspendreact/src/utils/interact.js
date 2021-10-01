import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../nft-contract"
import currentproviderweb3 from "../currentproviderweb3";
import ropstenweb3 from "../currentproviderweb3";


const owner = process.env.OWNER_ADDRESS;


export const connectWallet = async() => {
    if (window.ethereum) {
        try {
            const address = await window.ethereum.enable();
            const obj = {
                connectedStatus: true,
                status: "",
                address: address
            }
            return obj;

        } catch (error) {
            return {
                connectedStatus: false,
                status: "🦊 Connect to Metamask using the button on the top right."
            }
        }

    } else {
        return {
            connectedStatus: false,
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
    }
};

export const loadContract = async() => {
    return new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
};




export const acceptBidForMoment = async(momentID, minValue) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .acceptBidForMoment(momentID, minValue)
        .send({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
}
export const enterBidForMoment = async(momentID) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .enterBidForMoment(momentID)
        .send({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
}
export const withdrawBidForMoment = async(momentID) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .withdrawBidForMoment(momentID)
        .send({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
}

export const offerMomentForSale = async(momentID, minPrice) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .offerMomentForSale(momentID, minPrice)
        .send({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
}
export const momentsOfferedForSale = async(momentID) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .momentsOfferedForSale(momentID)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
}
export const momentsNoLongerForSale = async(momentID) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .momentsNoLongerForSale(momentID)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
}

export const momentBids = async(momentID) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .momentBids(momentID)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => console.log(res));
}

export const momentIDToAddress = async(momentID) => {
    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    await nftContract.methods
        .momentIDToAddress(momentID)
        .call({
            from: window.ethereum.selectedAddress,
            gas: 2100000
        })
        .then(res => res);
}
export const createTokens = async(address, idArray, collectionName, collectionId, amountsArray, maxPackCount, data) => {


    let nftContract = new currentproviderweb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    const transactionParameters = {
        to: CONTRACT_ADDRESS, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        'data': nftContract.methods.createToken(address, idArray, collectionName, collectionId, amountsArray, maxPackCount, data).call()
    };

    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
}