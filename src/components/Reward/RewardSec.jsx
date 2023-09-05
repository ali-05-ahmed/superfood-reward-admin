import React, { useEffect, useState } from "react";
import RewardSlider from "./RewardSlider";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import apis from "../../apis";
import { useEthersSigner } from "../../utils/signer";
import calls from "../../apis/calls";
import { ethers } from "ethers";
import { getObjectRange, getPayoutRange } from "../../utils/config";
import error from "../../utils/error";
import RewardTable from "./RewardTable";

const RewardSec = () => {
  const { isConnected, isDisconnected, address } = useAccount({
    onDisconnect() {
      setMaxPrice(0);
      setValidIds([]);
      setNmlBalance(0);
      setTxCount(0);
    },
  });

  const { chain } = useNetwork();
  const [txCount, setTxCount] = useState(0);
  const [validIds, setValidIds] = useState([]);
  const [nmlBalance, setNmlBalance] = useState("0");
  const [creatorFee, setCreatorFee] = useState("0");
  const [donationFee, setDonationFee] = useState("0");
  const [maxPrice, setMaxPrice] = useState("0");
  const [payout, setPayout] = useState(0);
  const [payoutshow, setPayoutshow] = useState(0);
  const [rewardPercent, setRewardPercent] = useState(0);
  const [rightHeading, setHeading] = useState("Congratulations!!!");
  const [buttontxt, setButtontxt] = useState("CLAIM");
  const [calculating, setCalculating] = useState(true);

  const signer = useEthersSigner();
  const library = usePublicClient();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);

  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);

  const getRandomNumber = (min, max) => {
    const random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(2));
  };

  const getBalance = async () => {
    try {
      const balance = ethers.utils.formatEther(
        await calls.balanceOfNML(signer, address, chain.id)
      );
      return balance;
    } catch (error) {
      return 0;
    }
  };

  const getSalesByWalletAddress = async () => {
    try {
      const { data } = await apis.getSalesByWalletAddress(address);
      console.log("getSalesByWalletAddress", data);
      return data;
    } catch (error) {
      return [];
    }
  };

  const getNewNFTs = async (data) => {
    try {
      const Ids = await calls.getNewNFTs(signer, address, chain.id, data);
      return Ids;
    } catch (error) {
      return [];
    }
  };

  const claim = async () => {
    try {
      if (address && signer) {
        setButtontxt("IN PROGRESS ....");
        //signer, IDs, address, releaseAmount, isETH , isDonate , chainId
        console.log("payout", payout);
        const _claim = await calls.claim(
          signer,
          validIds,
          address,
          payout,
          isChecked1,
          isChecked4,
          chain?.id
        );
        setButtontxt("CLAIM");
      } else {
        error.log("Connect Wallet");
      }
    } catch (error) {
      setButtontxt("CLAIM");
    }
  };

  const getHighestSalesPriceByWalletIdsAddress = async (Ids) => {
    try {
      let response;

      console.log("OUUUUUUUUUUUTTTTT");
      response = await apis.getHighestSalesPriceByWalletAddress(address);

      return response;
    } catch (error) {
      return 0;
    }
  };

  useEffect(() => {
    if (address && signer) {
      setCalculating(true);
      const fetchData = async () => {
        const balance = await getBalance(); //ethers.utils.formatEther(await calls.balanceOfNML(signer, address, chain.id))
        setNmlBalance(balance);
        setCreatorFee(await calls.creatorFee(signer, chain.id));
        setDonationFee(await calls.donationFee(signer, chain.id));
        let data = await getSalesByWalletAddress();
        setTxCount(data.length);
        console.log("collected", data);
        const Ids = await getNewNFTs(data);
        setValidIds(Ids);
        console.log("Ids", Ids);
        let response = await getHighestSalesPriceByWalletIdsAddress(Ids);
        console.log("Price", response);
        let _price = response
          ? response?.data[0]?.value
            ? response?.data[0]?.value
            : response.data.value
          : 0;
        console.log("Price", _price);
        console.log("ASD 21");
        setMaxPrice(_price ? _price : 0);
        await maxpayout(Number(balance), data?.length, Number(_price));
        console.log("ASD 2");
      };
      const result = fetchData()
        // make sure to catch any error
        .catch(console.error);
    } else {
      setHeading("CONNECT WALLET");
    }
  }, [isConnected, address, signer, isChecked1, isChecked3]);

  // useEffect(() => {
  //   if (address && signer) {
  //   //   setMaxPrice(0)
  //   //  // setValidIds([])
  //   //   setNmlBalance(0)
  //   //   setTxCount(0)
  //   } else {
  //     setHeading("CONNECT WALLET")
  //   }
  // }, [address, signer]);

  const random_mul = (balance_data, tx_data, price_data) => {
    const Tx = getObjectRange("Transactions", tx_data);
    let Tx_random = getRandomNumber(Tx?.randomMin, Tx?.randomMax);
    Tx_random = Tx_random ? Tx_random : 0;
    console.log("Tx_random", Tx_random);

    const balance = getObjectRange("Balance", balance_data);
    let balance_random = getRandomNumber(
      balance?.randomMin,
      balance?.randomMax
    );
    balance_random = balance_random ? balance_random : 0;
    console.log("balance_random", balance, balance_data, balance_random);

    const price = getObjectRange("price", price_data);
    //let _price = price ? price : 0
    console.log("getObjectRange", price);
    let price_random = getRandomNumber(price?.randomMin, price?.randomMax);
    price_random = price_random ? price_random : 0;
    console.log("price_random", price_random);
    console.log("random", price_random * Tx_random * balance_random);
    return price_random * Tx_random * balance_random;
  };

  const maxpayout = async (balance_data, tx_data, price_data) => {
    setCalculating(true);
    let random_value = random_mul(balance_data, tx_data, price_data);
    const payout_obj = getPayoutRange("maxpayout", tx_data);
    console.log(
      "random_value object : ",
      balance_data,
      tx_data,
      price_data,
      random_value
    );
    console.log("payout object : ", payout_obj);
    let weight = 0;
    if (payout_obj?.max < random_value) {
      random_value = payout_obj?.max;
    }
    let multiplier;
    let value;
    if (isChecked1) {
      if (isChecked3) {
        weight = payout_obj?.weight4
          ? payout_obj?.weight4 < random_value
            ? payout_obj?.weight4
            : random_value
          : 0;
      } else {
        weight = payout_obj?.weight3
          ? payout_obj?.weight3 < random_value
            ? payout_obj?.weight3
            : random_value
          : 0;
      }
      let _weight = weight ? weight : 0;
      value = _weight.toFixed(3) * price_data.toFixed(3);
      multiplier = value;
    } else {
      if (isChecked3) {
        weight = payout_obj?.weight2
          ? payout_obj?.weight2 < random_value
            ? payout_obj?.weight2
            : random_value
          : 0;
      } else {
        weight = payout_obj?.weight1
          ? payout_obj?.weight1 < random_value
            ? payout_obj?.weight1
            : random_value
          : 0;
      }
      let _weight = weight ? weight : 0;
      value = _weight.toFixed(3) * price_data.toFixed(3);
      multiplier =
        value * (await calls.NML_PRICE(signer, address, value, chain.id));
    }

    console.log("selected weight : ", weight);
    //random_value = weight
    //implement weight function
    console.log("payout : ", random_value);
    let final_weight = weight ? weight : 0; //((parseFloat(price_data ) / value.toFixed(2)) * 100).toFixed(2) = 0.07
    console.log("payout : ", value);
    if (value > 0) {
      setRewardPercent((final_weight * 100).toFixed(0));
    } else {
      setRewardPercent(0);
    }

    setPayout(parseFloat(value));
    setPayoutshow(parseFloat(multiplier.toFixed(4)));
    setCalculating(false);
  };

  const handlePayoutCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setIsChecked1(true);
      setIsChecked2(false);
    } else if (checkboxNumber === 2) {
      setIsChecked1(false);
      setIsChecked2(true);
    }
  };
  const handleDonateCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setIsChecked3(true);
      setIsChecked4(false);
    } else if (checkboxNumber === 2) {
      setIsChecked3(false);
      setIsChecked4(true);
    }
  };

  return (
    <section className="lg:px-16 py-32">
      <div className="grid grid-cols-1 gap-4 py-12 justify-center lg:grid-cols-2 lg:gap-8">
        <div className="right">
          {/* <div className="flex px-4 flex-col gap-4 justify-center md:px-8 lg:flex-row lg:space-x-8">
            <a
              className="rounded-xl  text-xl flex justify-center items-center bg-blue-600 px-12 py-4 font-medium border border-black text-white"
              href="#"
            >
              Discover
            </a>
            <a
              className="rounded-xl text-xl flex justify-center items-center bg-amber-200 px-12 py-4 border border-black font-medium shadow"
              href="#"
            >
              Payout
            </a>
          </div> */}
          <div className="flex flex-col py-20">
            <div className="">
              <ul className="flex flex-col md:flex-row md:justify-between px-4  lg:flex-row font-semibold lg:justify-between">
                <li className="text-2xl font-bold uppercase">
                  NML holding
                  <span className="text-xl flex py-2 px-2">{nmlBalance}</span>
                </li>
                <li className="text-2xl font-bold uppercase">
                  Collected
                  <span className="text-xl flex py-2 px-2">{txCount}</span>
                </li>
                <li className="text-2xl font-bold uppercase">
                  NFT Price
                  <span className="text-xl flex px-2 py-2">{maxPrice} ETH</span>
                </li>
              </ul>
            </div>
            <RewardSlider />
            <div className="flex justify-evenly">
              <div className="flex flex-col lg:flex-row">
                <p className="text-xl py-1 font-semibold">Payout</p>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5"
                    defaultChecked=""
                    checked={isChecked1}
                    onChange={() => handlePayoutCheckboxChange(1)}
                  />
                  <span className="ml-2 text-gray-700">ETH</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5"
                    defaultChecked=""
                    checked={isChecked2}
                    onChange={() => handlePayoutCheckboxChange(2)}
                  />
                  <span className="ml-2 text-gray-700">NML</span>
                </label>
              </div>
              <div className="flex flex-col lg:flex-row">
                <p className="text-xl py-1 font-semibold">Donate</p>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5"
                    defaultChecked=""
                    checked={isChecked3}
                    onChange={() => handleDonateCheckboxChange(1)}
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5"
                    defaultChecked=""
                    checked={isChecked4}
                    onChange={() => handleDonateCheckboxChange(2)}
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
              </div>
            </div>
            <div className="px-6 mt-12">
              <dl className="space-y-0.5 text-sm">
                <div className="flex justify-between">
                  <dt>Donation Fee</dt>
                  <dt>{isChecked4 ? Number(donationFee) : 0} %</dt>
                </div>

                <div className="flex justify-between">
                  <dt>Estimated Total</dt>
                  <dt>
                    ~
                    {(Number(payoutshow) / 100) *
                      (100 -
                        (Number(isChecked4 ? Number(donationFee) : 0) +
                          Number(creatorFee)))}{" "}
                    {isChecked1 ? "ETH" : "NML"}
                  </dt>
                </div>
              </dl>
            </div>

            <div>
              <div className="flex justify-end px-4 mt-12">
                <button
                  style={{ backgroundColor: "#742444" }}
                  href="javascript:void(0)"
                  className="button button--effect  d-sm-block w-full rounded-lg hover:text-white hover:opacity-90 cursor-pointer"
                  disabled={
                    validIds.length == 0 ||
                    buttontxt !== "CLAIM" ||
                    Number(nmlBalance) == 0
                  } //signer, IDs ,address, releaseAmount,isETH, chainId
                  //  onClick={()=> calls.claim(signer , validIds ,address, payout, isChecked1 , chain?.id)}
                  onClick={claim}
                >
                  {buttontxt}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="left py-20 space-y-4 lg:px-4 px-2">
          <div className="w-full  h-[200px] rounded-3xl space--3 lg:space-y-6 justify-center flex flex-col text-white items-center bg-blue-600">
            {isConnected ? (
              <>
                {validIds.length > 0 && Number(nmlBalance) > 0 ? (
                  calculating ? (
                    <h1 className="lg:text-5xl text-4xl text-center">
                      CALCULATING REWARDS ...
                    </h1>
                  ) : (
                    <>
                      <h1 className="lg:text-5xl text-4xl text-center">
                        CONGRATULATIONS !!!
                      </h1>
                      <h3 className="lg:text-3xl text-2xl text-center">
                        Your reward is {rewardPercent}%
                      </h3>
                      <h3 className="lg:text-3xl text-2xl text-center">
                        Claim - {payoutshow} {isChecked1 ? "ETH" : "NML"}
                      </h3>
                    </>
                  )
                ) : (
                  <>
                    <h1 className="lg:text-5xl text-4xl text-center">
                      BUY ASSETS TO GET REWARDS !
                    </h1>

                    <h3 className="lg:text-3xl text-2xl text-center">
                      Reward has been redeemed
                    </h3>
                  </>
                )}
              </>
            ) : (
              <h1 className="lg:text-5xl text-4xl text-center">
                CONNECT WALLET !
              </h1>
            )}
          </div>
          <div className="w-full  h-[400px] md:h-[250px] lg:h-[250px] rounded-3xl space--3 lg:space-y-6  flex flex-col text-white px-4 py-4 bg-blue-600">
            <div className="text-white rounded-xl">
              <h1 className="text-xl font-semibold">
                Maximum Qualification for Reward
              </h1>
              <ul className="ml-1 list-disc space-y-2">
                <li className="text-white">
                  You should have a minimum of 1 B NML tokens
                </li>
                <li className="text-white">
                  Higher the NML token, higher the rewards
                </li>
                <li className="text-white">
                  Get higher rewards if you opt for donate and give 2% for
                  donation
                </li>
                <li className="text-white">
                  If you opt for NML release tax will be applied on your payout
                </li>
              </ul>
            </div>
          </div>
          <div className="py-8">
            <RewardTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSec;
