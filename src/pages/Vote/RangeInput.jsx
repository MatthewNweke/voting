import React, { useState, useRef } from 'react';

const RangeInput = (props) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const percentage = (e.clientX - sliderRect.left) / sliderRect.width;
      const newValue = Math.min(100, Math.max(0, Math.round(percentage * 100)));
      setSliderValue(newValue);
    }
  };

  

  return (
    <div
      className="flex mt-5 items-center justify-center "
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
        {/* {props.programming} */}
      <div
        ref={sliderRef}
        className="relative left-[50%] translate-x-[-50%] w-[95%] h-8 bg-black rounded-md cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        
        <p className='text-white z-10 relative top-1 left-3'>{props.programming}</p>
        <div
          className="absolute top-0 left-0 h-full bg-[#4F0DA3] rounded-md"
          style={{ width: `${sliderValue}%` }}
        />
      </div>
      <div className="relative right-5 text-white">{sliderValue}%</div>
    </div>
  );
};

export default RangeInput;
