import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
import profile4 from '../../assets/profile4.png';

const Assign = (props) => {
  return (
    <div className="">
      <table className=" border-none border-[1px] border-[#00000040] w-[90%] h-[8rem]  rounded-lg bg-white">
        <tr className="border-[1px] text-center border-[#00000040] h-[3rem]">
          <th rowSpan={2} className="border-[1px] border-[#00000040] w-[20%]">
            {props.event}
          </th>
          <td className="border-[1px] border-[#00000040]">Assign to</td>
          <td className="border-[1px] border-[#00000040]">What to do</td>
          <td className="border-[1px] border-[#00000040]">due date</td>
        </tr>
        <tr className="text-center">
          <td className="border-[1px]  flex flex-col items-center h-[100%] justify-center gap-1 border-[#00000040]">
            <div className="flex gap-1 justify-center">
              <img src={profile1} className="h-10 w-10" alt="" />
              <img src={profile2} className="h-10 w-10" alt="" />
              <img src={profile3} className="h-10 w-10" alt="" />
              <img src={profile4} className="h-10 w-10" alt="" />
            </div>
            <div className="h-10 w-10 flex justify-center items-center bg-[#BFD141] rounded-[50%] p-1">
              <span>+11</span>
            </div>
          </td>
          <td className="border-[1px] w-[30%] py-2 justify-center items-center border-[#00000040]">
            Buy all the food stuffs needed for this wedding, ensure they are
            well preserved, then prepare the food for the wedding and decorate
            the event auditorium.
          </td>
          <td className="border-[1px] w-[25%] border-[#00000040]">{props.date}</td>
        </tr>
      </table>
    </div>
  );
};

export default Assign;
