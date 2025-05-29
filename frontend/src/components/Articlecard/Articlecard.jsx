import React from 'react'
import arrowIcon from '../../assets/arrowIcon.svg';
import { useNavigate } from 'react-router-dom';
const Articlecard = ({id,title,author,date,content,imageUrl}) => {
  const navigate=useNavigate();
  let maxLength = 550;
  if(imageUrl) maxLength=200;
  const slicedContent =
    content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  return (
    <div className=" box-border custom-inria rounded p-4 shadow-lg hover:border hover:border-gray-400 transition-shadow duration-300">
      <h1 className="text-center text-2xl font-bold mb-2">{title}</h1>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <div className='flex justify-between'><p className="text-sm text-gray-600">{author}</p>
      <p className="text-sm text-gray-700 mb-4">{date}</p></div>
      <p className="text-gray-900 text-justify">
{slicedContent}...     </p>
      <button onClick={()=>navigate(`/articles/${id}`)}className='group flex gap-1 mt-5 active:border transition-all duration-75 px-2 py-2 active:border-black'>Read Article<img src={arrowIcon} alt={title} className='transition-transform duration-150 group-hover:translate-x-1 pt-2 h-5 w-5'/></button>
    </div>
  )
} 

export default Articlecard
