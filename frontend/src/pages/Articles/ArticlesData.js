import axios from "axios";
import React, { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_PUBLIC_API_URL;
const API_DOMAIN = import.meta.env.VITE_PUBLIC_API_DOMAIN;



// export const articlesData = [
//     {
//       id: 1,
//       title: 'Title of the Article ',
//       author: 'Name of Writer',
//       date: '20-05-2025',
//       content:
//         `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
//          necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
//          cupiditate? 
//                Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem  Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem`,
//       imageUrl: '',
//     },
//     {
//       id: 2,
//       title: 'Title of the Article',
//       author: 'Name of Writer',
//       date: '20-05-2025',
//       content:
//         `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
//          necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
//          cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem  Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem`,
//       imageUrl: '',
//     },
//     {
//       id: 3,
//       title: 'Title of the Article',
//       author: 'Name of Writer',
//       date: '20-05-2025',
//       content:
//         `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
//          necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
//          cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem  Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem`,
//       imageUrl: '',
//     },

//     {
//       id: 4,
//       title: 'Title of the Article Icecream',
//       author: 'Name of Writer',
//       date: '20-05-2025',
//       content:
//         `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
//          necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
//          cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem  Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem`,
//       imageUrl: 'https://via.placeholder.com/400x250',
//     },
//     {
//       id: 5,
//       title: 'Title of the Article',
//       author: 'author',
//       date: '20-05-2025',
//       content:
//         `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
//          necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
//          cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem  Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem`,
//       imageUrl: 'https://via.placeholder.com/400x250',
//     },
//     {
//       id: 6,
//       title: 'Title of the Article',
//       author: 'Name of Writer',
//       date: '20-05-2025',
//       content:
//         `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci animi similique quaerat
//          necessitatibus fuga commodi quidem eligendi. Voluptatibus ab fuga ut temporibus natus quibusdam 
//          cupiditate? Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem  Nisi et inventore sequi rem, officia fugit eius maiores voluptatem assumenda 
//          perspiciatis expedita error ducimus tempora eaque voluptas quidem dicta laborum,
//           consequuntur ex exercitationem`,
//       imageUrl: '',  
//     },
//   ];







let articlesData = [];

export const fetchArticlesData = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles?populate=*`);
    if (!response.data.data || response.data.data.length === 0) {
      return [];
    }

    articlesData = response.data.data.map((article) => {
      const articleData = article.attributes || article;

      const imageUrl = articleData.imageUrl?.length
        ? `${API_DOMAIN}${articleData.imageUrl[0].formats?.medium?.url || articleData.imageUrl[0].url}`
        : "";

      return {
        id: article.id,
        title: articleData.title,
        author: articleData.author,
        date: articleData.date,
        content: articleData.content,
        imageUrl: imageUrl,
      };
    });

    return articlesData;
  } catch (err) {
    return [];
  }
};

export { articlesData };
