import React, { useContext } from "react";
import CartContext from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, getPrice, removeItem } = useContext(CartContext)

    return (
        <div className="Titulo">
            <h1>Compras</h1>
            <div >
                <table className="items">
                    <tbody>
                        {cart.map(prod => <tr key={prod.id}><td><b>{prod.name}</b> x {prod.quantity} unidades </td><td>{prod.price * prod.quantity}  ({prod.price} c/u)</td><td><button className="botonesTabla" onClick={() => { removeItem(prod.id) }}> Eliminar unidad</button></td></tr>)}
                        <tr><th>Total a pagar</th>
                            <th>{getPrice()} </th>
                            <th><button className="" onClick={clearCart}>Vaciar carrito</button></th></tr>
                            </tbody>       
                </table>
                <div className="">
                <button onClick={()=>console.log("Usted abono correctamente ")} className="botonesTablaPagar">Pagar</button>
                </div>
                <div className="">
                <Link to={'/'} className="linkContinuarComprando">Continuar comprando</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart