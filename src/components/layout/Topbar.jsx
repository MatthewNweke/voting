import { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import search from '../../assets/MagnifyingGlass.svg';

export default function Topbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      img: '/Andrew.svg',
      name: 'Roberto Sanchez',
      status: 'Profile',
    },
    {
      img: '/Harold.svg',
      name: 'Gaucho Ronaldinho',
      status: 'Profile',
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" bg-[#fff] h-16 w-full  rounded-lg flex justify-between items-center px-[10px] mt-10">
      <div className="flex gap-1 items-center cursor-pointer">
        <img src={logo} alt="" className="w-12 h-12" />
        <p className="text-[#4F0DA3] text-[1rem] font-bold">2geda</p>
      </div>
      <h3 className="font-[700]">{title}</h3>

      <div className="flex items-center md:w-3/6">
        <div className='flex items-center relative cursor-pointer'>
          <input
            type="text"
            className="cursor-pointer border border-1px border-black outline-none rounded-md w-[28rem] h-[2.3rem] p-2"
          />
          <img src={search} alt="" className='absolute right-3'/>
        </div>
        <Link
          to={'/spa/notifications'}
          className="no-underline text-black mx-auto"
        >
          <div className="relative ">
            <AiOutlineBell style={{ fontSize: '30px' }} />
            <p className="absolute top-0 right-0 bg-[#4F0DA3] p-[2px] h-4 text-center w-4 rounded-[50%]  text-[8px] text-[#fff]  ">
              3
            </p>
          </div>
        </Link>
        <div className="flex items-center flex-col gap-1 justify-center">
          <img
            src="/profile.svg"
            className="w-12 h-auto hidden md:block"
            alt=""
          />
          <div className="hidden md:block">
            {/* <h3 className='font-bold text-[#35480D]'>Roberta Sanchez</h3> */}
            <p>Profile</p>
          </div>
          <button onClick={toggleMenu} className="bg-transparent">
            {/* <BsChevronDown style={{ fontSize: '25px' }} /> */}
          </button>
          {/* Menu */}
          <div className="relative">
            {isOpen && (
              <div className="absolute top-7 z-40 right-0 mt-2 w-[200px] bg-white rounded-md shadow-lg">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 flex items-center gap-2"
                  >
                    <img src={item.img} alt="" className="w-10 h-full" />
                    <div className="">
                      <h3 className="text-[10px] text-[#35480D] font-bold">
                        {item.name}
                      </h3>
                      <p className="text-[9px] text-[#35480D]">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
