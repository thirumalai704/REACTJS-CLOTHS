import { ChevronDown,ListFilter } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function UploadProduct() {
  return (
    <div>
      <div className='flex  m justify-between '>
        <h1 className='font-bold text-xl text-text '> Product Details</h1>
        <NavLink to={"/UploadProRou"} className={ "px-3 py-1 flex items-center bg-primary text-white font-medium"}><span className='mr-4 text-2xl'>+</span>Add Product</NavLink>
      </div>
      
      <div className='flex mt-10  pl-10 bg-white py-4 shadow-md px-3 justify-between items-center'>
        <div className='flex gap-x-14 text-text font-semibold'>
          <NavLink to={"/uploadproduct/Active"} >Active </NavLink>
          <NavLink to={"/uploadproduct/InActive"}>InActive</NavLink>
          <NavLink to={"/uploadproduct/OutOfStock"}>Out of Stack</NavLink>
        </div>
           <div className='flex   gap-x-10'>
            <h1 className='flex ring px-6 rounded py-1 ring-text'> <ListFilter className='mr-3' /> Filter</h1>
            <h1 className='flex items-center ring px-6 rounded py-1 ring-text'>Category : <span>All</span>  <ChevronDown className='ml-5'/> </h1>
           </div>
           
      </div>




    </div>
  )
}

export default UploadProduct