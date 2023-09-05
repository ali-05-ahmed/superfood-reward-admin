import React from "react";

const TextFields = () => {
  return (
    <section className="px-20 py-20 space-y-3">
      <div className="">
        <div className="flex justify-between">
          <h6>Pause</h6>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>UnPause</h6>

          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>ownerTransfer</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address token"
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address _recipient"
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="uint256 _amount"
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="bool _isEth"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>setFungibleMaxholding</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address token"
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="uint256 _max"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>enableFungibleContract</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address newContract"
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="bool _enable"
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="bool _isDefault"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>enableNonFungibleContract</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address newContract"
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="bool _enable"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>setuniswapRouterAddress</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address _uniswapRouterAddress"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>setCreatorPercent</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="uint256 _percent"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>setDonatePercent</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="uint256 _percent"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>setFreezeTime</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="uint256 _time"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>transferVerifier</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address newVerifier"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>transferCreator</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address newCreator"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>transferBeneficiary</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address newBeneficiary"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h6>transferValidator</h6>
          <div className="relative mt-2 rounded-md shadow-sm flex">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="address newValidator"
            />
          </div>
          <button className="bg-gray-900 px-4 rounded-full">Write</button>
        </div>
      </div>
    </section>
  );
};

export default TextFields;
