 import React from 'react'
 import Product from './Component/Product'
import HignerOrder from './Component/HignerOrder'
import Todo from './Component/Todo'
 
 function App() {
  let TodoHoc=HignerOrder(Todo,'Todos')
  let ProductHoc=HignerOrder(Todo,"Posts")
   return (
    <>
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
           <ProductHoc/>
        </div>
        <div className='col-md-6'>
         <TodoHoc/>
        </div>
      </div>
    </div>
    </>
   )
 }
 
 export default App