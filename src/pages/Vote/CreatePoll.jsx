import React from 'react';

const CreatePoll = () => {
  return (
    <div>
      <form
        action=""
        className="relative py-5 w-[40rem] border-[1px] border-[black] my-10 mx-auto px-5"
      >
        <div className="flex gap-3 items-center my-5">
          <img src="/ep_back.svg" alt="" />
          <p className="font-bold">Create poll</p>
        </div>
        <div className="flex gap-2 flex-col  justify-center mb-3">
          <label htmlFor="">Poll question</label>
          <input
            type="text"
            className=" border-[1px] border-[#D0D5DD] h-[3rem] rounded-[0.8rem]"
          />
        </div>
        <div className="flex gap-2 flex-col  justify-center mb-3">
          <label htmlFor="">Option 1</label>
          <input
            type="text"
            className="border-[1px] border-[#D0D5DD] h-[3rem] rounded-[0.8rem]"
          />
        </div>

        <div className="flex gap-2 flex-col justify-center mb-3">
          <label htmlFor="">Option 2</label>
          <input
            type="text"
            className="border-[1px] border-[#D0D5DD] h-[3rem] rounded-[0.8rem]"
          />
        </div>

        <div className='flex float-right gap-2  items-center'>
            <img src="/addsymbol.svg" alt="" />
            <span>Add option</span>
        </div>

        <div className="flex gap-2 flex-col  justify-center mb-3 clear-right">
          <label htmlFor="">Poll duration</label>
          <select
            name=""
            id=""
            className="border-[1px] border-[#D0D5DD] h-[3rem] rounded-[0.8rem] px-3"
          >
            <option value="">Select one</option>
            <option value="">loqwerem</option>
            <option value="">lorkdbfem</option>
            <option value="">lorkrbgem</option>
            <option value="">liirrem</option>
          </select>
        </div>

        <div className="flex gap-2 flex-col justify-center mb-3">
          <label htmlFor="">Poll type</label>
          {/* <input type="text"  /> */}
          <select
            name=""
            id=""
            className="border-[1px] border-[#D0D5DD] h-[3rem] rounded-[0.8rem] px-3"
          >
            <option value="">Select one</option>
            <option value="">loqwerem</option>
            <option value="">lorkdbfem</option>
            <option value="">lorkrbgem</option>
            <option value="">liirrem</option>
          </select>
        </div>

        <div className="flex gap-3 items-center my-5">
          <img src="/picture.svg" alt="" />
          <span>Add image or video</span>
        </div>
        <img src="/addimage.svg" alt="" />
        <input
          type="submit"
          value="Create poll"
          className="bg-[#4F0DA3] text-[white] px-10 py-2 my-0 mx-auto block cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreatePoll;
