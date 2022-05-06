import { useContext, useState } from "react"
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
import "../../App.css"
import { createOrderAndUpdateStock } from '../../services/firebase'
import { useNotification } from '../../notification/notification'
import { serverTimestamp } from 'firebase/firestore';



const Cart = () => {
    const [client, setClient] = useState({ name: '', phone: '', email: '' })
    const { setNotification } = useNotification()
    const { cart, getPrice, clearCart, removeItem, getQuantity } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setClient({
        ...client,
        [name]: value
      })
    }
    const createOrder = () => {
      const objOrder = {
        client,
        items: cart,
        date: serverTimestamp(),
        total: getPrice()
      }
  
      if (client.name && client.phone && client.email) {
        createOrderAndUpdateStock(cart, objOrder).then(id => {
            clearCart()
            setNotification('success', `La orden se genero correctamente, su codigo es: ${id}`)
        }).catch((error) => {
            if(error && error.name === 'outOfStockError' && error.products.length > 0) {
                const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

                setNotification('error', `${error.products.length > 1 ? 'Los productos' : 'El producto'} ${stringProducts} no ${error.products.length > 1 ? 'tienen' : 'tiene'} stock`)
            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })
    }
    else {
        setNotification(' ', `Por favor complete sus datos correctamente`)
      } 
    }  

  return (
    <section >
            
            {cart.map(prod => (
                <div key={prod.id} className="bloqueTabla">
                    <div >
                      <div key={prod.id}>
                          <h5 className="bloqueTabla" >{prod.name}</h5>
                          <div >
                              <p >{prod.quantity} x ${prod.price}</p>
                              <p>Total Parcial : ${prod.quantity * prod.price}</p>
                          </div> 
                          <button className="botonesTabla" onClick={() => removeItem(prod.id)} >
                              Eliminar unidad del producto
                          </button>
                      </div>
                    </div> 
                </div> 
            ))}
                <div className="bloqueTabla">
                    {getPrice() === 0
                     ? null 
                     : <h4>Precio total: ${getPrice()}</h4>}
                    {getQuantity() === 0 
                    ? <div>
                        <Link to={'/'} className="linkContinuarComprando">Continuar comprando</Link> 
                      </div> 
                    : <div><button className="botonesTabla" onClick={() => { clearCart() }} >Vaciar Carrito</button>
                    <Link to={'/'} className="botonesTablaAgregar">Agregar productos</Link></div>}
                </div>
                {getQuantity() > 0 ?
                <div className="bloqueTabla">
                    <p>Datos para la compra</p>
                    <form className="form">
                        <div>
                            <label className="formu" htmlFor="name">Nombre</label>
                            <input className="formu" value={client.name} name="name"  type="text" id="nombre" onChange={handleChange} />
                            <label className="formu" htmlFor="phone">Teléfono</label>
                            <input className="formu" value={client.phone} name="phone" id="telefono"  type="number" onChange={handleChange} />
                            <label className="formu" htmlFor="email">Email</label>
                            <input className="formu" value={client.email} name="email" id="email" type="email"  onChange={handleChange} />
                        </div>
                    </form>
                    <button className="botonesTablaPagar" onClick={() => createOrder()}>Finalizar Compra</button></div> : null}
        </section>
  )
}
export default Cart

