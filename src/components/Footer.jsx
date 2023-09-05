import React from "react";
import { Link } from "react-router-dom";
import imageUrl from "../utils/imageUrl";
function Footer() {
  return (
    <>
      {/*  ==== footer section start ====  */}
      <footer className="footer pos__rel over__hi ">
        <div className="container">
          <div className="footer__area my-3">
            <div className="row">
              <div className="cs-footer-logo d-flex justify-content-center">
             <img src={imageUrl("logo.png")} alt="Logo" className="logo" />
              </div>
            </div>
          </div>
          <div className="footer__credit">
            <div className="row d-flex align-items-center">
              <div className="col-sm-12 order-1 order-sm-0">
                <div className="footer__copyright d-flex flex-column align-items-center ">
                       <br/>
                        <p className="my-3">
                        Copyright &copy; 2023 All Rights Reserved by NFT
                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__animation">
          {/* <img
            // src="assets/images/footer/footer__left__circle.png"
            src={imageUrl("footer/footer__left__circle.png")}
            alt="Circle"
            className="left__circle"
          />
          <img
            // src="assets/images/footer/footer__right__circle.png"
            src={imageUrl("footer/footer__right__circle.png")}
            alt="Circle"
            className="right__circle"
          /> */}
          {/* <img
            src={imageUrl("hero-three-bg.png")}
            alt="Home"
            className="home__illustration"
          /> */}
        </div>
      </footer>
      {/* <!-- ==== #footer section end ==== --> */}
    </>
  );
}

export default Footer;
