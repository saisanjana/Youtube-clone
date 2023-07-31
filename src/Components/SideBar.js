import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

  const navigate = useNavigate();
  return (
    <div className='my-2 mx-4 p-2 bg-gray-50 shadow-lg overflow-y-scroll h-full'>
      <ul className='my-2 px-4'>
        <li className='my-1' onClick={()=>{navigate("/")}}>Home</li>
        <li className='my-1'>Shorts</li>
        <li className='my-1'>Subscriptions</li>
      </ul>
      <hr/>
      <ul className='my-2 px-4'>
        <li className='my-1'>Library</li>
        <li className='my-1'>History</li>
        <li className='my-1'>Your vedios</li>
      </ul>
      <ul className='my-2 px-4'>
        <li className='my-1'>Subscriptions</li>
        <li className='my-1'>Ndtv</li>
        <li className='my-1'>Flying beast</li>
        <li className='my-1'>say hello</li>
        <li className='my-1'>some random</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        <li className='my-1'>Hello world</li>
        

      </ul>
    </div>
  )
}

export default SideBar