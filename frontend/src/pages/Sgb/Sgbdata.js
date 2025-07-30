import axios from "axios";
import React, { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

// export const Sgbdata = [
//   {
//     date: 'March 12, 2025',
//     title: 'Budget Allocation',
//     summary: [
//       'dfsghfv yufg rhjueshdbdj',
//       'fsgjgfvbejhdbgvjm',
//     ],
//     full: [
//       'This is the full content of the meeting minutes. It elaborates on all decisions taken and members present. Detailed budget breakdown, discussions, and voting outcomes are included here.' ,
//       'dbhsjgdxbh burei ghruie bvdfjhbv kfh bdjbv uer oi urueo bnfk jgreo jrdoei jvr objoidbj edfbmk lerjboeri bre9ire b',
//       'wefgewu  nmebg ugehgu hjg rhknbkfd jnbl larkpo hewguiherui ghitriojth oitjhio4u5 u34y98788oikef dfhf dgbihrgbjkfdhgkd fbjfdkjlkdjgolijsdlh',
//       'fhdg yeir gherui ureh gojrh ioreu hoeiujdiovkcl jifdoj iof reiphpe rjerojh erojgoper kbkvmldf fbkm',
//       'ygeidue hierj goi iorugj igrej fdoisvm ireugire g9843 ufhdvo jgvlk m ',
//     ],
//   },
//   {
//     date: 'March 12, 2025',
//     title: 'Budget Allocation',
//     summary: [
//       'kdljgo kldsjg klsjdg lgjlsldgj ksjdfoi io oik oooooooooo iou',
//       'lgsdkljglsjkd gjkldsfjg lkdsgjkld ghlkdj o klsjfoie iooueu',
//     ],
//     full: [
//       'More detailed notes from the meeting, including funding for student projects, library improvements, and allocations to clubs.',
//     ],
//   },
//   {
//     date: 'March 12, 2025',
//     title: 'Budget Allocation',
//     summary: [
//       'kdljgo kldsjg klsjdg lgjlsldgj ksjdfoi io oik oooooooooo iou',
//       'lgsdkljglsjkd gjkldsfjg lkdsgjkld ghlkdj o klsjfoie iooueu',
//     ],
//     full: [
//       'Final notes and follow-ups on the budget revision for the current semester.',
//     ],
//   },
// ];


export const fetchSgbData = async () => {
  try {
    const response = await axios.get(`${API_URL}/sgbs`);

    if (!response.data.data?.length) {
      return [];
    }

    return response.data.data.map((sgb) => {
      const item = sgb.attributes || sgb;
      return {
        id: sgb.id,
        title: item.title,
        full: item.full,
        date: item.date,
        summary: item.summary,
      };
    });
  } catch (err) {
    return [];
  }
};