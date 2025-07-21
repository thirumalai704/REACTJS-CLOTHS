import React, { useState, useRef } from "react";
import { useAppContext } from "../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";

function AddStocks() {
  const { state, dispatch } = useAppContext();

  const fileInputRef = useRef(null); // ✅ Fix 1: File input reference
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productNo: "",
    category: "mens",
    heading: "",
    content: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      img: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD_PRODUCT", payload: product });
    console.log({ state });

    setProduct({
      productNo: "",
      category: "mens",
      heading: "",
      content: "",
      img: null,
    });
    navigate("/ad");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white gap-y-6 px-6 pt-4 pb-10"
      >
        {/* Product No */}
        <label className="font-bold text-2xl text-primary">
          Product No
          <input
            type="number"
            name="productNo"
            value={product.productNo}
            onChange={handleChange}
            required
            className="ml-2 no-spinner border rounded px-2 py-1"
          />
        </label>

        {/* Category & Image */}
        <div className="flex gap-x-4 items-center">
          <div className="flex-2">
            <h2 className="text-2xl text-text font-semi">Product Category</h2>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="border w-full mt-5 rounded px-4 py-3"
            >
              <option value="mens">Mens</option>
              <option value="womens">Womens</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          <div className="flex-2">
            <h2 className="text-2xl text-text font-semi">Product Image</h2>
            <label className="border-dotted border w-full rounded mt-5 cursor-pointer flex justify-center py-2.5 text-primary underline">
              Upload image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {/* Heading */}
        <div>
          <h1 className="font-semi text-text text-2xl">Heading</h1>
          <input
            type="text"
            name="heading"
            value={product.heading}
            onChange={handleChange}
            required
            className="w-full mt-5 px-3 py-2 rounded outline-none ring-1 ring-text text-text"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="font-semi text-text text-2xl">Content</h1>
          <input
            type="text"
            name="content"
            value={product.content}
            onChange={handleChange}
            required
            className="w-full mt-5 px-3 py-2 rounded outline-none ring-1 ring-text text-text"
          />
        </div>

        {/* Stock Inputs */}

        {/* Buttons */}
        <div className="flex mt-6 self-end space-x-8">
          <NavLink to="/ad" className="text-del px-3 bg-white text-xl py-1">
            Discard
          </NavLink>
          <button
            type="submit"
            className="text-white text-xl px-8 py-1 bg-primary rounded"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStocks;
