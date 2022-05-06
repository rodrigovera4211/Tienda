import Item from "../Item/Item.js"
import "../../App.css"

//Rec: Para mantener tarjetas con flex necesario mantener el div con la clase padre
//Solo hace una lista de los productos. Se pasa una KEY para ientificar
const ItemList = ({ products}) => {

    return (
        <div className="contenedorPadreCards">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
            
        </div>
    )
}

export default ItemList