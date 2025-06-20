import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const YearSlider = ({ currentIndex, setCurrentIndex }) => {
  const years = [2022, 2023, 2024];
  const itemWidthRem = 4; 
  const gapRem = 4; 

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < years.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const totalItemWidthRem = itemWidthRem + gapRem;
  const transformX = `calc(50% - ${itemWidthRem / 2}rem - ${currentIndex * totalItemWidthRem}rem)`;

  return (
    <div className="font-serif w-full max-w-lg text-black">
      <div className="w-full h-px bg-gray-400"></div>
      <div className="flex items-center justify-between py-5">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="disabled:opacity-30 transition-opacity"
        >
          <ArrowLeft size={32} />
        </button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${transformX})` }}
          >
            {years.map((year, index) => {
              const isSelected = index === currentIndex;
              return (
                <div
                  key={year}
                  className="relative text-center flex-shrink-0"
                  style={{ width: `${itemWidthRem}rem`, marginRight: `${gapRem}rem` }}
                >
                  <span className={`text-5xl ${isSelected ? "font-bold text-black" : "text-gray-400"}`}>
                    {year}
                  </span>
                  {isSelected && (
                    <>
                      <div className="absolute -top-3 left-0 w-full h-1 bg-black"></div>
                      <div className="absolute -bottom-3 left-0 w-full h-1 bg-black"></div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === years.length - 1}
          className="disabled:opacity-30 transition-opacity"
        >
          <ArrowRight size={32} />
        </button>
      </div>
      <div className="w-full h-px bg-gray-400"></div>
    </div>
  );
};

export default YearSlider;
