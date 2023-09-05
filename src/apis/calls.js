import addresses from "../contracts/index"
import NFT from '../contracts/ABIs/Superfood.json'
import ERC20 from '../contracts/ABIs/ERC20.json'
import REWARD from '../contracts/ABIs/Reward.json'
import { Signer, ethers } from 'ethers'
import ERROR from '../utils/error'
// Import the Moralis SDK
import Moralis from 'moralis';
import apis from "."
import { getLowestMinValue } from "../utils/config"
const { Alchemy, Network } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
    apiKey: process.env.REACT_APP_ALCHEMY_API, // Replace with your API key
    network: Network.MATIC_MUMBAI, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

let errorlist = [
    "ETH transfer failed",
    "Insufficient ETH balance in the contract",

]

const createContractCalls = () => {

    //Function to retrieve NFTs owned from a specific smart contract
    async function getNewNFTs(signer, account, chainId, data) {
        try {
            //tokenByIndex
            const contract = new ethers.Contract(addresses[chainId].marketplace, NFT, signer)
            const contract_reward = new ethers.Contract(addresses[chainId].reward, REWARD, signer)
            let { ownedNfts } = await alchemy.nft.getNftsForOwner(account)
            console.log("Alchemy : ", ownedNfts)
            let payoutIds = []
            let temp = await apis.getAllTokenIdsPayouts(account)
            payoutIds = temp.data
            console.log("CALLS PAYOUT NFTS : ", await apis.getAllTokenIdsPayouts(account))
            let NFTs = []
            for (let index = 0; index < ownedNfts.length; index++) {
                console.log("chcek", ownedNfts[index].contract.address.toLowerCase() === addresses[chainId].marketplace.toLowerCase())
                if (ownedNfts[index].contract.address.toLowerCase() === addresses[chainId].marketplace.toLowerCase()) {
                    let id = ownedNfts[index]?.tokenId
                    console.log("user NFT", id)
                    let valid = await contract_reward.canReleaseNFT(account, addresses[chainId].marketplace, id)
                    if (valid) {
                        console.log("NFTs", id, valid)
                        NFTs.push(Number(id.toString()))
                    }
                } else {
                    continue
                }
            }
            // Find ids in the buyerArray and create a Set to ensure uniqueness
            console.log("NFTs", NFTs)
            console.log("data", data)
            const finalSet = new Set();
            //data = Array(data);
            console.log("DATA_ARRAY" , data)
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                console.log("element", element.tokenId)
                console.log("NFTs", NFTs)
                console.log("NFTs.includes(parseInt(element.tokenId))", NFTs.includes(parseInt(element.tokenId)))
                if (NFTs.includes(Number(element.tokenId)) && !payoutIds.includes(Number(element.tokenId))) {
                    finalSet.add(Number(element.tokenId));
                }
            }
            
            // Convert the Set back to an array
            const finalArray = Array.from(finalSet);

            return finalArray
        } catch (error) {
            console.error('Calls Error retrieving NFTs:', error);
            throw error;
        }
    }


    const mint = async (signer, data, account, library, chainId) => {
        try {
            console.log("data", data)

            let price = (Number(await PRICE_PER_NFT(signer, account, library, chainId)) * data?.quantity).toString()
            console.log((Number(await PRICE_PER_NFT(signer, account, library, chainId)) * data?.quantity).toString())
            console.log(price)

            const contract = new ethers.Contract(addresses[chainId].marketplace, NFT, signer)
            let _mint = await contract.mintNFT(account, data?.quantity, { value: price })
            let tx = await _mint.wait()
            ERROR.log_message("Successfully minted")
            return { retun: true, quantity: data?.quantity }
        } catch (error) {
            console.log("mint", error)
            console.log(error.error.code == -32603)
            if (error.error.code == -32603)
                ERROR.catch_error({ message: "Max tokens minted" }, 'mint')   //"REQUEST REJECTED"
            else
                ERROR.catch_error({ message: "REQUEST REJECTED" }, 'mint')   //"REQUEST REJECTED"
            return { retun: true }
        }
    }


    const PRICE_PER_NFT = async (signer, account, library, chainId) => {
        try {

            console.log("CHAINNNNNNNNNNN", chainId)
            const contract = new ethers.Contract(addresses[chainId]?.marketplace, NFT, signer)
            let _PRICE_PER_NFT = await contract.getPrice(account)
            // let tokenURI = await contract.tokenURI(1)
            console.log("_PRICE_PER_NFT",_PRICE_PER_NFT.toString());
            return _PRICE_PER_NFT.toString()
        } catch (error) {
            console.log("PRICE_PER_NFT", error)
        }
    }

    const NML_PRICE = async (signer, account, amount , chainId) => {
        try {

            console.log("CHAINNNNNNNNNNN", chainId)
            const contract = new ethers.Contract(addresses[chainId]?.reward, REWARD , signer)
            let _PRICE_PER_NFT = await contract.getTokenAPriceInTokenB(ethers.utils.parseEther(amount.toString()),"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",addresses[chainId]?.reward)
            return Number(ethers.utils.formatEther(_PRICE_PER_NFT.toString())).toFixed(2)
        } catch (error) {

            console.log("PRICE_PER_NFT", error)
            return 3691270000;
        }
    }

    const donatePercent = async (signer , chainId) => {
        try {

            console.log("CHAINNNNNNNNNNN", chainId)
            const contract = new ethers.Contract(addresses[chainId]?.reward, REWARD , signer)
            let _PRICE_PER_NFT = await contract.donatePercent()
            return Number(_PRICE_PER_NFT.toString())
        } catch (error) {

            console.log("PRICE_PER_NFT", error)
            return 0;
        }
    }


    const getMaxMint = async (signer, account, chainId) => {
        try {

            console.log("CHAINNNNNNNNNNN", chainId)
            const contract = new ethers.Contract(addresses[chainId]?.marketplace, NFT, signer)
            let _PRICE_PER_NFT = await contract.getMaxMint(account)
            // let tokenURI = await contract.tokenURI(1)
            // console.log("URI",tokenURI);
            return _PRICE_PER_NFT.toString()
        } catch (error) {
            console.log("PRICE_PER_NFT", error)
        }
    }

    const totalSupply = async (signer, library, chainId) => {
        try {

            const contract = new ethers.Contract(addresses[chainId].marketplace, NFT, signer)
            let _totalSupply = await contract.MAX_SUPPLY()
            return _totalSupply.toString()
        } catch (error) {
            console.log("totalSupply", error)
        }
    }
    const tokenIds = async (signer, library, chainId) => {
        try {

            const contract = new ethers.Contract(addresses[chainId].marketplace, NFT, signer)
            let _tokenIds = await contract.totalSupply()
            // let _token = await contract.tokenURI(1)
            // console.log("METAAAAAAAA" , _token)
            return _tokenIds.toString()
        } catch (error) {
            console.log("_tokenIds", error)
        }
    }

    const balanceOf = async (signer, account, chainId) => {
        try {

            const contract = new ethers.Contract(addresses[chainId].marketplace, NFT, signer)
            let balance = await contract.balanceOf(account)
            return Number(balance.toString())
        } catch (error) {
            console.log("_tokenIds", error)
        }
    }

    const balanceOfNML = async (signer, account, chainId) => {
        try {
            const contract = new ethers.Contract(addresses[chainId.toString()].token, ERC20, signer)
            console.log("calles nml balance")
            let balance = await contract.balanceOf(account)
            console.log("calles nml balance", balance)
            return balance.toString()

        } catch (error) {
            console.log("nml balance", error)
        }
    }

    const creatorFee = async (signer, chainId) => {
        try {
            const contract = new ethers.Contract(addresses[chainId.toString()].reward, REWARD, signer)
            console.log("calles nml balance")
            let balance = await contract.creatorPercent()
            return balance.toString()

        } catch (error) {
            console.log("nml balance", error)
        }
    }

    const donationFee = async (signer, chainId) => {
        try {
            const contract = new ethers.Contract(addresses[chainId.toString()].reward, REWARD, signer)
            console.log("calles nml balance")
            let balance = await contract.donatePercent()
            return balance.toString()

        } catch (error) {
            console.log("nml balance", error)
        }
    }

    const validreleaseETH = async (signer, chainId , nftIds, nftOwner, releaseAmount, nonce, isETH, isDonate , signature, verifier) => {
        try {
            const contract = new ethers.Contract(addresses[chainId.toString()].reward, REWARD, signer)
            let value = (ethers.utils.parseEther(releaseAmount.toString())).toString()
            let defaultamount = (ethers.utils.parseEther(getLowestMinValue('Balance').toString())).toString()
            let tx = await contract.callStatic.releaseEth(nftIds, nftOwner, addresses[chainId.toString()].marketplace, addresses[chainId.toString()].token, value, defaultamount , nonce, [isETH,isDonate], signature, verifier)
            return true
        } catch (error) {
            console.log(error)
            try {
                let response = apis.updatePayoutTime({tokenIds:nftIds,address:nftOwner,time:Math.floor((new Date().getTime() + 60 * 1000) / 1000)})
                ERROR.log_message("ADDED IN QUEUE")
            } catch (error) {
                ERROR.catch_error({ message: "REQUEST REJECTED" }, 'Update time')
            }
            console.log("nml balance", error)
            return false
        }
    }

    const releaseETH = async (signer, chainId , nftIds, nftOwner, releaseAmount, nonce, isETH, isDonate , signature, verifier) => {
        try {
            if(validreleaseETH(signer, chainId , nftIds, nftOwner, releaseAmount, nonce, isETH, isDonate , signature, verifier)){
                const contract = new ethers.Contract(addresses[chainId.toString()].reward, REWARD, signer)
                let value = (ethers.utils.parseEther(releaseAmount.toString())).toString()
                let defaultamount = (ethers.utils.parseEther(getLowestMinValue('Balance').toString())).toString()
                let tx = await contract.releaseEth(nftIds, nftOwner, addresses[chainId.toString()].marketplace, addresses[chainId.toString()].token, value, defaultamount , nonce, [isETH,isDonate], signature, verifier)
                await tx.wait()
                ERROR.log_message("REWARD RELEASED")
            }
        } catch (error) {
            console.log("nml balance", error)
        }
    }

    

    const claim = async (signer, IDs, address, releaseAmount, isETH , isDonate , chainId) => {
        try {
            let value = (ethers.utils.parseEther(releaseAmount.toString())).toString()
            let defaultamount = (ethers.utils.parseEther(getLowestMinValue('Balance').toString())).toString()
            console.log("address",value,address,defaultamount)
            let now = false;
            const contract = new ethers.Contract(addresses[chainId.toString()].reward, REWARD, signer)
            const { signature,verifier, nonce } = await generateSignature(IDs, address, addresses[chainId.toString()].marketplace, addresses[chainId.toString()].token, value, defaultamount, isETH, isDonate, now)
            console.log(typeof(nonce) , "nonce" , nonce , getLowestMinValue('Balance'))
            console.log(typeof(nonce) , "nonce" , nonce)
            console.log(signature , "verifier" , verifier)
            //nftIds, nftOwner, nftContract.address, nMLClone.address, releaseAmount, defaultamount, nonce, isETH, signature, verifierSignature
           if(now){
            // let tx = await contract.releaseEth(IDs, address, addresses[chainId.toString()].marketplace, addresses[chainId.toString()].token, value, defaultamount , nonce, [isETH,isDonate], signature, verifier)
            // await tx.wait()
            await releaseETH(signer, chainId , IDs, address, releaseAmount, nonce, isETH, isDonate , signature, verifier)
           }else{
            ERROR.log_message("ADDED IN QUEUE")
           }
            // let tx = await apis.createPayout({ tokenIds:IDs, address, payout:value, isETH, isDonate, validator_signature:signature, verifier_signature:verifier })
            // console.log("Payout DB:",tx)
        } catch (error) {
            console.log("claim", error)
            ERROR.catch_error({ message: "REQUEST REJECTED" }, 'claim')   //"REQUEST REJECTED"
        }
    }
//nonce, address, signature, IDs, nftContract, nMLClone, releaseAmount, defaultamount , isETH , isDonate , now
    const generateSignature = async (IDs, address, nftContract, nMLClone, releaseAmount, defaultamount , isETH , isDonate , now) => {
        try {

            let nonce = await getNonce(address)
            
            const messageHash = ethers.utils.solidityKeccak256(['uint256[]', 'address', 'address', 'address', 'uint256', 'uint256', 'uint256'], [IDs, address, nftContract, nMLClone, releaseAmount,defaultamount, nonce]);

            console.log(process.env.REACT_APP_PRIVATEKEY)

            const walletFromPrivateKey = new ethers.Wallet(process.env.REACT_APP_PRIVATEKEY);

            console.log("messageHash", messageHash)
            const signingKey = new ethers.utils.SigningKey(walletFromPrivateKey.privateKey);
            const signature = await walletFromPrivateKey.signMessage(ethers.utils.arrayify(messageHash));
            console.log("signature", signature)
            let  {data}  = await apis.generateVerifier({ nonce, address, signature, IDs, nftContract, nMLClone, releaseAmount , defaultamount, isETH , isDonate , now })
            
            console.log("verifier", data)
            return { signature: signature, verifier : data.verifier , nonce } //data.verifier /ethers.utils.arrayify(
        } catch (error) {
            console.error('Error generating signature:', error);
            ERROR.catch_error({ message: "'SiGNATURE GENERATION FAILED'" }, 'Signature')   //"REQUEST REJECTED"
        }
    }

    const rejectSignature = async (signer, account, library) => {
        if (account && library) {
            try {
                // await library.send('eth_sign', [account, '0x']);
                // Rejecting the signature request by sending an empty message to the `eth_sign` method
                library.provider.request({
                    method: 'eth_requestAccounts',
                    params: [
                        {
                            eth_accounts: {},
                        },
                    ],
                });
            } catch (error) {
                console.error('Error rejecting signature:', error);
            }
        }
    };

    const getNonce = async (account) => {
        try {
            let { data } = await apis.getNonce(account)
            console.log("nonce" , Number(data.nonce))
            return Number(data.nonce)

        } catch (error) {
            console.log("PRICE_PER_NFT", error)
        }
    }
    //process.env.REACT_APP_ENCRYPT_KEY
    const decodeNonce = async (encryptedNonce, ivBase64, tagBase64) => {
        try {
            const iv = new Uint8Array(Buffer.from(ivBase64, 'base64'));
            const tag = new Uint8Array(Buffer.from(tagBase64, 'base64'));

            const encBuffer = new TextEncoder().encode(process.env.REACT_APP_ENCRYPT_KEY);
            const key = await window.crypto.subtle.importKey('raw', encBuffer, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);

            const encryptedData = new Uint8Array(Buffer.from(encryptedNonce, 'base64'));

            const decryptedData = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv, tagLength: 128 }, key, encryptedData);

            const decryptedNonce = new TextDecoder().decode(decryptedData);
            return decryptedNonce;
        } catch (error) {
            console.log("PRICE_PER_NFT", error)
        }
    }




    return {
        mint,
        tokenIds,
        totalSupply,
        PRICE_PER_NFT,
        balanceOf,
        balanceOfNML,
        generateSignature,
        rejectSignature,
        getMaxMint,
        getNewNFTs,
        claim,
        NML_PRICE,
        donatePercent,
        creatorFee,
        donationFee,
        releaseETH
    }

}
const calls = createContractCalls();


export default calls;