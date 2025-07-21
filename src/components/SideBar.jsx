import React from 'react'
import icons from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom';
function SideBar() {
   const navigate=  useNavigate()
 const navlist = [
    { id:11,
      icons: icons.dashboard,
      label: "DashBoard",
      link: "/",
    },
    { id:12,
      icons: icons.product,
      label: "Upload Products",
      link: "/UploadProduct",
    },
    { id:13,
      icons: icons.order,
      label: "Orders",
      link: "/Orders",
    },
    {  id:14,
      icons: icons.delivery,
      label: "Delivery Tracking",
      link: "/DeliveryTracking",
    },
    {  id:15,
      icons: icons.stocks,
      label: "Stocks",
      link: "/stocks",
    },
    { id:16,
      icons: icons.expense,
      label: "Expense",
      link: "/expense",
    },
    { id:17,
      icons: icons.review,
      label: "Reviews & Ratings",
      link: "/Reviews",
    },
    { id:18,
      icons: icons.ad,
      label: "Advertisement",
      link: "/ad",
    },
  ];

  return (
    <div className='bg-white flex flex-col   h-full justify- mt-2'>
          {
            navlist.map((items)=>(
            <NavLink
            key={items.id}
            to={items.link}
        
             className= {({isActive})=>` ${isActive ?"text-primary" : "text-text"} flex items-center space-y-14   space-x-6` }>
            <img className='w-6 h-6' src={items.icons} alt="" />
            <h2 className='flex self-start text-xl font-medium '>{items.label}</h2>
            </NavLink>))
          }
          
    </div>
  )
}

export default SideBar