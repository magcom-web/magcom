import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const YearSlider = ({ currentIndex, setCurrentIndex }) => {
  const years = [2022, 2023, 2024];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < years.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const itemWidth = 4; 
  const gap = 2.6 ; 
  const totalWidth = itemWidth + gap;
  const transformX = `calc(50% - ${itemWidth/2}rem - ${currentIndex * totalWidth}rem)`;

  return (
    <div className="font-serif w-full max-w-lg md:max-w-2xl mx-auto relative">
    
      <div className="absolute left-0 right-0 top-0 h-px bg-gray-800"></div>

      <div className="flex items-center justify-between py-1">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="text-black px-4 py-2 disabled:opacity-30 flex-shrink-0"
        >
          <ArrowLeft size={32} className="md:w-8 md:h-8 w-6 h-6" />
        </button>

        <div className="flex-1 overflow-hidden relative h-16 flex items-center">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(${transformX})` }}
          >
            {years.map((year, index) => {
              const isSelected = index === currentIndex;
              return (
                <div
                  key={year}
                  className={`flex-shrink-0 text-center transition-all duration-200 flex flex-col items-center
                    ${isSelected ? 'z-10' : 'z-0'}`}
                  style={{
                    width: `${itemWidth}rem`,
                    marginRight: `${gap}rem`,
                  }}
                >
                  {isSelected && (
                    <div className="w-full h-[2px] bg-black mb-1" />
                  )}
                  <span
                    className={`block ${isSelected ? 
                      'font-bold text-black text-4xl md:text-5xl border-t-2 border-b-2 border-black py-1' : 
                      'text-gray-400 text-3xl md:text-4xl'}`}
                  >
                    {year}
                  </span>
                  {isSelected && (
                    <div className="w-full h-[2px] bg-black mt-1" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === years.length - 1}
          className="text-black px-4 py-2 disabled:opacity-30 flex-shrink-0"
        >
          <ArrowRight size={24} className="md:w-8 md:h-8 w-6 h-6" />
        </button>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-800"></div>
    </div>
  );
};

export default YearSlider;