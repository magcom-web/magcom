import React from 'react'
import Articlecard from '../../components/Articlecard/Articlecard'
import { articles } from './Articles'

const Articles = () => {
    
  return (
    <div className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      
      {articles.map((article) => (<>
          
        <Articlecard
          id={article.id}
          key={article.id}
          title={article.title}
          author={article.author}
          date={article.date}
          content={article.content}
          imageUrl={article.imageUrl}
        /></>
      ))}
    </div>
  )
}

export default Articles