import React from "react";
import CountDown from "./RewardCountDown";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import apis from "../../apis";
import { useEthersSigner } from "../../utils/signer";
import calls from "../../apis/calls";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useState } from "react";

const RewardTable = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const [tableData, setTableData] = useState([]);

  const { chain } = useNetwork();

  const signer = useEthersSigner();
  const library = usePublicClient();

  useEffect(() => {
    if (address && signer) {
      const fetchData = async () => {
        let { data } = await apis.getAllPayouts(address);
        console.log("payouts 11", data);
        setTableData(data);
      };
      const result = fetchData()
        // make sure to catch any error
        .catch(console.error);
    } else {
    }
  }, [isConnected, address, signer]);

  const claim = async (id) => {
    console.log("INN", id);
    try {
      let { data } = await apis.getDetailedPayout(id);
      console.log(data);
      if (address && signer) {
        //signer, IDs, address, releaseAmount, isETH , isDonate , chainId
        const _claim = await calls.releaseETH(
          signer,
          chain?.id,
          data.tokenIds,
          address,
          data.payout,
          data.nonce,
          data.isETH,
          data.isDonate,
          data.validator_signature,
          data.verifier_signature
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-800" style={{ backgroundColor: "#742444" }}>
          <tr>
            <th className="px-4 py-2 text-white">Payout</th>
            <th className="px-4 py-2 text-center  text-white">Timer</th>
            <th className="px-4 py-2 text-white">Status</th>
            <th className="px-4 py-2 text-white"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, index) => (
              <tr key={index} className="bg-white border-4 border-gray-200">
                <td className="px-4 py-2">
                  {item.payout} {item.isETH ? "ETH" : "NML"}
                </td>
                <td className="px-4 py-2 text-center">
                  <CountDown initialTime={item.time} />
                </td>
                <td className="px-4 py-2">
                  {item.status ? "Claimed" : "Pending"}
                </td>
                <td className="py-2">
                  {item.time * 1000 > Date.now() || item.status == true ? (
                    <button
                      disabled={true}
                      onClick={() => claim(item._id)}
                      className="bg-gray-300 text-sm hover:text-white py-2 px-8 rounded-xl"
                    >
                      Claim
                    </button>
                  ) : (
                    <button className="bg-red-900 text-sm hover:text-white py-2 px-8 rounded-xl">
                      Claim
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 text-center">
                <h4 className="text-center">NO PREVIOUS PAYOUTS !!</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RewardTable;
