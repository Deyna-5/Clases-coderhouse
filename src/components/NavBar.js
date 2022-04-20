const NavBar = () => {

  const estilos = {
    borders: 'solid lightgray 1px',
    color: 'lightgray'
  }

  return (
    <div>
      <li style={estilos}>Inicio</li>
      <li style={{color: 'red'}}>Productos</li>
      <li>Clientes</li>
      <li>Contacto</li>
    </div>
  )
}
export default NavBar