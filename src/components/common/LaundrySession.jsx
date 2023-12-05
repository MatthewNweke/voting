import { FaPlus } from "react-icons/fa";
export default function LaundrySession({ key, item }) {
    // const hasWhiteBackground = bg === "#fff";
    // const boxShadowStyle = hasWhiteBackground ? "box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);" : "";

    return (
        <div key={key} className={`flex gap-2 items-center rounded-lg   w-full`}
        >
            <img src={item.img} alt="" className='h-full w-24 rounded-lg' />
            <div className="">
                <h2 className='text-[16px] font-[700] text-[#35480D]'>{item.task}</h2>
                <p className='text-[12px] font-[500] text-[#35480D] '>{item.type} <span className="inline ml-4 font-bold">X{item.qty}</span></p>
                <div className='mt-[20px] text-[10px] text-[#35480D] flex items-center'>
                    <img src="/timer.svg" className='w-1/6 h-[24] inline' alt="" /> <span className="ml-1 self-end">Due by</span>
                    <span className="ml-1 font-bold self-end">  {item.timeDue} </span> </div>
            </div>
            <div className="ml-auto self-start flex flex-col items-end justify-between  gap-1 ">
                <p className='text-[12px] text-right text-[#35480D] font-bold '>{item.room}</p>
                <button className="mt-10 bg-[#35480D] text-[#fff] rounded-lg px-4 flex items-center gap-3 py-1"> <FaPlus style={{ color: '#fff' }} /> <span className="text-[12px]"> Finish</span> </button>
            </div>
        </div>
    );
}
