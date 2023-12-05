import { useState } from 'react';
function RangeInput(props) {
  const [rangeValue, setRangeValue] = useState(50); // Initialize the range value

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div>
      <div className="flex border-gray-700 border-[1px] w-[25rem] justify-around items-center h-[5rem] rounded-[10px]">
        <div className="flex justify-center flex-col">
          <label htmlFor="range" className="font-bold">
            {props.activity}
          </label>
          <p>{props.timeLeft}</p>
        </div>
        <div className="">
          <input
            type="range"
            id="range"
            name="range"
            value={rangeValue}
            min="0"
            max="100"
            onChange={handleRangeChange}
            className=" h-4 rounded-md py-1 bg-red-500 appearance-none"
          />
          <p className="">{rangeValue}%</p>
        </div>
      </div>

      
    </div>
  );
}

export default RangeInput;
