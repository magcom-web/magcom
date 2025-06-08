import React from 'react';
import teamPic from '../../assets/team.png';

const teamData = {
  editorialBoard: [
    { name: 'Full Name', role: 'Editor-in-Chief' },
    { name: 'Full Name', role: 'Associate editor' },
    { name: 'Full Name', role: 'Associate editor' },
    { name: 'Full Name', role: 'Associate editor' },
  ],
  techTeam: [
    { name: 'Full Name', role: 'Tech Lead' },
    { name: 'Full Name', role: 'Frontend Developer' },
    { name: 'Full Name', role: 'Backend Developer' },
    { name: 'Full Name', role: 'UI/UX Designer' },
  ],
};

const TeamSection = ({ title, members }) => (
  <div className="mb-16">
    <h2 className="text-xl md:text-3xl font-semibold border-b pb-2 mb-8 text-center md:text-left">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <div key={index} className="text-center">
          <div className="relative w-32 h-44 sm:w-36 sm:h-48 md:w-40 md:h-52 mx-auto mb-4 rounded overflow-hidden shadow-md">
            <img
              src={teamPic}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#fdfaf5]/80 via-white/30 to-transparent pointer-events-none" />
          </div>
          <p className="font-bold text-sm md:text-lg lg:text-xl">{member.name}</p>
          <p className="text-xs md:text-sm lg:text-base italic text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

const TeamPage = () => {
  return (
    <div className="relative text-black px-4 sm:px-8 md:px-20 py-10 font-serif overflow-hidden">
      <h1 className="custom-inria text-4xl md:text-6xl font-bold text-center text-gray-900 mb-8">
        Meet the Team Behind the Pages
      </h1>
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-xl mx-auto">
        Lorem ipsum nibh dictumst iaculis kljsdk lskjflk k ksjd
      </p>
      <h2 className="text-lg md:text-2xl font-semibold text-center border-y py-3 mb-10">
        Voices Behind the Vision
      </h2>

      <TeamSection title="EDITORIAL BOARD" members={teamData.editorialBoard} />
      <TeamSection title="TECH TEAM" members={teamData.techTeam} />
    </div>
  );
};

export default TeamPage;
