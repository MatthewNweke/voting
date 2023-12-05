import ForwardArrowIcon from '../icons/ForwardArrowIcon';

const HomeCard = ({ image, title, description }) => {
  return (
    <div className="w-[23rem] md:w-[20rem] lg:w-[18rem] xl:w-[22rem] h-[17rem] relative mt-[2.5rem] cursor-pointer">
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="flex w-full justify-between items-center absolute bottom-0 p-[0.4rem] md:p-[1rem] bg-[#35480de6] bg-opacity-50 overflow-hidden min-h-[35%]">
        <div className="text-white flex flex-col gap-3">
          <p className="text-sm md:text-lg font-semibold">{title}</p>
          <p className="text-xs md:text-sm font-light">{description}</p>
        </div>

        <ForwardArrowIcon />
      </div>
    </div>
  );
};

export default HomeCard;
