import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login' 

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
