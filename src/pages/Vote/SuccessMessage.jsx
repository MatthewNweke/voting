import React from 'react';

const SuccessMessage = () => {
  return (
    <div>
      <div className=" my-20 mx-auto border-[#ddd] border-[2px] w-[25rem] p-5 rounded-[0.8rem]">
        <img
          src="/success.svg"
          alt=""
          className="my-0 mx-auto"
        />

        <p className="text-center">
        Your withdrawal request has been recieved and is being processed
        </p>
        <button className=" mx-auto block my-5 bg-[#4F0DA3] text-white  px-10 py-2 rounded-[0.4rem]">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
