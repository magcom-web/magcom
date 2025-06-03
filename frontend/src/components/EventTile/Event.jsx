import React, { useState } from 'react';

const images = [
  './src/assets/event1.png',
  './src/assets/event2.png',
  './src/assets/event3.png',
  './src/assets/event2.png',
  './src/assets/event1.png',
  './src/assets/event1.png',
  './src/assets/event1.png',
  './src/assets/event2.png',
  './src/assets/event1.png',
  './src/assets/event2.png',
  './src/assets/event1.png',
  './src/assets/event3.png',
];

export default function Event() {
  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(images.length);
  };

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div className="p-6 min-h-screen">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-10 space-y-10 max-w-7xl mx-auto">
        {visibleImages.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden ">
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full shadow-sm object-cover"
            />
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < images.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="custom-inria px-6 py-4 bg-white text-black text-lg border border-black rounded hover:bg-gray-100 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
