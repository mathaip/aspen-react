import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../nft-contract"
import web3 from "../web3";




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
    return new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
};


export const createTokens = async(address, idArray, collectionName, collectionId, amountsArray, maxPackCount, data) => {


    let nftContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
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