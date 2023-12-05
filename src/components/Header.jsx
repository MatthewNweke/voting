import '../CSS/Task.css';

const Header = ({ item, bgColor, disableHover,textColor, ...props }) => {
  return (
    <div
      className={`fixed start-0  flex ${item} justify-end gap-7 xl:gap-16 ${bgColor} shadow-lg w-full min-h-[7rem] max-h-[7rem]  font-medium text-base pb-[1rem] px-[2rem] lg:px-[5rem] xl:px-[12rem] z-10`}
    >
      <p
        className={
          disableHover
            ? 'cursor-pointer transition-all'
            : 'hover:text-[#35480D] '
        }
        style={{ color: textColor }}
      >
        {props.first}
      </p>
      <p
        className={
          disableHover
            ? 'cursor-pointer transition-all'
            : 'hover:text-[#35480D]'
        }
        style={{ color: textColor }}
      >
        {props.second}
      </p>
      <p
        className={
          disableHover
            ? 'cursor-pointer transition-all'
            : 'hover:text-[#35480D]'
        }
        style={{ color: textColor }}
      >
        {props.third}
      </p>
      <p
        className={
          disableHover
            ? 'cursor-pointer transition-all'
            : 'hover:text-[#35480D]'
        }
        style={{ color: textColor }}
      >
        {props.fourth}
      </p>
      <p
        className={
          disableHover
            ? 'cursor-pointer transition-all'
            : 'hover:text-[#35480D]'
        }
        style={{ color: textColor }}
      >
        {props.fifth}
      </p>

      <div className="flex justify-between items-center  gap-[15px]  absolute right-0 mr-2 ">
        <p
          className={
            disableHover
              ? 'cursor-pointer transition-all'
              : 'hover:text-[#35480D]'
          }
          style={{ color: textColor }}
        >
          {props.sixth}
        </p>
        <p
          className={
            disableHover
              ? 'cursor-pointer transition-all'
              : 'hover:text-[#35480D]'
          }
          style={{ color: 'white',backgroundColor:'#354808',padding:'0.5rem 1rem',borderRadius:'0.4rem '}}
        >
          {props.seventh}
        </p>
      </div>
    </div>
  );
};

export default Header;
