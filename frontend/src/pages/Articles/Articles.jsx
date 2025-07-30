import React, { useState, useEffect } from 'react';
import Articlecard from '../../components/Articlecard/Articlecard';
import { articlesData } from './ArticlesData';
import {fetchArticlesData} from './ArticlesData';

const Articles = ({ showSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
const [allArticles, setAllArticles] = useState([]);
const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
  const getArticles = async () => {
    const data = await fetchArticlesData();
    setAllArticles(data);
    setFilteredArticles(data);
  };

  getArticles();
}, []);
  useEffect(() => {
    
    if (searchTerm.trim() === '') {
      setFilteredArticles(articlesData);
    } else {
      const filtered = articlesData.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="px-4 md:px-20 p-4">
      {showSearch && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search articles by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d2b1f]"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredArticles.map((article) => (
          <Articlecard
            id={article.id}
            key={article.id}
            title={article.title}
            author={article.author}
            date={article.date}
            content={article.content}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
