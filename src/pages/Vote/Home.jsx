import Topbar from '../../components/layout/Topbar';
import search from '../../assets/MagnifyingGlass.svg';
import Slider from '../Vote/Slider';
import RangeInput from './RangeInput';
import Notification from '../../components/common/Notification';

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="flex  justify-between gap-[10%] w-[100%]">
        <div className="w-[60%]">
          <div className="mt-10">
            <p className="font-bold text-[1.5rem] mb-5">Voting</p>
          </div>
          <div className="flex items-center relative cursor-pointer mb-10">
            <img src={search} alt="" className="absolute left-3 px-10" />
            <div className="flex items-center gap-3 w-[100%] ">
              <input
                type="text"
                className="cursor-pointer border border-1px border-[#ddd] outline-none rounded-md w-[90%] h-[2.5rem] p-2"
              />
              <button className="h-[100%]  p-2 rounded-md w-[10%] border border-1px border-[#ddd]">
                <img
                  src="/mi_filter.svg"
                  className="relative left-[50%] translate-x-[-50%]"
                  alt=""
                />
              </button>
            </div>
          </div>
          <img src="/fifa.svg" alt="" className="w-[95%]" />
          <p>Suggested polls</p>
          <Slider />

          <div className="flex gap-5 items-center justify-center mt-20">
            <button className="bg-[#4F0DA3] text-white py-2 px-20 rounded-[3rem]">
              All
            </button>
            <button className="bg-white text-[#4F0DA3] py-2 px-20 rounded-[3rem] border border-1px border-[#4F0DA3]">
              Public
            </button>
            <button className="bg-white text-[#4F0DA3] py-2 px-20 rounded-[3rem] border border-1px border-[#4F0DA3]">
              Private
            </button>
          </div>

          <div className=" border-[1px] border-[#E4E4E4] py-5 px-5 w-[100%] rounded-[2rem] mt-5">
            <div className="flex justify-between items-center mr-5">
              <div className=" mx-16 my-5">
                <div className="flex items-center gap-3">
                  <img src="/profile.svg" alt="" />
                  <span>Kayode wills</span>{' '}
                </div>
                <p className="">
                  What is your preferred programming lannguage{' '}
                </p>
              </div>
              <span>Today @ 12:00pm</span>
            </div>

            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />
            <div className="flex justify-between mx-16">
              <div className="flex items-center justify-between w-[100%]">
                <div className="flex gap-2 items-center">
                  <img src="/ion_time.svg" alt="" />
                  <span>2 days remaining</span>
                </div>
                <span>500 votes</span>
              </div>
            </div>
          </div>

          <div className="border-[1px] border-[#E4E4E4] h-auto rounded-[2rem] mt-5 pb-5">
            <div className="flex justify-between items-center mr-5">
              <div className=" mx-16 my-5">
                <div className="flex items-center gap-3">
                  <img src="/profile.svg" alt="" />
                  <span>Kayode wills</span>{' '}
                </div>
                <p className="">
                  What is your preferred programming lannguage{' '}
                </p>
              </div>
              <span>Today @ 12:00pm</span>
            </div>
            <RangeInput programming="Javascript" />
            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />
            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />
            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />
            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />

            <div className="flex items-center justify-between mx-16">
              <div className="flex gap-2 items-center">
                <img src="/ion_time.svg" alt="" />
                <span>2 days remaining</span>
              </div>
              <span>500 votes</span>
            </div>
          </div>

          <div className=" border-[1px] border-[#E4E4E4] py-5 px-5 w-[100%] rounded-[2rem] mt-5">
            <div className="flex justify-between items-center mr-5">
              <div className=" mx-16 my-5">
                <div className="flex items-center gap-3">
                  <img src="/profile.svg" alt="" />
                  <span>Kayode wills</span>{' '}
                </div>
                <p className="">
                  What is your preferred programming lannguage{' '}
                </p>
              </div>
              <span>Today @ 12:00pm</span>
            </div>

            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />
            <div className="flex justify-between mx-16">
              <div className="flex items-center justify-between w-[100%]">
                <div className="flex gap-2 items-center">
                  <img src="/ion_time.svg" alt="" />
                  <span>2 days remaining</span>
                </div>
                <span>500 votes</span>
              </div>
            </div>
          </div>

          <img src="/fifa.svg" alt="" className="w-[100%] mt-5" />

          <div className=" border-[1px] border-[#E4E4E4] py-5 px-5 w-[100%] rounded-[2rem] mt-5">
            <div className="flex justify-between items-center mr-5">
              <div className=" mx-16 my-5">
                <div className="flex items-center gap-3">
                  <img src="/profile.svg" alt="" />
                  <span>Kayode wills</span>{' '}
                </div>
                <p className="">
                  What is your preferred programming lannguage{' '}
                </p>
              </div>
              <span>Today @ 12:00pm</span>
            </div>
            <img
              src="/votebg_img.svg"
              alt=""
              className="w-[95%] relative left-[2.5%]"
            />
            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />
            <div className="flex justify-between mx-16">
              <div className="flex items-center justify-between w-[100%]">
                <div className="flex gap-2 items-center">
                  <img src="/ion_time.svg" alt="" />
                  <span>2 days remaining</span>
                </div>
                <span>500 votes</span>
              </div>
            </div>
          </div>
          <div className=" border-[1px] border-[#E4E4E4] py-5 px-5 w-[100%] rounded-[2rem] mt-5">
            <div className="flex justify-between items-center mr-5">
              <div className=" mx-16 my-5">
                <div className="flex items-center gap-3">
                  <img src="/profile.svg" alt="" />
                  <span>Kayode wills</span>{' '}
                </div>
                <p className="">
                  What is your preferred programming lannguage{' '}
                </p>
              </div>
              <span>Today @ 12:00pm</span>
            </div>

            <RangeInput programming="Python" />
            <RangeInput programming="Javascript" />
            <div className="flex justify-between mx-16">
              <div className="flex items-center justify-between w-[100%]">
                <div className="flex gap-2 items-center">
                  <img src="/ion_time.svg" alt="" />
                  <span>2 days remaining</span>
                </div>
                <span>500 votes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] mt-10">
          <div className="cursor-pointer relative rounded-[0.8rem] w-[100%] border-[1px] border-[#E4E4E4] h-14">
            <div className="flex items-center gap-2 absolute top-[50%] translate-y-[-50%] left-[0.5rem]">
              <img src="/bx_poll.svg" alt="" className="" />
              <span>My polls</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center rounded-[0.8rem] mt-10 w-[100%] border-[1px] border-[#E4E4E4] h-[30rem]">
            <div className=" border-[1px] border-[#E4E4E4] h-[30%] w-[95%] border-l-0 border-r-0 border-t-0 py-4">
              <p className='font-bold text-[1.3rem] mb-2'>Notifications</p>
              
              <Notification profileName="Akin Collins"  permission="requested" activity="access to your" poll="poll" req1="Accept" req2="Decline"/>

            </div>
            <div className=" border-[1px] border-[#E4E4E4] h-[25%] border-l-0 border-r-0 w-[95%] pt-5">
            <Notification profileName="Kolade Favour" permission="accepted" activity="your request to access her"  poll="poll" req1="View poll"/>
            </div>
            <div className=" border-[1px] border-[#E4E4E4] h-[22.5%] border-l-0 border-r-0 w-[95%] pt-5">
            <Notification activity="Your poll has ended" req1="View result"/>
            </div>
            <div className=" border-[1px] border-[#E4E4E4] h-[22.5%] border-l-0 border-r-0 border-b-0 w-[95%] pt-5">
            <Notification profileName="Kayode Shank" activity="made payments for 20 votes"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
