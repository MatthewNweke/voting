const PollResult = () => {
  return (
    <div>
      <div className="py-5 w-[40rem] border-[1px] border-[black] my-10 mx-auto px-5">
        <div className="border-b-[1px] border-black">
          <div className="flex gap-3 items-center my-5">
            <img src="/ep_back.svg" alt="" />
            <p className="font-bold">Poll result</p>
          </div>
          <p>What is your preferred programming language?</p>
          <p>252 votes</p>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum minus rerum doloribus quia deserunt distinctio dolor facilis, eaque, vel dignissimos consequatur nemo illum doloremque. Nostrum id ex quidem tempore nihil.</p>
      </div>
    </div>
  );
};

export default PollResult;
