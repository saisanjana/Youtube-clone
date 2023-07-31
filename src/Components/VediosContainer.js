import React, { useEffect, useState } from 'react'
import { LIST_VIDEOS_API } from '../constants.js';
import VideoBox from './VideoBox.js';

const VediosContainer = () => {

  const [videoList, setVideoList] = useState(null);

  useEffect(()=>{
    fetchVideos();
  },[])

  const fetchVideos = async() => {

    const list = await fetch(LIST_VIDEOS_API).then(async (response)=>{
      let data = await response.json();
      console.log(data)
      setVideoList(data.items);
    })

  }
  if(!videoList){
    return 'Loading......';
  }

  return (
    <div className='flex flex-wrap ml-3'>
    {
      videoList.map((vid)=>{
        return <VideoBox key={vid.id} data={vid}/>
      })
    }
    </div>
  )
}

export default VediosContainer