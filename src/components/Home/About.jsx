import React from 'react'

import { useState } from 'react';
import Information from './Information';
import imageUrl from '../../utils/imageUrl';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  }

  return (
    <>
   <section id="about">
    <div className="cs-height_100"></div>
    <div className="container">
        <div className="row align-items-center flex-column-reverse-lg">
            <div className="col-lg-6">
                <div className="cs-height_0 cs-height_04_lg"></div>
                <div className="cs-right_space_40">
                <div className="cs-section_heading">
                   <h3 className="cs-section_title">SIMPLE STEPS</h3>
                   <h2 className="cs-section_subtitle">Why Sheep2mint.com?</h2>
                   <div className="cs-height"></div>   
                   <p className='text'>
                   HalalXpert Pte Ltd Singapore Based company have evolved and have embarked into investment services, starting with our Sheep Farming and Breeding Investment Program in Australia. Our goal is to serve as a catalyst to revitalize and reinvigorate the Islamic economy.
                    HalalXpert Pte Ltd now focus our efforts on the investment Live and Digital Web3 Technology in Farming program. HalalXpert Pte Ltd launching Web3 allows for the creation and distribution of unique digital assets such as NFTs, which have become increasingly popular in recent years. 
                    
                    </p>
                   <p className='text'>NFTs and Digital Assets: NFTs have opened up new markets for artists and creators to monetize their work and for collectors to invest in digital assets.</p>   
                   <p className='text'>Simple Steps to Get live Sheep with NFTS:</p>   
                   <ul>
                    <li>
                    <p className='text'>⦁	Automatic NFTs Selection to Mint -2NFTs per Sheep</p> 
                    </li>
                    <li>
                    <p className='text'>⦁	Deployed in Open sea automatically with your wallet</p> 
                    </li>
                    <li>
                    <p className='text'>⦁	Start Getting Sell you NFTS in Popular Marketplace in World </p> 
                    </li>
                   </ul>
                 </div>
                </div>
            </div>
            <div className="col-lg-6">
                <img src={imageUrl("about_img.jpg")} alt="" srcset="" />
            </div>
        </div>
        <div id="about">
      {showMore ? (
                    <>
                      <Information />
                      
                      <button className="btn btn-primary " onClick={toggleShowMore}>
                        Show Less
                      </button>
                    
                    </>
                  ) : (
                    <button className="btn btn-primary" onClick={toggleShowMore}>
                      Read More
                    </button>
                  )}
                  </div>
    </div>
    
   </section>
   
   </>
  )
}

export default About