import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const VideoPage = () => {
    const [queryParams] = useSearchParams();

    useEffect(()=>{
      console.log(queryParams.get("id"))
    },[])

  return (
    <div>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${queryParams.get('id')}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe></div>
  )
}

export default VideoPage