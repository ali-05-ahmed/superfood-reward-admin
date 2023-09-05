import "../assets/css/header.css";
import "../assets/css/responsive.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import imageUrl from "../utils/imageUrl";
import { Link, useLocation } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";
import calls from "../apis/calls";
import { useAccount, useNetwork } from "wagmi";

function Header(props) {
  const { open, close } = useWeb3Modal();

  const location = useLocation();
  const href = [
    "/rent",
    "/buy",
    "/sell",
    "/explore",
    "/profile",
    "/buy-prop-details",
    // "/admin",
  ];

  const { t, i18n } = useTranslation();
  const [lang, setLanguage] = useState("en");
  const { isConnected, address, chainId } = useAccount();
  const { chain, chains } = useNetwork();

  const handlechange = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(false);
  };
  useEffect(() => {
    if (address) {
      const fetchData = async () => {
        // let balance = await calls.balanceOf(address, chain);
        // if (balance > 1) {
        //   setShow(true);
        // } else {
        //   setShow(false);
        // }
      };
      fetchData();
    }
    return () => {};
  }, [address]);

  return (
    <>
      <header
        className={`header ${
          href.includes(location.pathname) ? "pos__rel" : ""
        }`}
      >
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <div className="navbar__out order-2 ">
              <div className="nav__group">
                <div
                  className="nav__group__btn"
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <a
                    style={{ backgroundColor: "#742444" }}
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x3858dad8a5b3364be56de0566ab59e3d656c51f6&chain=mainnet"
                    target="_blank"
                    className="button button--effect  d-sm-block hover:text-white"
                  >
                    Buy NML
                  </a>
                  <a
                    href="/reward"
                    className="button button--effect  d-sm-block"
                  >
                    Rewards
                  </a>
                  {isConnected ? (
                    <>
                      <Link to="/" className="navbar-brand">
                        <a
                          href="javascript:void(0)"
                          className="button button--effect  d-sm-block"
                        >
                          <i className="fas fa-user profile-icon"></i>
                        </a>
                      </Link>
                      <a
                        href="javascript:void(0)"
                        className="button button--effect  d-sm-block"
                        onClick={() => {
                          open(); //connectWallet(activate, props.setErrorMessage);
                        }}
                      >
                        {address.substr(0, 6) +
                          "..." +
                          address.substr(address.length - 3, address.length)}
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="javascript:void(0)"
                        className="button button--effect d-sm-block"
                        onClick={() => {
                          open(); //connectWallet(activate, props.setErrorMessage);
                        }}
                      >
                        {" "}
                        Connect Wallet
                        <i className="fas fa-wallet mx-1"></i>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Link to="/" className="navbar-brand">
              <img src={imageUrl("logo.png")} alt="Logo" className="logo" />
              {/* Your Logo */}
            </Link>
          </div>
        </nav>
      </header>
    </>
    // <!-- ==== #header end ==== -->
  );
}

export default Header;
