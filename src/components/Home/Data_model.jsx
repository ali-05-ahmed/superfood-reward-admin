import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import imageUrl from "../../utils/imageUrl";
import calls from "../../apis/calls";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { useEthersSigner } from "../../utils/signer";

const DataModel = (props) => {
  const [mintButton, setMintButton] = useState("MINT NOW");
  const [disable, setDisable] = useState(false);
  const [tx, setTx] = useState(0);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const signer = useEthersSigner();
  const library = usePublicClient(chain?.id);
  const [count, setCount] = useState(1);
  const [msgValue, setMsgValue] = useState(0);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // console.log(event.target.max)
    // console.log(event.target.min)
    console.log(event.target.value);
    if (
      event.target.min <= Number(inputValue) &&
      Number(inputValue) <= event.target.max
    ) {
      setCount(Number(inputValue));
      event.target.value = Number(inputValue);
    } else {
      //setCount(count);
      event.target.value = count;
    }
  };

  const handleIncrement = () => {
    console.log(Number(props?.data?.remaining));
    if (!disable) {
      if (
        count ===
          Number(props?.data?.totalSupply) -
            Number(props?.data?.remaining) +
            tx ||
        count === Number(props?.data?.maxMint) + tx
      ) {
        return;
      }
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (!disable) {
      if (count === 1) {
        return;
      }
      setCount(count - 1);
    }
  };

  const handleModal = () => {
    props.onHide();
  };

  useEffect(() => {
    setTx(0);
    return () => {};
  }, [props.show]);

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className={"modal-container"}
      >
        <div className="spa-modal-body modal-body space-y-20 pd-40 rounded">
          <button
            closeButton
            class="cs-close_modal justify-center flex items-center cs-primary_bg"
            onClick={handleModal}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L0.292893 10.2929ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L10.2929 11.7071ZM10.2929 0.292893L0.292893 10.2929L1.70711 11.7071L11.7071 1.70711L10.2929 0.292893ZM0.292893 1.70711L10.2929 11.7071L11.7071 10.2929L1.70711 0.292893L0.292893 1.70711Z"
                fill="white"
              ></path>
            </svg>
          </button>
          <span>
            <p className=" text-center">
              NML Food Production NFT provides unique algorithms, recipes,
              patents, sustainability tracking, commerce opportunities, reserve
              value, and eligibility for exclusive culinary events
              and restaurants.
            </p>
          </span>
          <div className="hr"></div>
          <div className="img d-flex justify-content-center my-5">
            <img
              src={imageUrl("hero_img.png")}
              alt="congrats.png"
              className="vecel_img"
            />
          </div>
          <ul className="ul">
            <li className="d-flex my-3">
              <div className="cs-list_left">Remaining</div>
              <div className="cs-list_right">
                {" "}
                {Number(props?.data?.remaining) + tx} /{" "}
                {Number(props?.data?.totalSupply)} Minted
              </div>
            </li>
            <li className="d-flex justify-content-space-between my-3">
              <div className="cs-list_left">Price/NFT</div>
              <div className="cs-list_right">
                {(Number(props?.data?.price) * count).toFixed(5)}
              </div>
            </li>
          </ul>

          <div className="container-counter">
            <div className="buttonContainer-counter">
              <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" onClick={handleIncrement}>
                <FaPlus />
              </button>

              {/* <p className="counter">{count}</p> */}
              {/* <input
                type="number"
                value={count}
                // placeholder={count}
                onChange={(e) => handleChange(e)}
                min={0}
                max={Number(props?.data?.maxMint)} //Number(props?.data?.maxMint)
              /> */}

              <input
                className="w-16 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                value={count}
                // placeholder={count}
                onChange={(e) => handleChange(e)}
                min={0}
                max={Number(props?.data?.maxMint)}
              />
              <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full ml-4" onClick={handleDecrement}>
                <FaMinus />
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center py-3">
            <button
              disabled={disable}
              onClick={async () => {
                setMintButton("MINTING ...");
                setDisable(true);
                try {
                  let call = await calls.mint(
                    signer,
                    { quantity: count },
                    address,
                    library,
                    chain.id
                  );
                  if (call.return === true) {
                    setTx(tx + Number(call.quantity));
                  }
                } catch (error) {}
                setMintButton("MINT NOW");
                setDisable(false);
              }}
              className="cs-btn cs-btn_filed cs-accent_btn"
            >
              {mintButton}
            </button>
          </div>
          {/* <p class="text-center">Lorem ipsum dolor sit amet.</p> */}
        </div>
      </Modal>
    </>
  );
};

export default DataModel;
