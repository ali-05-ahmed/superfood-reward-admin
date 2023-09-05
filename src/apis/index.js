import axios from "axios";

const createBackendServer = (baseUrl) => {
  const api = axios.create({
    baseURL: `${baseUrl}/api/`,
    headers: { Accept: "application/json" },
    timeout: 60 * 1000,
  });

  // Get all sales
  const getAllSales = () => api.get("sales/");
  
  // Get Nonce
  const getNonce = (address) => api.get(`nonce/${address}`);

  // Create a customer
  const generateVerifier = (body) => api.post("nonce/verifier", body);

  // Get user by wallet address
  const getSalesByWalletAddress = (address) => api.get(`sales/${address}`);

  // Get user by highest price
  const getHighestSalesPriceByWalletAddress = (address) => api.get(`sales//highestValue/${address}`);
  
  // Get user by highest price
  const getHighestSalesPriceByWalletIdsAddress = (address,tokenIds) => api.get(`sales//highestValue/${address}/${tokenIds.join(',')}`);

  // Get all NFTs
  const getAllNFTs = () => api.get("nft");

  // Get NFT by tokenId
  const getNFTByTokenId = (tokenId) => api.get(`nft/${tokenId}`);

  // Get all NFT minted by walletAddress
  const getNFTsByWalletAddress = (walletAddress) => api.get(`nft/wallet/${walletAddress}`);

  // Create a customer
  const createPayout = (body) => api.post("payout/create", body);

  const updatePayoutTime = (body) => api.put("payout/updatetime", body);

  // Get all NFTs
  const getAllPayouts = (address) => api.get(`payout/${address}`);

  const getAllTokenIdsPayouts = (address) => api.get(`payout/tokenids/${address}`);

  const getDetailedPayout = (id) => api.get(`payout/detail/${id}`);


  return {
    getAllSales,
    getHighestSalesPriceByWalletAddress,
    getSalesByWalletAddress,
    getAllNFTs,
    getNFTByTokenId,
    getNFTsByWalletAddress,
    getHighestSalesPriceByWalletIdsAddress,
    getNonce,
    generateVerifier,
    createPayout,
    getAllPayouts,
    getAllTokenIdsPayouts,
    getDetailedPayout,
    updatePayoutTime
  };
};

// const SERVER_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PRODUCTION_BASE_URL
//     : process.env.REACT_APP_DEVELOPMENT_BASE_URL;
const SERVER_URL = process.env.REACT_APP_PRODUCTION_BASE_URL || process.env.REACT_APP_DEVELOPMENT_BASE_URL

const apis = createBackendServer(SERVER_URL);
export default apis;
