import React from 'react'

const Saludo = (props) => {
// const Saludo = (name, edad) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Hola {props.name}!, tienes {props.edad} años.
        {/* Hola {name}, tienes {edad} años. */}
      </h1>
    </div>
  )
}

export default Saludo

// rafc --> Comando para generar la arrow function de arriba
// Podemos pasar los props y luego llamarlos con el punto o separarlos por coma c/u
