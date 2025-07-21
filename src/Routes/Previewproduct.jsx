import React, { useState } from "react"
import { useUploadContext } from "../context/ProductContext"
import { useLocation, useNavigate } from "react-router-dom"

function Previewproduct() {
  const location = useLocation()
  const navigate = useNavigate()
  const { dispatch } = useUploadContext() 
  const product = location.state

  const [status, setStatus] = useState("active")

  const handleConfirm = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { status, product },
    })
    navigate(`/uploadproduct/${status}`)
  }

  return (
    <div className="p-6">
      
      <h1 className="text-2xl font-medium text-primary mb-6">Preview Product</h1>

      <div className="flex flex-col gap-y-3 text-text">
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Product Code:</p>
          <p>{product.code}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Category:</p>
          <p>{product.category}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Sub Category:</p>
          <p>{product.subCategory}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Product Name:</p>
          <p>{product.productName}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Product Type:</p>
          <p>{product.ProdctType}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Price:</p>
          <p>{product.price}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">GST:</p>
          <p>{product.gst}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Color:</p>
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: product.color }}
          ></div>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Size:</p>
          <p>{product.size}</p>
        </div>
        <div className="flex justify-between max-w-lg">
          <p className="font-medium">Quantity:</p>
          <p>{product.quantity}</p>
        </div>

        {/* Image Preview */}
        {product.image && (
          <div className="flex justify-between max-w-lg items-center">
            <p className="font-medium">Photo:</p>
            <img
              src={URL.createObjectURL(product.image)}
              alt="Uploaded"
              className="w-24 h-24 object-cover"
            />
          </div>
        )}

        {/* Status Selection */}
        <div className="flex justify-between max-w-lg items-center">
          <p className="font-medium">Status:</p>
          <div className="flex gap-x-5">
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={(e) => setStatus(e.target.value)}
              />{" "}
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={(e) => setStatus(e.target.value)}
              />{" "}
              Inactive
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="outofstock"
                checked={status === "outofstock"}
                onChange={(e) => setStatus(e.target.value)}
              />{" "}
              Out of Stock
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 text-end">
        <button
          onClick={handleConfirm}
          className="bg-primary text-white font-medium px-4 py-2 rounded"
        >
          Upload Product
        </button>
      </div>
    </div>
  )
}

export default Previewproduct
