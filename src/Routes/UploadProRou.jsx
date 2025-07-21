import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

function UploadProRou() {
  const navigate = useNavigate()

  const [formData, setformData] = useState({
    code: "",
    category: "",
    subCategory: "",
    productName: "",
    ProdctType: "",
    price: "",
    gst: "",
    color: "",
    size: "",
    quantity: "",
    image: null,
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setformData((prev) => ({
      ...prev,

      [name]: type === "file" ? files[0] : value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ formData })

    navigate("/previewProduct", { state: formData })
  }
  return (
    <div className="bg-white py-3 px-3">
      <h1 className="text-2xl text-text font-medium">New Product</h1>
      <form className="mt-4 flex flex-col gap-y-8" onSubmit={handleSubmit}>
        <div className="flex gap-x-25 justify-between ">
          <div className="flex-1">
            <h1 className="mb-4 font-medium  text-text">Product Code</h1>
            <input
              onChange={handleChange}
              name="code"
              type="text"
              className="ring ring-text flex-1 w-full  rounded  outline-none py-2 px-5"
            />
          </div>
          <div className="flex-1">
            <h1 className="mb-4 font-medium  text-text">Product Category</h1>
            <select
              name="category"
              onChange={handleChange}
              type="text"
              className="ring ring-text flex-1 w-full  rounded  outline-none py-2 px-5"
            >
              <option value="mens">Mens</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex gap-x-25 justify-between ">
          <div className="flex-1">
            <h1 className="mb-4 font-medium  text-text">Sub Category </h1>
            <input
              name="subCategory"
              onChange={handleChange}
              type="text"
              className="ring ring-text flex-1 w-full  rounded  outline-none py-2 px-5"
            />
          </div>
          <div className="flex-1">
            <h1 className="mb-4 font-medium  text-text">Product name</h1>
            <input
              name="subCategory"
              onChange={handleChange}
              type="text"
              className="ring ring-text flex-1 w-full  rounded  outline-none py-2 px-5"
            />
          </div>
        </div>
        <div className="flex gap-x-25 justify-between ">
          <div className="flex-1">
            <h1 className="mb-4 font-medium  text-text">Product Type</h1>
            <select
              name="ProdctType"
              onChange={handleChange}
              type="text"
              className="ring ring-text flex-1 w-full  rounded  outline-none py-2 px-5"
            >
              <option value="western">western</option>
              <option value="southern">southern</option>
              <option value="partywear">partywear</option>
            </select>
          </div>
          <div className="flex-1">
            <h1 className="mb-4 font-medium  text-text">Price</h1>
            <input
              name="price"
              onChange={handleChange}
              type="text"
              className="ring ring-text flex-1 w-full  rounded  outline-none py-2 px-5"
            />
          </div>
        </div>
        <div className="flex gap-x-25 justify-between ">
          <div className="w-full">
            <h1 className="mb-4 font-medium  text-text">GST</h1>
            <input
              name="gst"
              onChange={handleChange}
              placeholder="10%"
              type="text"
              className="ring ring-text flex-1 w-full  rounded  outline-none py-2 px-5"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="flex flex-col gap-y-5">
          <h1>Availlable Colors , Sizes & Quntity</h1>
          <div className="flex items-center gap-x-5">
            <div className="flex-1">
              <p className="text-text text-xl">Color</p>
              <input
                name="color"
                onChange={handleChange}
                className="w-full h-8"
                type="color"
              />
            </div>
            <div className="flex-1">
              <p className="text-text text-xl">Size</p>
              <input
                name="size"
                onChange={handleChange}
                className="ring-1 py-1 w-full"
                type="text"
              />
            </div>
            <div className="flex-1 ">
              <p className="text-text text-xl ">Quantity</p>

              <input
                name="quantity"
                onChange={handleChange}
                className="w-full ring py-1 "
                type="number"
              />
            </div>

            <div className="flex-1 mt-7 ">
              <label className="border-1 px-10  py-1 w-full text-primary font-medium border-dotted ">
                Upolad image
                <input
                  name="image"
                  onChange={handleChange}
                  type="file"
                  className="text-primary hidden font-medium"
                  src=""
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
        <div className="text-end mt-5 ">
          <button
            onClick={() => {
              scroll(0, 0)
              navigate("/Uploadproduct")
            }}
            className="text-del mr-10 font-medium text-2xl"
          >
            Discard
          </button>
          <button
            type="submit"
            className="text-white cursor-pointer bg-primary text-end font-medium text-2xl px-3 py-1 rounded"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default UploadProRou
