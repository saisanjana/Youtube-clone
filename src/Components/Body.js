import React from 'react'
import SideBar from './SideBar'
import BodyChips from './BodyChips'
import VediosContainer from './VediosContainer'
import { useSelector } from 'react-redux'

const Body = () => {
  const sideBarStatus = useSelector((state) => state.app.openSideBar);

  return (
    <div className='flex'>
        {sideBarStatus && <SideBar/>}
            <div>
                <BodyChips/>
                <VediosContainer/>
            </div>
    </div>
  )
}

export default Body