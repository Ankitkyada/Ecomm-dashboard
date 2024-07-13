import {Navbar,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
 function Header()
 {
    return(
        <div>
           <Navbar bg="dark" data-bs-theme="dark">
       
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/add" >Add Product</Link>
            <Link to="/edit" >Update Product</Link>
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
            <Link to="/todo" >Todo</Link>
             <Link to="/tic" >Tic</Link>
          </Nav>
      </Navbar>
        </div>
    )
 }
 export default Header;