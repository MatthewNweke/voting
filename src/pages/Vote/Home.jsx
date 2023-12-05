import Topbar from '../../components/layout/Topbar';
import search from '../../assets/MagnifyingGlass.svg';
import Slider from '../Vote/Slider';
import RangeInput from './RangeInput';

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
            <img src={search} alt="" className="absolute left-3" />
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
            <img src="/votebg_img.svg" alt="" className='w-[95%] relative left-[2.5%]' />
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
         <div className='rounded-[0.8rem] w-[100%] border-[1px] border-[#E4E4E4] h-12'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
