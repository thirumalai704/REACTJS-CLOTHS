import React from 'react'
import {ArrowBigDown, BellDotIcon, ChevronDownIcon, Search, SearchIcon} from 'lucide-react'
function TopBar() {
  return (
    <div className=' flex items-center justify-between  w-full pl-8 pr-20  py-6 ' >
      {/* logo  */}
      <div className='flex gap-x-44 w-2xl'>
          <h1 style={{fontFamily: "'Abhaya Libre', serif"}} className='text-primary text-5xl font-bold '>.Cloths</h1>

          {/* search bar  */}
          <div className='ring-text rounded-md ring bg-ligh flex items-center min-w-md py-2 px-2'>
            <SearchIcon  stroke='#005226' />
            <input placeholder='Search.....' className='font-semibold tracking-wide text-lg capitalize outline-none text-text ml-10 '  type="text" />
          </div>
      </div>


          {/* admin profile  */}
          <div className='flex  gap-x-8 items-center'>
           {/* <BellDotIcon/>  */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005226" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot-icon lucide-bell-dot"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"/><circle cx="18" stroke='#FF7272'fill='#FF7272' cy="8" r="3"/></svg>
           <div className='h-10 w-0.5 bg-text/70'></div>
             <div className='flex gap-x-6'>
              <img src={'/profile.png'} alt="" />
                <div>
                  <p className='font-medium' >Josep</p>
                  <p className='text-sm '>Admin</p>
                </div>
                < ChevronDownIcon className='self-end'/>
             </div>
          </div>
    </div>
  )
}

export default TopBar