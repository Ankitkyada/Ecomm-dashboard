import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import  Header  from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';



function App() {
return(
  <div className='App'>
    <BrowserRouter>
    <Header> </Header>
    <Routes><Route path="/login"element={<Login />} />
    <Route path="/register"element={<Register />} />
    <Route path="/add"element={<AddProduct />} />
    <Route path="/edit"element={<UpdateProduct />} />
    
    </Routes>
    
 </BrowserRouter>
</div>
)

}
export default App;
