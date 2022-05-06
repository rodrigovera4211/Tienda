import { useState } from 'react'
import "./ItemCount.css"


    const ItemCount = ({initial = 0, stock, onAdd }) => {
        
        const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock ) {
       setCount(count + 1)
    }
    }
    const decrement = () => {
        if (count > 0) {
        setCount(count - 1)
    } else {console.log("No puede restar menos que 0")}
    }



    return(
        <div className='contenedorContadorCentrado'>
        <div className='contenedorContadorBotones'>
            <div className='divContador'>
            {count}
            </div>
            <div>
            <button className='contadorBotonEstilo' onClick={decrement}>-</button>
            <button className='contadorBotonEstilo' onClick={increment}>+</button>
            </div>
            <button className='contadorBotonEstilo' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount
