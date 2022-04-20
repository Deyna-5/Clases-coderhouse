import React from 'react'

const CardNew = (props) => {
  return (
    <>
      <h1>Componente CardNew</h1>

      {/* useState */}
      {/* const [state, setstate] = useState(initialState) */}

      {props.otroComponente({name: 'Deyna', edad: '22'})}
    </>
  )
}

export default CardNew