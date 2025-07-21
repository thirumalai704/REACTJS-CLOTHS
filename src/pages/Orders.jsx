import React from 'react'

import {orderData} from '../assets/orderData'
import { NavLink, useNavigate } from 'react-router-dom'
function Orders() {
 const navigate= useNavigate()
  const result = orderData
  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl text-primary font-semibold">Orders</h1>
       <NavLink to={"/CustomerDetails"} >invoice</NavLink>
       
      </div>

      <div className="bg-bgclr">
        <div className="p-4 pb-0 rounded-2xl">
          <table className="table-auto w-full p-3">
            <thead>
                <tr className="border-b text-text">
                <th className="px-4 py-5 text-left">S.No</th>
                <th className="px-4 text-left">Date</th>
                <th className="px-4 text-left">Name</th>
                <th className="px-4 text-left">Location</th>
                <th className="px-4 text-left">Contact Number</th>
                <th className="px-4 text-left">Category</th>
                <th className="px-4 text-left">Sub Category</th>
                <th className="px-4 text-left">Product</th>
                <th className="px-4 text-left">Quntity</th>
                <th className="px-4 text-left">Price</th>
                <th className="px-4 text-left">Staus</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, idx) => (
                <tr
                 onClick={(idx)=>navigate(  '/CustomerDetails',{state:item})}
                  key={idx}
                  className={`${idx !== result.length - 1 ? "border-b" : ""} cursor-po`}
                >
                  <td className="px-4 py-3">{idx +1}</td>
                  <td className="px-4">{item.orderDate}</td>
                  <td className="px-4">{item.customerName}</td>
                  <td className="px-4">{item.shippingLocation}</td>
                  <td className="px-4">{item.phoneNo}</td>
                  <td className="px-4">{item.category}</td>
                  <td className="px-4">{item.subCategory}</td>
                  <td className="px-4">{item.productName}</td>
                  <td className="px-4">{item.quantity}</td>
                  <td className={"px-4"}>{item.price}</td>
                  <td className={`${item.orderStatus=='Cancelled' ?"text-del" : "text-primary"} px-4 text-black`}>{item.orderStatus}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders