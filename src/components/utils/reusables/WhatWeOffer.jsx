const WhatWeOffer = ({ title, subtitle, description }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-[#35480D] text-white flex flex-col gap-3 p-3">
        <p className="font-bold text-xl">{title}</p>
        <p className="tex-sm lg:text-base">{subtitle}</p>
      </div>
      <p className="flex-1 text-[#35480D] text-xs lg:text-base p-3 overflow-y-scroll no-scrollbar">
        {description}
      </p>
    </div>
  );
};

export default WhatWeOffer;
