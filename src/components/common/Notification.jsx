const Notification = (props) => {
  return (
    <div>
      <div className="flex items-center gap-2 ">
        <img src="/profile.svg" alt="" className="" />
        <div className="text-[0.9rem]">
          <span className="font-bold">{props.profileName}</span>{' '}
          <span>{props.permission} {props.activity}</span>{' '}
          <span className="font-bold">{props.poll}</span>
          <p>10 mins</p>
          <div className="flex gap-3 items-center mt-2">
            <span className="text-[#4F0DA3] cursor-pointer">{props.req1}</span>
            <span className="cursor-pointer">{props.req2}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
