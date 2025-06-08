import React, { useState } from 'react';

const events = [
  { image: './src/assets/event1.png', description: 'Annual Fest - 2024' },
  { image: './src/assets/event2.png', description: 'Tech Workshop: React & Node' },
  { image: './src/assets/event3.png', description: 'Cultural Night with Performances' },
  { image: './src/assets/event2.png', description: 'AI & ML Bootcamp' },
  { image: './src/assets/event1.png', description: 'Photography Contest' },
  { image: './src/assets/event1.png', description: 'Robotics Showcase' },
  { image: './src/assets/event1.png', description: 'Eco Awareness Drive' },
  { image: './src/assets/event2.png', description: 'Open Mic & Talent Show' },
  { image: './src/assets/event1.png', description: 'Alumni Meet 2024' },
  { image: './src/assets/event2.png', description: 'Startup Pitch Day' },
  { image: './src/assets/event1.png', description: 'Blood Donation Camp' },
  { image: './src/assets/event3.png', description: 'Art & Craft Exhibition' },
];

export default function Event() {
  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(events.length);
  };

  const visibleEvents = events.slice(0, visibleCount);

  return (
    <div className="p-6 min-h-screen">

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 max-w-7xl mx-auto space-y-5">
        {visibleEvents.map((event, index) => (
          <div
            key={index}
            className="relative overflow-hidden break-inside-avoid group rounded-lg shadow-lg"
          >
            <img
              src={event.image}
              alt={`Event ${index}`}
              className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-2">
              <p className="text-white text-center text-sm sm:text-base font-semibold">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < events.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="custom-inria px-6 py-3 border border-black text-black text-lg rounded-lg hover:bg-gray-50 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
