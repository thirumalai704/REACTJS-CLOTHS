import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UploadProduct from './pages/UploadProduct'
import DashBoard from './pages/DashBoard'
import DeliveryTracking from './pages/DeliveryTracking'
import Expense from './pages/Expense'
import Orders from './pages/Orders'
import Reviews from './pages/Reviews'
import Stocks from './pages/Stocks'
import Advertisement from './pages/Advartisement'
import AddProducts from './pages/AddProducts'
import NavBar from './components/NavBar'
import CustomerDetails from './pages/CustomerDetails'
import GenerateInvoice from './pages/GenerateInvoice'


import Active from './Routes/Active'
import Inactive from './Routes/Inactive'
import OutOfStock from './Routes/OutOfStock'
import UploadProRou from './Routes/UploadProRou'
import Previewproduct from './Routes/Previewproduct'
// import ExpenseForm from './Routes/ExpenseForm'
import AddStocks from './Routes/AddStocks'
import AddMore from './Routes/AddMore'
function App() {
  return (
    <>
       
    <Routes>
      <Route path='/' element={<NavBar/>}>
      <Route index element={<DashBoard/>}/>
      <Route path='/UploadProduct' element={<UploadProduct/>} />
      <Route path='/Expense' element={<Expense/>} />
      <Route path='/Orders' element={<Orders/>} />
      <Route path='/DeliveryTracking' element={<DeliveryTracking/>} />
      <Route path='/Reviews' element={<Reviews/>} />
      <Route path='/Stocks' element={<Stocks/>} />
      <Route path='/ad' element={<Advertisement/>} />
      <Route path='/AddProducts' element={<AddProducts/>}/>
        
          {/* page Routes */}

           <Route path='/uploadproduct/active' element={<Active/>}/>
           <Route path='/uploadproduct/inactive' element={<Inactive/>}/>
           <Route path='/uploadproduct/OutOfStock' element={<OutOfStock/>}/>
           <Route path='/UploadProRou' element={<UploadProRou/>}/>
           <Route path='/Previewproduct' element={<Previewproduct/>}/>
           {/* <Route path='/ExpenseForm' element={<ExpenseForm/>}/> */}
           <Route path='/AddStocks' element={<AddStocks/>}/>
           <Route path='/AddMore' element={<AddMore/>}/>
           <Route path='/CustomerDetails' element={<CustomerDetails/>}/>
           <Route path='/GenerateInvoice' element={<GenerateInvoice/>}/>
           


      </Route>
    </Routes>
    
    </>
  )
}

export default App