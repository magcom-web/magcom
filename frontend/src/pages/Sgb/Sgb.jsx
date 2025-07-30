import React, { useState, useEffect } from 'react';
import { fetchSgbData } from './Sgbdata';
import { useNavigate, useParams } from 'react-router-dom';
import arrowIcon from '../../assets/arrowIcon.svg';

export default function Governance() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [sgbData, setSgbData] = useState([]);

  useEffect(() => {
    const loadSgbData = async () => {
      const data = await fetchSgbData();
      setSgbData(data);
    };

    loadSgbData();
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen text-black p-4 md:p-12">
      <div className="max-w-6xl mx-auto border border-gray-400 px-6 py-8 custom-inria">
        <div className="text-center border-b pb-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold custom-inria">Student Governance Records</h1>
          <p className="text-gray-600 text-sm mt-1">Archived minutes and decisions from SGB meetings.</p>
        </div>

        <div className="flex min-h-screen text-gray-800 custom-inria">
          {/* Sidebar */}
          <aside className="w-48 p-6 border-r">
            <div className="mb-6">
              <h4 className="font-bold text-gray-700">Upcoming <br /> Meeting <br /> Scheduled on</h4>
              <h2 className="text-lg font-extrabold leading-6">May 12,<br />2025<br />3.00 PM</h2>
            </div>
            <div>
              <h3 className="mt-3 font-bold text-base custom-inria">SGB Constitution</h3>
              <a href="#" className="text-blue-800 underline text-sm">View PDF</a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            <h2 className="text-4xl text-center font-extrabold pb-1 mb-4 custom-inria">Meeting Minutes Archive</h2>

            <div className="space-y-6">
              {sgbData.map((meeting, idx) => (
                <div key={idx} className="border-b border-gray-400 pb-3">
                  <h3 className="text-3xl font-semibold custom-inria">{meeting.date}</h3>
                  <h2 className="text-2xl font-bold custom-inria">{meeting.title}</h2>
                  
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-sm text-blue-800 underline mt-1"
                  >
                    {expandedIndex === idx ? 'Hide Full Minutes' : 'View Full Minutes'}
                  </button>
                  {expandedIndex === idx && (
                    <div className="mt-2 text-[15px] leading-relaxed">
                      {Array.isArray(meeting.full)
                        ? meeting.full.map((line, j) => <p key={j}>{line}</p>)
                        : <p>{meeting.full}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
