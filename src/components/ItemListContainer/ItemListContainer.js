import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'
import { useParams } from 'react-router-dom' 

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const onResize = () => {
        console.log('cambio el tamaño de la ventana')
    }

    useEffect(() => {
        setLoading(true)
        
        getProducts(categoryId).then(items => {
            setProducts(items)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    useEffect(() => {
        window.addEventListener('resize', onResize)

        return (() => {
            window.removeEventListener('resize', onResize)
        })
    }, [])
    
    return (
        <div className="ItemListContainer" onClick={() => console.log('Hice click en ItemListContainer')}>
            {
                loading ? 
                    <h1>Cargando...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
    )    
    
}


export default ItemListContainer