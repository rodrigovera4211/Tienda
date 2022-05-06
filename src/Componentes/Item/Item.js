import { Link } from 'react-router-dom'
import "../../App.css"



    const Item = ({ id, name, img, price}) => {

 
    return (
        <div>
        <div className='contenedorCards'>
                <p>
                    {name}
                </p>
                <img className='imagenCards' src={img} alt={name}/>
            <section>
                    Precio: ${price}
            </section>           
            <Link to={`/detail/${id}`} className='titulonav'>Ver detalle</Link>
        </div>
        </div>
    )
}

export default Item