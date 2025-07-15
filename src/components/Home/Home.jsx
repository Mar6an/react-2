import React, { useState } from 'react'
import './Home.css'
const Home = () => {

  const [nombre, setNombre ] = useState('')
  const [precio, setPrecio] = useState('')
  const [ingredientes, setIngredientes] = useState('')

  const handleNombre = (e) => {
    setNombre(e.target.value)
  }
  const handlePrecio = (e) => {
    setPrecio(e.target.value)
  }
  const handleIngredientes = (e) => {
    setIngredientes(e.target.value)
  }
  return (
    <div>
      <h1>Home</h1>
    <form>
      <label For="Nombre"></label>
      <input type="text"
            name='nombre'
            id='nombre'
            onChange={handleNombre} />
      <label htmlFor="Precio"></label>
      <input type="number"
            name='precio'
            id='precio'
            onChange={handlePrecio} />
      <label htmlFor="Ingredientes"></label>
      <input type="text"
            name='ingredientes'
            id='ingredientes'
            onChange={handleIngredientes} />
      <button type='submit'>Enviar</button>
      <p>Nombre: {nombre}</p>
      <p>Precio: {precio}</p>
      <p>Ingredientes: {ingredientes}</p>

            
    </form>
    </div>
  )
}

export default Home