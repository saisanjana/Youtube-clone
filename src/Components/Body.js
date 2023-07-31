import React from 'react'
import SideBar from './SideBar'
import BodyChips from './BodyChips'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const sideBarStatus = useSelector((state) => state.app.openSideBar);

  return (
    <div className='flex'>
        {sideBarStatus && <SideBar/>}
            <div className='w-5/6'>
                <BodyChips/>
                <Outlet/>
            </div>
    </div>
  )
}

export default Body