import "./CartWidget.css"
import carrito from "./carrito.png"
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    if (getQuantity() !== 0) {
    return (
        <div>
            
            <div className="bloqueCarritoCentrado">
            <div className="bloqueCarrito">
                <Link to={'/cart'} className="CartWidget">
                <img className="carrito" src={carrito} alt="carrito de compras"/>
                { getQuantity() }
        </Link>
            </div>
            </div>
        </div>
    )} else {
        return(
            <></>
        )
    }
}

export default CartWidget