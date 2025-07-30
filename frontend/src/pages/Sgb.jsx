import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import image from "../assets/img1.jpeg"

const meetings = [
  {
    date: 'March 12, 2025',
    title: 'Budget Allocation',
    summary: [
      'dfsghfv yufg rhjueshdbdj',
      'fsgjgfvbejhdbgvjm',
    ],
    full: [
      'This is the full content of the meeting minutes. It elaborates on all decisions taken and members present. Detailed budget breakdown, discussions, and voting outcomes are included here.' ,
      'dbhsjgdxbh burei ghruie bvdfjhbv kfh bdjbv uer oi urueo bnfk jgreo jrdoei jvr objoidbj edfbmk lerjboeri bre9ire b',
      'wefgewu  nmebg ugehgu hjg rhknbkfd jnbl larkpo hewguiherui ghitriojth oitjhio4u5 u34y98788oikef dfhf dgbihrgbjkfdhgkd fbjfdkjlkdjgolijsdlh',
      'fhdg yeir gherui ureh gojrh ioreu hoeiujdiovkcl jifdoj iof reiphpe rjerojh erojgoper kbkvmldf fbkm',
      'ygeidue hierj goi iorugj igrej fdoisvm ireugire g9843 ufhdvo jgvlk m ',
    ],
  },
  {
    date: 'March 12, 2025',
    title: 'Budget Allocation',
    summary: [
      'kdljgo kldsjg klsjdg lgjlsldgj ksjdfoi io oik oooooooooo iou',
      'lgsdkljglsjkd gjkldsfjg lkdsgjkld ghlkdj o klsjfoie iooueu',
    ],
    full: [
      'More detailed notes from the meeting, including funding for student projects, library improvements, and allocations to clubs.',
    ],
  },
  {
    date: 'March 12, 2025',
    title: 'Budget Allocation',
    summary: [
      'kdljgo kldsjg klsjdg lgjlsldgj ksjdfoi io oik oooooooooo iou',
      'lgsdkljglsjkd gjkldsfjg lkdsgjkld ghlkdj o klsjfoie iooueu',
    ],
    full: [
      'Final notes and follow-ups on the budget revision for the current semester.',
    ],
  },
];

export default function Governance() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  text-black font-serif p-4 md:p-12">
      <div className="max-w-6xl mx-auto border border-gray-400 px-6 py-8 custom-inria">
        
        <div className="text-center border-b pb-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold custom-inria">Student Governance Records</h1>
          <p className="text-gray-600 text-sm mt-1">Archived minutes and decisions from SGB meetings.</p>
        </div>

        <div className="flex min-h-screen  text-gray-800 custom-inria">
          {/* Sidebar */}
          <aside className="w-48 p-6 border-r ">
            <div className="mb-6">
              <h4 className="font-bold text-gray-700">Upcoming <br/> Meeting <br/> Scheduled on</h4>
              <h2 className="text-lg font-extrabold leading-6">May 12,<br />2025<br />3.00 PM</h2>
            </div>
            <div>
              {/* <img
                src={image}
                alt="SGB Building"
                className="h-24 object-cover rounded"
              /> */}
              <h3 className="mt-3 font-bold text-base custom-inria">SGB Constitution</h3>
              <Link to="#" className="text-black underline text-sm">View PDF</Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            <h2 className=" text-4xl text-center font-extrabold  pb-1 mb-4 custom-inria">Meeting Minutes Archive</h2>

            <div className="space-y-6">
              {meetings.map((meeting, idx) => (
                <div key={idx} className="border-b border-gray-400 pb-3">
                  <h3 className="text-3xl font-bold custom-inria">{meeting.title}</h3>
                  <p className="text-sm font-semibold custom-inria">{meeting.date}</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-1 custom-inria">
                    {meeting.summary.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <button
  onClick={() => toggleExpand(idx)}
  className="text-sm !text-black underline mt-1"
  style={{ color: 'black !important' }}
>
  {expandedIndex === idx ? 'Hide Full Minutes' : 'View Full Minutes'}
</button>
                  {expandedIndex === idx && (
                    <div className="mt-2 text-[15px] leading-relaxed">
                      {meeting.full.map((line, j) => (
                        <p
                          key={j}
                        >
                          {line}
                        </p>
                      ))}
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
