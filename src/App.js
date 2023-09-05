import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, useWalletClient, WagmiConfig } from 'wagmi'
import { arbitrum, goerli, localhost, mainnet, polygon, polygonMumbai } from 'wagmi/chains'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, ScrollToTop, Loader } from "./components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

//extra
import { Web3Button } from '@web3modal/react'
import { walletClientToSigner , useEthersSigner } from './utils/signer'
import { ethers } from 'ethers'
import calls from './apis/calls';
import React ,{ Suspense } from 'react';
import TextFields from './components/TextFields';


//end

const Home = React.lazy(() => import(`./screens/Home`));
const Reward = React.lazy(() => import(`./screens/Reward`));
const loader = <Loader />;

const chains = [arbitrum, mainnet, polygon , goerli,localhost,polygonMumbai]
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <ToastContainer />
    </>
  )
}

export default App


function HomePage() {
  const client = useEthersSigner()
  
  return (
    <div className="App">
      {/* <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={loader}>
          <Header  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reward" element={<Reward />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter> */}
      <TextFields/>
    </div>
  );
}