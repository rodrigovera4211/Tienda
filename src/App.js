import './App.css';
// import { useState, createContext } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Footer from './components/Footer/Footer'
// export const CartContext = createContext()

function App() {
  // const [cart, setCart] = useState([])


  return (
    <div className="App">
      {/* <CartContext.Provider value={'Este string esta en context'}> */}
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Hola Coder'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Hola Coder'}/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      {/* </CartContext.Provider> */}
      <Footer/>
    </div>
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;
