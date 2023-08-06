import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { hideSideBar } from '../Redux/appSlice';
import { NestedComments } from '../CommentsData';

const VideoPage = () => {
    const [queryParams] = useSearchParams(),
    dispatch =useDispatch();
    const [liveComments, setLiveComments] = useState([]);
    const [t,setT] = useState("");

    useEffect(()=>{
      console.log(queryParams.get("id"))
      dispatch(hideSideBar())
      let interval = setInterval(()=>{
        let date = new Date()
        setLiveComments(liveComments => {
          let temp = liveComments
          if(temp.length === 100){
            temp.splice(temp.length - 1,1)
          }
          return [{name:"hello", text:date.toLocaleTimeString()},...temp]
        })
      },200)
      return(()=>clearInterval(interval))
    },[])

    const Comment = ({name, text}) => {
      return <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    }

    const CommentList = ({comments}) => {
      return comments.map((comment)=>{
        return (
          <div className='p-2 m-2 border border-l-blue-600'>
            <Comment name={comment.name} text={comment.text}/>
            <CommentList comments={comment.replies} />
          </div>
          );
      })
    }

    const LiveChatComment = ({name, text}) => {
      return <div>
      <span className='mx-2'>{name}</span>
      <span>{text}</span>
      </div>
    }

  return (
    <div className='m-2 p-2'>
    <div className='flex'>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${queryParams.get('id')}?autoplay=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
    <div className='m-2 p-2 border border-black w-96 h-96 overflow-y-scroll flex flex-col-reverse'>
      {
        liveComments.map((l)=>{
          return <LiveChatComment name={l.name} text={l.text}/>
        })
      }
    </div>
    <div>
    <input className='border border-black m-2 px-2' value={t} onChange={(e)=>setT(e.target.value)}/>
    <button className='m-2 bg-green-400 p-2' onClick={()=>{
      setLiveComments(liveComments => {
        let temp = liveComments
        if(temp.length === 100){
          temp.splice(temp.length-1,1)
        }
        return [{name:"Sanjana", text:t},...temp]
      })
    }}> send </button>
    </div>
    </div>
    <div className='m-2 p-2'>
    <CommentList comments={NestedComments}/>
    </div>
    </div>
  )
}

export default VideoPage