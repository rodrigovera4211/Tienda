import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import Logo from  '../Logo/Logo.js'
import Contact from '../Contact/Contact'
import { useContext } from 'react'
import  CartContext  from '../../context/CartContext'



const NavBar = () => {
  
  const {  getQuantity  } = useContext ( CartContext)
  //{ title: 'ecommerce ', color='red'}

  return (
      
      <nav className="NavBar" >
     <Logo/>
        <div>
    <Link to='/'  >
 
      
 <h3>   Ecommerce</h3>
            </Link>
                
        </div>
        <div className="Categories">
       
          <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
          <NavLink to='/category/pantalones' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
          <NavLink to='/category/Camperas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
          <NavLink to='/category/Gorras' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gorras</NavLink>
    
        </div>
              {  getQuantity > 0   &&  <CartWidget/> }
      </nav>
  )
}

export default NavBar