import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUploadContext } from "../context/ProductContext";

function AddStocks() {
  const location = useLocation();
  const editStock = location.state?.stock || null;
  const editIndex = location.state?.index ?? null;

  const navigate = useNavigate();
  const { dispatch } = useUploadContext();

  const [stockData, setstockData] = useState({
    code: "",
    category: "",
    subCategory: "",
    productName: "",
    ProdctType: "",
    price: "",
    gst: "",
    color: "#000000",
    size: "",
    quantity: "",
    image: null,
  });

  useEffect(() => {
    if (editStock) {
      setstockData(editStock);
    }
  }, [editStock]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setstockData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${now.getFullYear()}`;

    const stockWithDate = {
      ...stockData,
      date: formattedDate,
    };

    if (editIndex !== null) {
      dispatch({
        type: "EDIT_STOCKS",
        payload: { index: editIndex, data: stockWithDate },
      });
    } else {
      dispatch({
        type: "ADD_STOCKS",
        payload: stockWithDate,
      });
    }

    navigate("/stocks");
  };

  return (
    <div className="bg-white py-3 px-3">
      <h1 className="text-2xl text-text font-medium">
        {editStock ? "Edit Product" : "New Product"}
      </h1>
      <form className="mt-4 flex flex-col gap-y-8" onSubmit={handleSubmit}>
        {/* Code & Category */}
        <div className="flex gap-x-25 justify-between">
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-text">Product Code</h1>
            <input
              required
              onChange={handleChange}
              name="code"
              value={stockData.code}
              type="text"
              className="ring ring-text w-full rounded outline-none py-2 px-5"
            />
          </div>
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-text">Product Category</h1>
            <select
              required
              name="category"
              value={stockData.category}
              onChange={handleChange}
              className="ring ring-text w-full rounded outline-none py-2 px-5"
            >
              <option value="">Select</option>
              <option value="mens">Mens</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Subcategory & Product Name */}
        <div className="flex gap-x-25 justify-between">
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-text">Sub Category</h1>
            <input
              required
              name="subCategory"
              value={stockData.subCategory}
              onChange={handleChange}
              type="text"
              className="ring ring-text w-full rounded outline-none py-2 px-5"
            />
          </div>
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-text">Product Name</h1>
            <input
              required
              name="productName"
              value={stockData.productName}
              onChange={handleChange}
              type="text"
              className="ring ring-text w-full rounded outline-none py-2 px-5"
            />
          </div>
        </div>

        {/* Type & Price */}
        <div className="flex gap-x-25 justify-between">
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-text">Product Type</h1>
            <select
              required
              name="ProdctType"
              value={stockData.ProdctType}
              onChange={handleChange}
              className="ring ring-text w-full rounded outline-none py-2 px-5"
            >
              <option value="">Select</option>
              <option value="western">Western</option>
              <option value="southern">Southern</option>
              <option value="partywear">Partywear</option>
            </select>
          </div>
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-text">Price</h1>
            <input
              required
              name="price"
              value={stockData.price}
              onChange={handleChange}
              type="text"
              className="ring ring-text w-full rounded outline-none py-2 px-5"
            />
          </div>
        </div>

        {/* GST */}
        <div className="flex gap-x-25 justify-between">
          <div className="w-full">
            <h1 className="mb-4 font-medium text-text">GST</h1>
            <input
              required
              name="gst"
              value={stockData.gst}
              onChange={handleChange}
              placeholder="10%"
              type="text"
              className="ring ring-text w-full rounded outline-none py-2 px-5"
            />
          </div>
          <div className="w-full"></div>
        </div>

        {/* Color, Size, Quantity, Image */}
        <div className="flex flex-col gap-y-5">
          <h1>Available Colors, Sizes & Quantity</h1>
          <div className="flex items-center gap-x-5">
            <div className="flex-1">
              <p className="text-text text-xl">Color</p>
              <input
                required
                name="color"
                value={stockData.color}
                onChange={handleChange}
                className="w-full h-8"
                type="color"
              />
            </div>
            <div className="flex-1">
              <p className="text-text text-xl">Size</p>
              <input
                required
                name="size"
                value={stockData.size}
                onChange={handleChange}
                className="ring-1 py-1 w-full"
                type="text"
              />
            </div>
            <div className="flex-1">
              <p className="text-text text-xl">Quantity</p>
              <input
                required
                name="quantity"
                value={stockData.quantity}
                onChange={handleChange}
                className="w-full ring py-1"
                type="number"
              />
            </div>
            <div className="flex-1 mt-7">
              <label className="border-1 px-10 py-1 w-full text-primary font-medium border-dotted cursor-pointer">
                Upload image
                <input
                  required={!editStock}
                  name="image"
                  onChange={handleChange}
                  type="file"
                  className="hidden"
                />
              </label>
              {typeof stockData.image === "string" && (
                <p className="text-sm mt-2 text-gray-500">Current: {stockData.image}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="text-end mt-5">
          <button
            type="button"
            onClick={() => {
              scroll({ top: 0, left: 0, behavior: "smooth" });
              navigate("/stocks");
            }}
            className="text-del mr-10 font-medium text-2xl"
          >
            Discard
          </button>
          <button
            type="submit"
            className="text-white bg-primary cursor-pointer font-medium text-2xl px-3 py-1 rounded"
          >
            {editStock ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStocks;
