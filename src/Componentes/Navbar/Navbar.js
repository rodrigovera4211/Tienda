import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from 'react-router-dom';

import { getCategories } from '../../services/firebase' 
//import CartContext from '.././context/CartContext'
import { useState, useEffect } from 'react'
import Logo from  '../Logo/Logo.js'

export const orderCategories = (categories) => {
  categories.sort(function (a, b) {
      if (a.order > b.order) {
        return 1;
      }
      if (a.order < b.order) {
        return -1;
      }
      return 0;
    });
}

export const Navbar = () => {
  const [categories, setCategories] = useState([])

  //const { getQuantity } = useContext(CartContext)

  useEffect(() => {
      getCategories().then(categories => {
          orderCategories(categories)
          setCategories(categories)
      }).catch(error => {
          console.log(error)
      })
  }, [])


    return (
      <div>
        <nav className="navEstilo">
    
        <Logo/>
        <h1 className="titulo" >CeroM</h1>
         <Link to='/'  ></Link>
        <CartWidget/>
          <ul>
            <li><Link to='/'>Home</Link></li>
            {
                  categories.map(cat => 
                    <li key={cat.id}><Link 
                           
                          to={`/category/${cat.id}`} 
                      >
                          {cat.description}
                      </Link></li>)
              }
          </ul>
        </nav>
        
      </div>
    );
  }

 export default Navbar