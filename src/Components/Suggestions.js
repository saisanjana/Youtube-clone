import React from 'react'
import { LIST_VIDEOS_BY_QUERY_API } from '../constants';
import { useDispatch } from 'react-redux';
import { setVideos } from '../Redux/appSlice';

const Suggestions = (data) => {
  const {suggestionsArray,setShowSearchResults} = data;
  const dispatch = useDispatch();

  const onSuggestionClick = async (suggestion) => {
    console.log("hello")
      const data = await fetch(LIST_VIDEOS_BY_QUERY_API+suggestion);
      const results = await data.json();
      dispatch(setVideos(results.items))
      setShowSearchResults(false)
  }
    
  return (
    <div className='fixed bg-white m-2 p-3 shadow-lg self-center left-[500px]' id={'sBox'}>
        {suggestionsArray.map((suggestion, index) => {
            return <div 
            key={index} 
            className='cursor-pointer' 
            onClick={()=>{
              onSuggestionClick(suggestion)
            }}>
            {suggestion}
            </div>
        })}
    </div>
  )
}

export default Suggestions