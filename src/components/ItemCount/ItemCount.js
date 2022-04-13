import { useState } from 'react'
import '../ItemCount/ItemCount.css'


const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(0)


    const increment = () => {
        setCount(count + 1)

    }
    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount