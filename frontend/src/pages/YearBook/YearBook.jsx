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
        <div className="flex flex-col items-center justify-center relative mt-10">
            <YearSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <div className=" text-center w-[1232px] h-[106px] left-[93px] top-[446px] font-serif font-bold text-[88px] leading-[106px] text-black">
                <h2>CLASS of {2022 + currentIndex}</h2>
            </div>
            <div className="w-full flex flex-col items-center font-serif">
                <h2 className="text-2xl font-bold mt-4 mb-6">B-Tech</h2>
                <div className="grid grid-cols-3 gap-x-12 gap-y-12 mt-8 mb-8">
                    {batchData.map((batch, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <img
                                src={batch.img}
                                alt="Batch"
                                className="w-[395px] h-[263px] object-cover border-[4px] border-black"
                            />
                            <div className="mt-4 text-center">
                                <div className="italic text-lg mb-1">{batch.quote}</div>
                                <div className="font-bold text-base">{batch.branch}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" mt-10 mb-2"></div>
                <div className="flex items-center justify-center w-full mb-6">
                    <span className="font-serif text-xl font-bold mr-4">
                        Add Your Batch Photo to Annual Yearbook Collection
                    </span>
                    <button className="flex items-center border border-black px-4 py-1 rounded font-serif text-lg font-medium hover:bg-black hover:text-white transition-colors">
                        Submit <ArrowRight className="ml-2" />
                    </button>
                </div>
                <div
                    className="text-center mt-4 font-normal text-[24px] leading-[100%] tracking-[0%] font-[Inknut_Antiqua,serif]"
                >
                    {/* MAGCOM@NITC */}
                </div>
            </div>

        </div>
    );
};

export default YearBook;
