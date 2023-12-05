import items from "../../data/sidebar.json";

import SidebarItem from '../navigation/SidebarItem';

export default function Sidebar({ title }) {

  const isActive = (path) => {
    return window.location.pathname === path;
  };
  return (
    <div className="  bg-[#6B911B] min-h-screen justify-items-end items-center  font-black">
      <div className=" ml-auto flex flex-col gap-8 h-2/5  w-full">
        <h2 className='text-[#fff] m-3 break-words'> {title} </h2>
        <div className="flex flex-col space-y-2">

          {items.map((item, index) => <SidebarItem key={index} item={item} active={isActive(item.path)} />)}
        </div>
        <p className="text-white">lorem</p>
      </div>
    </div>
  );
}
