import { Link, useLocation } from "@remix-run/react"


const Navegacion = () => {
    const location = useLocation()
  return (
    <>
      <nav className="navegacion">
        <Link to="/" className={location.pathname === "/" ? "activo" : ""}>
          Inicio
        </Link>
        <Link
          to="/nosotros"
          className={location.pathname === "/nosotros" ? "activo" : ""}
        >
          Nosotros
        </Link>
        <Link
          to="/tienda"
          className={location.pathname === "/tienda" ? "activo" : ""}
        >
          Tienda
        </Link>
        <Link
          to="/blog"
          className={location.pathname === "/blog" ? "activo" : ""}
        >
          Blog
        </Link>
      </nav>
    </>
  );
};

export default Navegacion;
