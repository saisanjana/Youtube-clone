import React from 'react'
import { Link } from "react-router-dom";

const VideoBox = (props) => {
    const {data} = props;
    const {id,snippet,statistics} = data;
    console.log(id, snippet, statistics)
    // console.log(data)
  return (
    <div className='w-56 my-3 shadow-sm cursor-pointer p-1 mx-2'>
    <Link to={`/video?id=${id}`}>
        <img
        src={snippet.thumbnails.medium.url}
        />
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
    </Link>
    </div>
  )
}

export default VideoBox