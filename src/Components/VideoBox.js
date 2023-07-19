import React from 'react'

const VideoBox = (props) => {
    const {data} = props;
    const {id,snippet,statistics} = data;
    console.log(id, snippet, statistics)
    // console.log(data)
  return (
    <div className='w-56 my-3 shadow-sm cursor-pointer p-1 mx-2'>
        <img
        src={snippet.thumbnails.medium.url}
        />
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
    </div>
  )
}

export default VideoBox