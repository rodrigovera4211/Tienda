import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price}) => {

    const handleClickImg = (e) => {
        e.stopPropagation()
        console.log('Hice click en la imagen')
    }

    return(
        <article className='CardItem' onClick={() => console.log(`Hice click en el Item ${id}`)}>
            <header className='CardHeader'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' onClick={handleClickImg}/>
            </picture>
            <section>
                <h3 className='Info'>Precio: ${price}</h3>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item
