import React, { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { Trash2, PencilLine, Check } from "lucide-react"
import { NavLink } from "react-router-dom"

function Advertisement() {
  const { state, dispatch } = useAppContext()
  const { products } = state

  const [editIndex, setEditIndex] = useState(null)
  const [editData, setEditData] = useState({ productNo: "", category: "", img: null })

  const handleDelete = (index) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: index })
  }

  const handleEdit = (index, product) => {
    setEditIndex(index)
    setEditData({ productNo: product.productNo, category: product.category, img: product.img })
  }

  const handleSave = () => {
    dispatch({ type: "EDIT_PRODUCT", payload: { index: editIndex, updatedProduct: editData } })
    setEditIndex(null)
  }

  return (
    <div className="flex flex-col">
      {/* Add Product Button */}
      <NavLink
        to="/AddProducts"
        className="bg-primary text-lg font-semi self-end py-1.5 rounded px-3 text-bgclr"
      >
        <span className="text-2xl mr-3">+</span> Add Product
      </NavLink>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-8 rounded">
        {products.map((p, i) => (
          <div key={i} className="bg-bgclr flex flex-col gap-4 rounded p-4">
            {editIndex === i ? (
              <>
                <input
                  className="text-lg font-bold text-primary bg-white px-2 py-1 rounded"
                  value={editData.productNo}
                  onChange={(e) => setEditData({ ...editData, productNo: e.target.value })}
                />
                <div className="flex items-center">
                  <input
                    type="file"
                    onChange={(e) =>
                      setEditData({ ...editData, img: e.target.files[0] })
                    }
                  />
                  <div>
                    <h2 className="text-text font-bold">Category</h2>
                    <input
                      className="px-2 py-1 rounded"
                      value={editData.category}
                      onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-primary font-bold text-xl">Product No : {p.productNo}</h1>
                <div className="flex items-center">
                  <img
                    className="rounded-2xl p-3 w-20 h-20 aspect-square"
                    src={p.img ? URL.createObjectURL(p.img) : "/hoodie.png"}
                    alt="product"
                  />
                  <div>
                    <h2 className="text-text font-bold">Category</h2>
                    <p className="text-text">{p.category}</p>
                  </div>
                </div>
              </>
            )}

            <div className="border-t flex justify-around px-10 border-text">
              {editIndex === i ? (
                <button
                  onClick={handleSave}
                  className="px-3 py-2 flex text-green-600 font-medium"
                >
                  <Check className="mr-4" /> Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(i, p)}
                  className="px-3 py-2 flex text-primary font-medium"
                >
                  <PencilLine className="mr-4" /> Edit
                </button>
              )}

              <span className="text-3xl opacity-30 font-semi text-text">|</span>

              <button
                onClick={() => handleDelete(i)}
                className="px-3 py-1.5 flex font-medium text-lg text-del"
              >
                <Trash2 className="mr-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Advertisement
