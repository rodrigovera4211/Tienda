import { useState, useContext } from 'react' 
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
// import { CartContext } from '../../App'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantity, setQuantity] = useState(0)

    // const { cart, setCart } = useContext(CartContext)
    // console.log(cart)
    // console.log(setCart)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        setQuantity(count)
        // setCart([...cart, {id, name, price, count}])
        addItem({ id, name, price}, count)
    }
        

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {quantity === 0 ? <ItemCount onAdd={handleOnAdd}/> : <Link to='/cart' className='Option'>Ir al carrito</Link>}
                
            </footer>
        </article>
    )
}

export default ItemDetail