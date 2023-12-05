
import { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    // Add more items as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-between max-w-screen-md mx-auto">
      <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 rounded">
        Prev
      </button>
      <div className="flex space-x-[-50px] overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`transform transition-transform duration-300 ${
              index === currentIndex ? 'translate-x-0' : '-translate-x-1/4'
            }`}
          >
            <div className="bg-gray-200 p-4 rounded shadow">
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default Slider;
