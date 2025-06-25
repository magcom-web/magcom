import React, { useState } from 'react';
import YearSlider from '../../components/YearBookSlider/YearBookSlider';
import yearBookPhoto from '../../assets/year_book.svg';
import { ArrowRight } from 'lucide-react';

const batchData = Array(6).fill({
    img: yearBookPhoto,
    quote: '“Lorem ipsum integer vel pellentesque sit biben.”',
    branch: 'CSE',
});

const YearBook = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <div className="flex flex-col items-center justify-center relative mt-10 px-2">
            <YearSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            {/* Responsive CLASS of ... */}
            <div className="text-center w-full font-serif font-bold text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-tight text-black my-6">
                <h2>CLASS of {2022 + currentIndex}</h2>
            </div>
            <div className="w-full flex flex-col items-center font-serif">
                <h2 className="text-xl md:text-2xl font-bold mt-4 mb-6">B-Tech</h2>
                {/* Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-12 gap-y-8 md:gap-y-12 mt-8 mb-8">
                    {batchData.map((batch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <img
                                src={batch.img}
                                alt="Batch"
                                className="w-full max-w-[395px] h-[220px] md:h-[263px] object-cover border-[3px] md:border-[4px] border-black"
                            />
                            <div className="mt-4 text-center">
                                <div className="italic text-base md:text-lg mb-1">{batch.quote}</div>
                                <div className="font-bold text-sm md:text-base">{batch.branch}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full border-t border-black mt-10 mb-2"></div>
                {/* Responsive Add Batch section */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full mb-6 gap-4">
                    <span className="font-serif text-lg md:text-xl font-bold">
                        Add Your Batch Photo to Annual Yearbook Collection
                    </span>
                    <button className="flex items-center border border-black px-4 py-1 rounded font-serif text-base md:text-lg font-medium hover:bg-black hover:text-white transition-colors">
                        Submit <ArrowRight className="ml-2" />
                    </button>
                </div>
                <div
                    className="text-center mt-4 font-normal text-[20px] md:text-[24px] leading-[100%] tracking-[0%] font-[Inknut_Antiqua,serif]"
                >
                 
                </div>
            </div>
        </div>
    );
};

export default YearBook;