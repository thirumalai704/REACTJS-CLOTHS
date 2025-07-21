import React from "react"
import icons from "../assets/assets"
import textileData from "../assets/textileData"

function DashBoard() {
  const typesOfPpl = [
    { id: "1", icon: icons.Vector2, Qunatity: "500", Type: "mens" },
    { id: "1", icon: icons.Vector, Qunatity: "500", Type: "Women" },
    { id: "2", icon: icons.Group, Qunatity: "500", Type: "Kids" },
    { id: "3", icon: icons.Mask, Qunatity: "500", Type: "Accessaries" },
  ]

  return (
    <div className="flex-col space-y-8 w-full flex">
      {/* first div  */}
      <div className="flex  flex-wrap bg-bgclr  gap-x-3 ">
        {typesOfPpl.map((item) => (
          <div className="flex items-center flex-1 rounded-md py-4 space-x-8 px-4 ring-1 ring-primary ">
            <img src={item.icon} alt="" />
            <div>
              <h4 className="font-medium text-lg">{item.Qunatity}</h4>

              <p className="text-text  font-semibold">{item.Type}</p>
            </div>
          </div>
        ))}
      </div>


      {/*second sales graph  */}   

      {/*third order dettails  */}
      <div className="flex bg-bgclr  flex-wrap justify-between ">
        {/*third cil order detaails  */}
        <div className="border p-4 pb-0  rounded-2xl border-primary">
          <div className="flex justify-between px-4">
            <h1 className="text-lg font-bold text-primary tracking-wide">
              Orders
            </h1>
            <button className="border border-primary font-semibold px-2 rounded text-text py-1">
              View All
            </button>
          </div>
          <table className="table-fixed   p-3">
            <thead className="">
              <tr className="border-b text-text">
                <th className="px-4 py-5 text-left">S.No</th>
                <th className="px-4 text-left">Name</th>
                <th className="px-4 text-left">Location</th>
                <th className="px-4 text-left">Mobile number</th>
                <th className="px-4 text-left">Product</th>
              </tr>
            </thead>
            <tbody>
              {textileData.orders.map((item, idx) => (
                <tr
                  className={
                    idx !== textileData.orders.length - 1 ? "border-b " : ""
                  }
                >
                  <td className="px-4 py-3">{item.sno}</td>
                  <td className="px-4">{item.name}</td>
                  <td className="px-4">{item.location}</td>
                  <td className="px-4">{item.mobile}</td>
                  <td className="px-4">{item.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*third chil low stack  */}
        <div className="border p-4 pb-0  rounded-2xl border-primary">
          <h1 className="text-lg font-bold text-primary tracking-wide">
            Orders
          </h1>
          <table className="table-fixed   p-3">
            <thead className="">
              <tr className="border-b text-text">
                <th className="px-4 py-5 text-left">Code</th>
                <th className="px-4 text-left">Product</th>
                <th className="px-4 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {textileData.lowStock.map((item, idx) => (
                <tr
                  className={
                    idx !== textileData.orders.length - 1 ? "border-b " : ""
                  }
                >
                  <td className="px-4 py-3">{item.code}</td>
                  <td className="px-4">{item.product}</td>
                  <td className="px-4 text-red-600 font-semibold">
                    {item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4th  div  */}
       

       <div className="bg-bgclr">
        <div className="border p-4 pb-0  rounded-2xl border-primary">
          <div className="flex justify-between px-4">
            <h1 className="text-lg font-bold text-primary tracking-wide">
              Orders
            </h1>
            <button className="border border-primary font-semibold px-2 rounded text-text py-1">
              View All
            </button>
          </div>
          <table className="table-auto w-full  p-3">
            <thead className="">
              <tr className="border-b text-text">
                <th className="px-4 py-5 text-left">S.No</th>
                <th className="px-4 text-left">Date</th>
                <th className="px-4 text-left">Category</th>
                <th className="px-4 text-left"> Sub Category</th>
                <th className="px-4 text-left">Amount</th>
                <th className="px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {textileData.expense.map((item, idx) => (
                <tr
                  className={
                    idx !== textileData.orders.length - 1 ? "border-b " : ""
                  }
                >
                  <td className="px-4 py-3">{item.sno}</td>
                  <td className="px-4">{item.date}</td>
                  <td className="px-4">{item.category}</td>
                  <td className="px-4">{item.subcategory}</td>
                  <td className="px-4">{item.amount}</td>
                  <td className={ item.status=="Paid" ?"px-4 text-primary " : "text-red-500 px-4" }>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       </div>

     

    </div>
  )
}

export default DashBoard
