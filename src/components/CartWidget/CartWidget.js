import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { captureRejections } from 'events';
import carrito from '../CartWidget/carrito.svg'


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    if (getQuantity() !== 0) {
    return (
        <div>
            
            <div className="bloqueCarritoCentrado">
            <div className="bloqueCarrito">
                <Link to={'/cart'} className="CartWidget">
                <img className="" src={carrito} alt="carrito de compras" height={50}/>
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