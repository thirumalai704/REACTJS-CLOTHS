import React from "react"
import TopBar from './TopBar'
import icons from '../assets/assets'
import SideBar from "./SideBar"
import { NavLink, Outlet } from "react-router-dom"
function NavBar() {
  return (
    // parent div
    <div className="w-full  ">
      {/*first child for header   */}

      <div className="w-full fixed z-40 bg-bgclr top-0 left-0">
        <TopBar/>
      </div>

      {/* second child for sidebar and other section  */}
      <div className="bg-ligh pt-2 flex   ">
        {/* sidebar fixed  */}
        <div className="w-112 pl-6    bg-bgclr z-30  mt-24 ">
          <SideBar/>
           <NavLink  
           to={'/'}
             className= {({isActive})=>` ${isActive ?"text-primary" : "text-text"}  flex items-center space-y-3   space-x-6` }>
            <img className='w-6 h-6' src={icons.logout} alt="" />
            <h2 className='flex self-start text-xl font-medium'>Logout</h2>
            </NavLink>
        </div>

        {/* page routing  */}

        <div className="pt-34 w-full pr-20   pl-3 pb-6 ">
          <Outlet/>
        </div>
      </div>

      {/* end  */}
    </div>
  )
}

export default NavBar
