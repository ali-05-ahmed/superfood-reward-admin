import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataModel from "./Data_model";
import { ethers } from "ethers";
import imageUrl from "../../utils/imageUrl";
import calls from "../../apis/calls";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { useEthersSigner } from "../../utils/signer";

function Banner() {
  const { active, activate, account , address } = useAccount();
  const { chain } = useNetwork()
  const signer = useEthersSigner()
  const library = usePublicClient()
  const [show , setShow] = useState(false)
  const [price , setprice] = useState('0')
  const [remaining , setRemaining] = useState('0')
  const [totalSupply , setTotalSupply] = useState('10000')
  const [maxMint , setmaxMint] = useState(1)
  //UI
  const [mintButton , setMintButton] = useState('MINT NOW')
  const [disable , setDisable] = useState(false)
  const handleShow = () => {
    setShow(false)
  }
  useEffect(() => {
    if(address && signer){

    
    const fetchData = async () => {
      setprice(ethers.utils.formatEther(await calls.PRICE_PER_NFT(signer,address,library,chain.id)))
      setRemaining((await calls.tokenIds(signer,library,chain.id)).toString())
      setTotalSupply((await calls.totalSupply(signer,library,chain.id)).toString())
      setmaxMint(Number(await calls.getMaxMint(signer,address,chain.id)))
      console.log("AA",Number(await calls.getMaxMint(signer,address,chain.id)))
    }
    fetchData()
  }
    return () => {
    }
  }, [address,show,signer])
  
  return (
    // <!-- ==== hero section start ==== -->
    <section
      className="hero pos__rel over__hi bg__img cs-hero cs-style1 cs-bg"
      //   data-background={imageUrl("02.jpg")}
      style={{ backgroundImage: `url(${imageUrl("")})` }}
    >
      <div className="cs-dark-overlay"></div>
      <div className="container">
      
            <div className="cs_hero_text">
              <div className="hero__content pos__rel">
                {/* <h5 className="neutral-top">A smarter, better way to invest</h5> */}
                <h1 className="text-black" >
                 DISCOVER & COLLECT <br/>FOOD NFT ARTWORK{" "}
                </h1>
                <p className="primary neutral-bottom text-black">
              {Number(totalSupply)-Number(remaining)} / {Number(totalSupply)} AVAILABLE
                </p>
                
                <div className="hero__cta__group__1">
                  <button onClick={async()=>{
                    setShow(!show)
                    // setMintButton("MINTING ...")
                    // setDisable(true)
                    // await calls.mint('',library,chain)
                    // setMintButton("MINT NOW")
                    // setDisable(false)
                    
                  }} className="cs-btn cs-btn_filed cs-accent_btn">
                   {mintButton}
                  </button>
                  <a
                    className="cs-btn cs-color1 text-black"
                    href="https://opensea.io/collection/superfood-nft"
                    target="_blank"
                  >
                 VIEW ON OPENSEA
                  </a>
                </div>
                <h3 className="cs-hero_subtitle text-black">
                  {/* <span className="cs-accent_color"> {price}</span> ETH */}
                  {/* <br /> */}
                  {/* Don't miss out on the release of our new NFT. 
                    <br /> IN  */}
                  <span style={{color:'#3E4C5F'}}>COMING SOON</span>
                </h3>
              </div>
            </div>
             
           
            <div className="cs-hero_img">
               <img src={imageUrl("hero.png")} alt="" className="cs_hero_img" />
               <div className="cs-hero_img_sm">
              <img src={imageUrl("hero_img_sm.png")} alt="Hero Image" />
               </div>
            </div>
         
        </div>
        <DataModel data={{remaining,totalSupply,price,maxMint}} show={show} onHide={handleShow}/>
    </section>
    // <!-- ==== #hero section end ==== -->
  );
}

export default Banner;
