import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';

function CustomerDetails() {
    const { state:customer }= useLocation()
    const navigate = useNavigate()
    
   
  return (
    <div className="p-4">
      <h1 className='text-xl font-semibold mb-4 text-text'>Customer Details</h1>

      
        <div  className="mb-6   p-4">
          <table className="table-auto w-full text-left ">
            <tbody>
              <tr>
                <th className=" p-2 font-medium w-1/3">Customer Name</th>
                <td className=" p-2">{customer.customerName}</td>
              </tr>
              <tr>
                <th className=" p-2 font-medium">Date of Order</th>
                <td className=" p-2">{customer.orderDate}</td>
              </tr>
              <tr>
                <th className=" p-2 font-medium">Contact Number</th>
                <td className=" p-2">{customer.phoneNo}</td>
              </tr>
              <tr>
                <th className=" p-2 font-medium">Email ID</th>
                <td className=" p-2">{customer.email || "Not provided"}</td>
              </tr>
              <tr>
                <th className=" p-2 font-medium">Billing Address</th>
                <td className=" p-2">{customer.shippingLocation}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
            <h1 className='text-xl font-semibold mb-4 text-text'>Product Details</h1>
            <div className="mb-6   p-4">
                 <table className="table-auto w-full p-3">
            <thead>
                <tr className="border-b text-text">
                <th className="px-4 py-5 text-left">S.No</th>
                <th className="px-4 text-left">Product Code</th>
                {/* <th className="px-4 text-left">Name</th> */}
                {/* <th className="px-4 text-left">Location</th> */}
                {/* <th className="px-4 text-left">Contact Number</th> */}
                <th className="px-4 text-left">Category</th>
                <th className="px-4 text-left">Sub Category</th>
                <th className="px-4 text-left">Product Name</th>
                <th className="px-4 text-left">Quntity</th>
                <th className="px-4 text-left">Price</th>
                {/* <th className="px-4 text-left">Staus</th> */}
              </tr>
            </thead>
            <tbody>
             
                <tr
               
                
                //   className={`${idx !== customer.length - 1 ? "border-b" : ""} `}
                >
                  <td className="px-4 py-3">{1}</td>
                  <td className="px-4">{customer.orderDate}</td>
                  {/* <td className="px-4">{customer.customerName}</td> */}
                  {/* <td className="px-4">{customer.shippingLocation}</td> */}
                  {/* <td className="px-4">{customer.phoneNo}</td> */}
                  <td className="px-4">{customer.category}</td>
                  <td className="px-4">{customer.subCategory}</td>
                  <td className="px-4">{customer.productName}</td>
                  <td className="px-4">{customer.quantity}</td>
                  <td className={"px-4"}>{customer.price}</td>
                  
                  {/* <td className={`${customer.orderStatus=='Cancelled' ?"text-del" : "text-primary"} px-4 text-black`}>{customer.orderStatus}</td> */}
                
                </tr>
                {/* <tr className='w-full text-right'><h1>total :</h1></tr> */}
            
            </tbody>
          </table>
           <h1>Total : {customer.price}</h1>

            </div>

            <div className='w-full'>
                <button onClick={()=>{navigate("/GenerateInvoice", {state:customer})}} className='text-right cursor-pointer font-medium text-white bg-primary px-3  '>Generate Invoice</button>
            </div>
        </div>
      
    </div>
  )
}

export default CustomerDetails
