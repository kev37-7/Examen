import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ProductoCard } from './Components/ProductoCard/ProductoCard.jsx'
import { ListaSedes } from './Components/ListaSedes/ListaSedes.jsx'
import './App.css'

function App() {
  return (
    <>
      <ListaSedes/>
      <ProductoCard/>  
    </>
  )
}

export default App
