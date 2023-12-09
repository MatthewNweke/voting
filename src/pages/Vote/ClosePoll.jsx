import React from 'react';

const ClosePoll = () => {
  return (
    <div>
      <div className='relative my-20 mx-auto border-[#ddd] border-[2px] w-[25rem] p-5'>
    
            <p className='text-center font-bold mb-5 text-[1.2rem]'>Close poll?</p>
            <img src="/exit.svg" alt="" className='absolute top-8 right-5 cursor-pointer' />
        
        
        <p className='text-center'>
          This poll will not be made available anymore and would be marked as
          ended. Are you sure you want to close this poll?
        </p>
        <button className=' mx-auto block my-5 bg-[#FF0000] text-white rounded-[8rem] px-10 py-2'>Close poll</button>
      </div>
    </div>
  );
};

export default ClosePoll;
