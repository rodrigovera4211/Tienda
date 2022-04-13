import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'


const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)

    return (
               <Link to={'/'} className="CartWidget">
              <img src="https://thumbs.dreamstime.com/z/icono-rojo-del-carro-de-compras-96010166.jpg" alt="carrito de compras" height='50px'   />
            { getQuantity() }
         
        </Link>
    );
}

export default CartWidget