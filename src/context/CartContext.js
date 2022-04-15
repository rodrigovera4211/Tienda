import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product,
            quantity
        }
        
        setCart([...cart, objItemCart ])
    }

    const clearCart = () => {
        setCart([])
    }




    const isInCart =(id) =>{

      return cart.some(prod =>prod.id ===id )


    }




    const removeItem = (id) => {
    cart.map((prod) => {
      if (prod.id === id) {
        prod.quantity = prod.quantity - 1;
        if (prod.quantity === 0) {
          let newCart = cart.filter((item) => item.id !== id);
          setCart([...newCart])
        } else {
          setCart([...cart])
        }

      }return null
    })
  }
const getPrice = () => {
    let countP = 0
    cart.forEach(prod => {
      countP = countP + prod.quantity * prod.price
    })

    return countP
  }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

  return (
    <Context.Provider value={{
      cart,
      isInCart,
      addItem,
      clearCart,
      getQuantity,
      getPrice,
      removeItem
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context