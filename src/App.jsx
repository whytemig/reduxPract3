import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Product from './pages/products/Product'
import Cart from './pages/cart/Cart'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={ <Product />} /> 
        <Route path="/cart" element={ <Cart/>} /> 
      </Routes>

    </div>
  )
}

export default App
