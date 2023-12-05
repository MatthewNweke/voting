const SelectComponent = ({ disabled, label, error, register, elements }) => {
  return (
    <div className="grid gap-1 w-full">
      <p className="text-[#35480D] font-normal text-sm">{label}</p>
      <div className="grid gap-1">
        <div
          className={
            error
              ? 'relative inline-flex items-center bg-gray-50 border border-red-600 rounded-sm text-[#35480D]'
              : 'relative inline-flex items-center bg-gray-50 border border-none rounded-sm text-[#35480D]'
          }
        >
          <select
            className="w-full py-2 px-3 outline-none bg-inherit rounded-sm no-number-arrows cursor-pointer"
            {...register}
            disabled={disabled}
          >
            {elements?.map((element, index) => (
              <option key={index}>
                <p className="hover:bg-[#35480D99] cursor-pointer">{element}</p>
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
