import { useState, useEffect } from "react";

import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";

export function meta() {
  return [
    {

      charset: "utf8",
      title: "guitarLa remix"
    }

  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "viewport",
      content: "width=device-width, initial-scale=1",
    }
  ];
}

export default function app() {
  const carritoLS =  typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
  const [carrito, setCarrito] = useState(carritoLS);


  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
  }, [carrito])
  


  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      console.log("ese eleemtno ya existe");
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
    } else {
      console.log("agregando", guitarra);

      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  }

  const eliminarProduto = (guitarra) => {
    const carritoActualizado = carrito.filter((guitarraState) => guitarraState.id!== guitarra.id);
    setCarrito(carritoActualizado);
  }




  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarProduto,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div className="error__div">
          <p className="error">{error.statusText}</p>
          <Link className="error__link" to="/">
            Aqui no esta lo que buscas regresa a la pagina principal
          </Link>
        </div>
      </Document>
    );
  }
}
