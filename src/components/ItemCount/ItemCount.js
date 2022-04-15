import { useState } from 'react'
import '../ItemCount/ItemCount.css'


const ItemCount = ({ onAdd, initial =1 }) => {
    const [count, setCount] = useState(initial)


    const increment = () => {
        setCount(count + 1)

    }
    const decrement = () => {
        if (count>1) {
        setCount(count - 1)
        }
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