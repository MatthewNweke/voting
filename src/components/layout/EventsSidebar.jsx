import items from "../../data/eventsSidebar.json";
import signout from '../../assets/SignOut.svg'
import SidebarItem from '../navigation/SidebarItem';

export default function EventsSidebar({ title }) {
  const isActive = (path) => {
    return window.location.pathname === path;
  };
  return (
    <div className="  bg-[#4F0DA3] min-h-screen justify-items-end items-center  font-black">
      <div className=" ml-auto flex flex-col gap-8 h-2/5  w-full">
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} active={isActive(item.path)} />
          ))}
        </div>
        <button className="flex gap-3 items-center mt-12 ml-2 bg-[transparent]">
          <img src={signout} alt="" className="w-4 h-4 md:w-8 md:h-8"/>
          <span className=" bg-[transparent] text-white">Sign Out</span>
        </button>
       
      </div>
    </div>
  );
}

