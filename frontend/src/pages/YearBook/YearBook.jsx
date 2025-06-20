import React, { useState } from 'react';
import YearSlider from '../../components/YearBookSlider/YearBookSlider';

const YearBook = () => {
    // State to track the current index
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <div className="flex flex-col items-center justify-center relative ">
            <YearSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <div className=" text-center w-[1232px] h-[106px] left-[93px] top-[446px] font-serif font-bold text-[88px] leading-[106px] text-black">
                <h2>CLASS of {2022 + currentIndex}</h2>
            </div>
        </div>
    );
};

export default YearBook;
