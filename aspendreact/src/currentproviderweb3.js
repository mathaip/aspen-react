import Web3 from "web3"
const HDWalletProvider = require("@truffle/hdwallet-provider");


let currentproviderweb3;

const mnemonicPhrase = process.env.MNEMONIC
let provider = new HDWalletProvider({
    mnemonic: {
        phrase: mnemonicPhrase
    },
    providerOrUrl: "https://mainnet.infura.io/v3/47257472d21d45d39769bf5c1fed44b5"
});


if (!window.web3) {
    currentproviderweb3 = new Web3(provider)
} else {
    currentproviderweb3 = new Web3(window.web3.currentProvider);

}




export const ropstenweb3 = new Web3(provider);




// console.log(currentproviderweb3)
export default currentproviderweb3;