import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {

    let repeated= false;
    cart.map((prod) => {
      if (prod.id === product.id) {
        prod.quantity = prod.quantity + quantity;
        
        repeated = true;
        setCart([...cart])
      }return null
  })
    if (repeated === false) {
      const objItemCart = {
        ...product,
        quantity
      }
      setCart([...cart, objItemCart])
    }
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

  const getQuantity = () => {
    let count = 0
    cart.forEach(prod => {
      count = count + prod.quantity
    })

    return count
  }

  const clearCart = () => {
    setCart([])
  }

  const getPrice = () => {
    let countP = 0
    cart.forEach(prod => {
      countP = countP + prod.quantity * prod.price
    })

    return countP
  }

  return (
    <Context.Provider value={{
      cart,
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