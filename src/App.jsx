import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from "./pages/Products"
import View from "./pages/View"
import Cart from "./pages/Cart"
import PageNotFound from "./pages/PageNotFound"
import WishList from "./pages/WishList"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<View/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App