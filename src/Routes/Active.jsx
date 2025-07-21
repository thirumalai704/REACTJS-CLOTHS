import React from 'react'
import { useUploadContext } from '../context/ProductContext'
import UploadProduct from '../pages/UploadProduct'
function Active() {
  const { state } = useUploadContext() 
  const activeProducts = state?.active || []

  return (
    <div className="p-4">
       <UploadProduct/>
      <h1 className="text-2xl font-bold mb-4 text-primary">Active Products</h1>

      {activeProducts.length === 0 ? (
        <p className="text-gray-500">No active products found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {activeProducts.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-sm flex flex-col gap-y-2"
            >
              <h2 className="font-semibold text-lg">{product.productName}</h2>
              <p><strong>Code:</strong> {product.code}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ₹{product.price}</p>
              <p><strong>Size:</strong> {product.size}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              {product.image && (
                <img
                  src={URL.createObjectURL(product.image)}
                  alt="Product"
                  className="w-full h-40 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Active
