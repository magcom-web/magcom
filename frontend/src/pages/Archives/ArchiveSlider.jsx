import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const editions = [
  {
    year: "2023",
    title: "MAGAZINE",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
    necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
    cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
    perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
    consequuntur ex exercitationem`,
    link: "/pdfs/magazine-2023.pdf",
  },
  {
    year: "2022",
    title: "MAGAZINE",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
    necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
    cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
    perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
    consequuntur ex exercitationem`,
    link: "/pdfs/magazine-2022.pdf",
  },
  {
    year: "2021",
    title: "MAGAZINE",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
    necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
    cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
    perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
    consequuntur ex exercitationem`,
    link: "/pdfs/magazine-2021.pdf",
  },
];

export default function ArchiveSlider() {
    return (
      <section className="min-h-screen py-10 px-4 flex flex-col items-center">
        <h1 className="custom-inria text-4xl md:text-6xl font-bold text-center text-gray-900 mb-8">
          Looking Back: <span>Archives</span>
        </h1>
  
        <div className="relative w-full max-w-6xl bg-[url('/src/assets/Archive.png')] bg-cover bg-center border border-[#3d2b1f] p-6 md:p-10">
          {/* Arrows */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 text-5xl text-gray-700 font-thin z-10">
            ←
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 text-5xl text-gray-700 font-thin z-10">
            →
          </button>
  
          <Swiper
            modules={[Navigation, Pagination, EffectCards]}
            effect="cards"
            grabCursor={true}
            slideToClickedSlide={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{ clickable: true }}
            className="w-full swiper-no-shadow"
          >
            {editions.map((edition, idx) => (
              <SwiperSlide
                key={idx}
                className="pointer-events-auto z-20 cursor-pointer"
              >
                <div className="flex justify-center items-center h-[740px]">
                  <div
                    className="relative bg-cover bg-center border border-[#e5dccc] rounded-xl p-8 pt-24 max-w-[550px] w-full h-[806px]"
                    style={{
                      backgroundImage: "url('/src/assets/paper_text.png')",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="text-left flex flex-col h-full text-[#3d2b1f]">
                      <h2 className="custom-imfell text-4xl font-extrabold text-center tracking-wider text-black border-t-4 border-b-4 border-[#3d2b1f] py-2 mb-6">
                        {edition.title}
                      </h2>
                      <p className="text-4xl font-bold text-black text-center py-2 mb-6">
                        {edition.year} <span className="custom-inria">EDITION</span>
                      </p>
                      <div className="custom-inria text-sm leading-relaxed text-justify flex-grow whitespace-pre-line text-black">
                        {edition.description}
                        <div className="custom-inria text-right text-sm underline text-black hover:text-gray-600 mt-4">
                          <a
                            href={edition.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read More........
                          </a>
                        </div>
                        <div className="border-t-4 border-[#3d2b1f] mt-6 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
  