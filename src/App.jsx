import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import { useState } from 'react'
import Detail from './pages/Detail'
import Cart from './pages/Cart'

import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const [category, setCategory] = useState("beauty")
  const [cartProducts, setCartProducts] = useState(() => {
    const saved = localStorage.getItem("Products");
    return saved ? JSON.parse(saved) : [];
  });

  const [laterProducts, setlaterProducts] = useState(() => {
    const saved = localStorage.getItem("later");
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (product) => {
    let updatedCart = [...cartProducts];
    let updatedLater = [...laterProducts];

    const exists = updatedCart.find(item => item.id === product.id);
    let action = '';

    if (exists) {
      updatedCart = updatedCart.filter(item => item.id !== product.id);
      action = 'remove';
    } else {
      updatedCart.push({
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        price: product.price,
        rating: product.rating
      });

      updatedLater = updatedLater.filter(item => item.id !== product.id);
      setlaterProducts(updatedLater);

      action = 'added';
    }

    setCartProducts(updatedCart);

    return action;
  };


  const addToLater = (product) => {
    let updatedLater = [...laterProducts];
    let updatedCart = [...cartProducts];

    const exists = updatedLater.find(item => item.id === product.id);
    let action = '';

    if (exists) {
      updatedLater = updatedLater.filter(item => item.id !== product.id);
      action = 'remove';
    } else {
      updatedLater.push({
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        price: product.price,
        rating: product.rating
      });

      updatedCart = updatedCart.filter(item => item.id !== product.id);
      setCartProducts(updatedCart);

      action = 'added';
    }

    setlaterProducts(updatedLater);

    return action;
  };


  const notifyCart = (title, action) => {
    if (action === "added") {
      toast.success(`${title} added to cart`, {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      toast.info(`${title} removed from cart ❌`, {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  const notifyLater = (title, action) => {
    if (action === "added") {
      toast.success(`${title} saved for later `, {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      toast.info(`${title} removed from cart ❌`, {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };



  const isInCart = (id) => {
    return cartProducts.some(item => String(item.id) === String(id));
  };


  const isInLater = (id) => {
    return laterProducts.some(item => String(item.id) === String(id));
  };


  return (
    <div className='App bg-[#F7FAFC]'>
      <Routes>
        <Route path='/' element={<Layout />} >

          <Route index element={<Home category={category} setCategory={setCategory} />} />

          <Route path='/products' element={<Product category={category} setCategory={setCategory} cartProducts={cartProducts} setCartProducts={setCartProducts} addToCart={addToCart} isInCart={isInCart} notifyCart={notifyCart} isInLater={isInLater} addToLater={addToLater} notifyLater={notifyLater} />} />

          <Route path='/products/:id' element={<Detail cartProducts={cartProducts} addToCart={addToCart} isInCart={isInCart} notifyCart={notifyCart} isInLater={isInLater} addToLater={addToLater} notifyLater={notifyLater} />} />

          <Route path='/cart' element={<Cart cartItems={cartProducts} setCartProducts={setCartProducts} laterProducts={laterProducts} setlaterProducts={setlaterProducts} />} />
        </Route>

      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App