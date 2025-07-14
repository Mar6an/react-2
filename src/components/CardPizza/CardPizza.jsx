import React, { useState } from 'react'

const CardPizza = () => {
  const [nombre, setNombre] = useState('')
  
  const handleInput = (event) => {
    setNombre(event.target.value)
    console.log(nombre)
  }
  return (
    <>
  <input type="text" onChange={handleInput} />
  <input type="text" />
    <p>El nombre es: {nombre} </p>
    </>
  )
}

export default CardPizza