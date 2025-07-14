import React, { useState } from 'react'

function CardPizza() {
  const [producto, setProducto] = useState('')
  const productosIniciales = [
    'Producto 1',
    'Producto 2',
    'Producto 3',
    'Producto 4'
  ]

  const [products, setProducts] = useState(productosIniciales)

  const agregarProducto = (e) => {
    e.preventDefault()

    if (producto.trim() === '') {
      alert('Por favor, ingresa un producto')
      return
    }

    setProducts([...products, producto])
    setProducto('')
  }

  return (
    <div className="card-pizza">
      <h2>Agregar producto</h2>
      <form>
        <input
          type="text"
          placeholder='Nombre del producto'
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <button type='button' onClick={agregarProducto}>Agregar</button>
      </form>

      <h2>Lista de productos</h2>
      <ul>
        {products.map((producto, i) => (
          <li key={i}>{producto}</li>
        ))}
      </ul>
    </div>
  )
}

export default CardPizza
