const Contact = () => {
  return (
    <div className="mx-auto h-[7rem] w-[90%] md:w-[80%] xl:w-[40%] flex items-center justify-between border border-[#35480D] my-[2rem]">
      <p className="h-full w-full bg-[#DAE3C6] text-[#35480D] font-medium text-2xl md:text-4xl flex items-center justify-center">
        Contact Us
      </p>

      <div className="h-full w-full text-[#35480D] flex flex-col justify-center items-center">
        <p className="text-xl md:text-4xl">0901 234 5678</p>
        <p className="text-xs md:text-sm text-center italic">
          Open 24 hours everyday of the week
        </p>
      </div>
    </div>
  );
};

export default Contact;
