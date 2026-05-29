import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import ForgotPassword from './pages/ForgotPassword'
import Footer from './components/footer/Footer'
import men_barner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import ShopContextProvider from './context/ShopContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_barner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
        <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
        </Route>
      
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
      <Footer />
      </ShopContextProvider>
      </div>
    </>
  )
}

export default App
