import Navegacion from "./navegacion"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='contenedor contenido'>
            <Navegacion/>
            <p className="copyright">@{new Date().getFullYear()} copyright todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer