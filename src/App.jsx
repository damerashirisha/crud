import React from 'react'
import Table from './Components/table'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Update from './Components/update'
import Read from './Components/read'
import Create from './Components/create'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <div className='d-flex justify-content-center align-item-center vh-100'>
    <BrowserRouter>
   
        <Routes>
          <Route path='/' element={<Table/>} ></Route>
          <Route path='/create' element={<Create/>} ></Route>
          <Route path='/update/:id' element={<Update/>} ></Route>
          <Route path='/read/:id' element={<Read/>} ></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
