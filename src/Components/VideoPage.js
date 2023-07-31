import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { hideSideBar } from '../Redux/appSlice';
import { NestedComments } from '../CommentsData';

const VideoPage = () => {
    const [queryParams] = useSearchParams(),
    dispatch =useDispatch();

    useEffect(()=>{
      console.log(queryParams.get("id"))
      dispatch(hideSideBar())
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

  return (
    <div className='m-2 p-2'>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${queryParams.get('id')}?autoplay=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
    <div className='m-2 p-2'>
    <CommentList comments={NestedComments}/>
    </div>
    </div>
  )
}

export default VideoPage