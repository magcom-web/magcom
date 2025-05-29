import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { articlesData } from './ArticlesData';
import arrowIcon from '../../assets/arrowIcon.svg';



const ArticlePage = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const article = articlesData.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div className="custom-inria text-center mt-10 text-red-600 text-xl">Article not found.</div>;
  }

  return (
    <div className=" custom-inria px-4 md:px-20 py-10">
            <button onClick={()=>navigate(`/articles`)}className='group flex gap-1 mt-5 active:border transition-all duration-75 px-2 py-2 active:border-black'><img src={arrowIcon} alt="arrowicon" className='transition-transform duration-150 group-hover:-translate-x-1 pt-2 h-5 w-5 scale-x-[-1]'/>Back to Articles</button>
      
      <h1 className="justify-center items-center flex text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-2">By {article.author} | {article.date}</p>
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full max-w-2xl mb-6 rounded-lg"
        />
      )}
      <p className="text-justify text-lg leading-8 ">{article.content}</p>
    </div>
  );
};

export default ArticlePage;
