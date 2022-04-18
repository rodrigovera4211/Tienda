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
            <h1 className="titulonav"  >CeroM</h1>
         <Link to='/'  ></Link>
          <ul>
            <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
          <NavLink to='/category/pantalones' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
         <NavLink to='/category/Camperas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
     
 
          </ul>
            <Link to={'/cart'} ></Link> 
  <CartWidget/>
        </nav>        
  
      </div>
    );
  }

 export default Navbar

// const NavBar = () => {
  
//   // const {  getQuantity  } = useContext ( CartContext)
//   //{ title: 'ecommerce ', color='red'}

//   return (
      
//       <nav className="NavBar" >
//      <Logo/>
//         <div>
//   
 
      
//  <h3>   Ecommerce</h3>
//             </Link>
          
//         </div>
//         <div className="Categories">
       
//           <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
//           <NavLink to='/category/pantalones' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
//           <NavLink to='/category/Camperas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
     
    
//         </div>
//               <Link to={'/cart'} ></Link>    
              
//       </nav>
//   )
// }

// export default NavBar