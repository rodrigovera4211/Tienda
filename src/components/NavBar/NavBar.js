import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import Logo from  '../Logo/Logo.js'
import Contact from '../Contact/Contact'
import { useContext } from 'react'
import  CartContext  from '../../context/CartContext'

function Navbar() {
    return (
      <div>
          <nav className="NavBar" >
       <Logo/>
            <h1 className="titulonav">CeroM</h1>
     
          <ul>
            <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
          <NavLink to='/category/pantalones' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
         <NavLink to='/category/Camperas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
     
    
          </ul>
             <CartWidget/>
            <Link to={'/cart'} ></Link>    
        </nav>
        
      </div>
    );
  }

 export default Navbar

