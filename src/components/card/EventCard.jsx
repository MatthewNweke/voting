const EventCard = (props) => {
  return (
    <div className="mt-10">
      <div className="flex bg-[white] w-[28rem] rounded-[8px] h-[10rem]">
        <img src={props.img} alt="" className="h-[100%] w-[45%]" />
        <div className="w-[100%] relative">
          <ul className="mt-0 mb-0 inline-block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <li className="font-bold text-[0.9rem] mb-2">{props.heading}</li>
            {/* <li>{props}</li> */}
            <div className="text-[0.8rem] flex flex-col gap-4">
              <div className="flex gap-1">
                <img src={props.dateicon} alt="" className="w-5 h-5" />
                <li>{props.date}</li>
              </div>
              <div className="flex gap-1">
                <img src={props.timeicon} alt="" className="w-5 h-5" />
                <li>{props.time}</li>
              </div>
              <div className="flex gap-1">
                <img src={props.locationimg} alt="" className="w-5 h-5" />
                <li>{props.id}</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
