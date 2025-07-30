import axios from "axios";
import React, { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_PUBLIC_API_URL;
const API_DOMAIN = import.meta.env.VITE_PUBLIC_API_DOMAIN;




// {
//     year: "2023",
//     title: "MAGAZINE",
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
//     necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
//     cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//     perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//     consequuntur ex exercitationem`,
//     link: "/pdfs/magazine-2023.pdf",
//   }
let editions = [];

export const fetcharchivesData = async () => {
  try {
    const response = await axios.get(`${API_URL}/archives?populate=*`);

    if (!response.data.data || response.data.data.length === 0) {
      return [];
    }

    editions = response.data.data.map((archive) => {
      const edition = archive.attributes || archive;

      const pdfUrl = edition.link?.url ? `${API_DOMAIN}${edition.link.url}` : "";


      return {
        id: archive.id,
        title: edition.title,
        description: edition.description,
        year: edition.year,
        link: pdfUrl, // ✅ full PDF URL
      };
    });

    return editions;
  } catch (err) {
    return [];
  }
};

export { editions };
