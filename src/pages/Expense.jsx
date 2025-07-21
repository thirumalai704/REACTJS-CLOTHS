import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUploadContext } from "../context/ProductContext" 

function Expense() {
  const navigate = useNavigate()

  const { state, dispatch } = useUploadContext()
  const result = state?.expenses || []

  const [isModel, setIsModel] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState("paid")

  // form state
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")

  const handleAddExpense = (e) => {
    e.preventDefault()
    const expense = {
      date,
      category,
      subCategory,
      amount: parseFloat(amount),
      description,
      status: paymentStatus,
    }

    dispatch({ type: "ADD_EXPENSE", payload: expense })

    // Reset fields
    setDate("")
    setCategory("")
    setSubCategory("")
    setAmount("")
    setDescription("")
    setPaymentStatus("paid")
    setIsModel(false)
  }

  // Totals
  const total = result.reduce((acc, cur) => acc + cur.amount, 0)
  const paidTotal = result
    .filter((item) => item.status === "paid")
    .reduce((acc, cur) => acc + cur.amount, 0)
  const unpaidTotal = result
    .filter((item) => item.status === "unpaid")
    .reduce((acc, cur) => acc + cur.amount, 0)

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center gap-x-4">
        <h1 className="text-2xl text-primary font-semibold">Expense</h1>
        <div className="flex gap-x-2 items-center">
          <h1>Date :</h1>
          <input type="date" />
        </div>
        <div className="flex gap-x-2 items-center">
          <h1>From :</h1>
          <input type="date" />
        </div>
        <div className="flex gap-x-2 items-center">
          <h1>To :</h1>
          <input type="date" />
        </div>
        <input
          placeholder="search"
          className="ring text-text font-semibold outline-0 px-1 rounded"
          type="search"
        />
        <button
          onClick={() => setIsModel(true)}
          className="bg-primary px-3 py-1 rounded ml-8 text-white font-medium"
        >
          Add Expense
        </button>

        {isModel && (
          <div className="fixed w-full top-20 p-10 bg-white/90">
            <form
              onSubmit={handleAddExpense}
              className="w-3xl px-4 py-7 border rounded border-text shadow-md grid grid-cols-2 gap-x-3 gap-y-10"
            >
              <div className="flex flex-col space-y-3">
                <label>Date</label>
                <input
                required
                  className="text-text ring py-2 px-2 rounded font-medium"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label>Category</label>
                <input
                  className="text-text font-medium ring py-2 px-2 rounded"
                  placeholder="Food, Rent, etc."
                  type="text"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label>Sub category</label>
                <input
                required
                  className="text-text font-medium ring py-2 px-2 rounded"
                  placeholder="Lunch, Room rent, etc."
                  type="text"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label>Amount</label>
                <input
                required
                  className="text-text font-medium ring py-2 px-2 rounded"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="flex flex-col col-span-2 space-y-3">
                <label>Description</label>
                <input
                required
                  className="text-text font-medium ring py-2 px-2 rounded"
                  placeholder="Details about the expense"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

            
              <div className="flex flex-col col-span-2 space-y-3">
                <label className="font-medium text-lg">Status</label>
                <div className="flex gap-8">
                  {/* Paid */}
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setPaymentStatus("paid")}
                  >
                    <div className="w-5 h-5 border-2 border-green-600 rounded-full flex items-center justify-center">
                      <div
                        className={`w-3 h-3 bg-green-600 rounded-full ${
                          paymentStatus === "paid" ? "block" : "hidden"
                        }`}
                      ></div>
                    </div>
                    <span className="text-green-600 font-medium text-lg">
                      Paid
                    </span>
                  </div>

                  {/* Unpaid */}
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setPaymentStatus("unpaid")}
                  >
                    <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div
                        className={`w-3 h-3 bg-red-500 rounded-full ${
                          paymentStatus === "unpaid" ? "block" : "hidden"
                        }`}
                      ></div>
                    </div>
                    <span className="text-red-500 font-medium text-lg">
                      Unpaid
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-white px-5 py-2 rounded"
                >
                  Submit Expense
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/*  Fixed Table + Description + Totals */}
      <div className="bg-bgclr">
        <div className="p-4 pb-0 rounded-2xl">
          <table className="table-auto w-full p-3">
            <thead>
              <tr className="border-b text-text">
                <th className="px-4 py-5 text-left">S.No</th>
                <th className="px-4 text-left">Date</th>
                <th className="px-4 text-left">Category</th>
                <th className="px-4 text-left">Sub Category</th>
                <th className="px-4 text-left">Description</th>
                <th className="px-4 text-left">Amount</th>
                <th className="px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx !== result.length - 1 ? "border-b" : ""}
                >
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4">{item.date}</td>
                  <td className="px-4">{item.category}</td>
                  <td className="px-4">{item.subCategory}</td>
                  <td className="px-4">{item.description}</td>
                  <td className="px-4">₹{item.amount}</td>
                  <td
                    className={
                      item.status === "paid"
                        ? "px-4 text-primary"
                        : "text-red-500 px-4"
                    }
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-between gap-x-8 text-text text-sm font-semibold py-4 px-4">
            <h1 className="text-2xl">Total: ₹{total.toFixed(2)}</h1>
            <h1 className="text-primary text-2xl">Paid: ₹{paidTotal.toFixed(2)}</h1>
            <h1 className="text-red-500 text-2xl">Unpaid: ₹{unpaidTotal.toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expense
