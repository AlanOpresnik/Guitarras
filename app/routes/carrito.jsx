import styles from "../styles/carrito.css";
import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return [
    {
      title: "GuitarLa - finalizar compra",
    },
  ];
}

const Carrito = () => {
  const { carrito, actualizarCantidad, eliminarProduto } = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <ClientOnly fallback='cargando...'>
    {() => (

    
      <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">
          <div className="carrito">
            <h2>Articulos</h2>
            {carrito?.lenght === 0
              ? "carrito Vacios"
              : carrito?.map((producto) => (
                  <div className="producto" key={producto.id}>
                    <div>
                      <img src={producto.imagen} alt={producto.nombre} />
                    </div>
                    <div>
                      <h3>{producto.nombre}</h3>
                      <p className="precio">
                        Precio: <span>${producto.precio}</span>
                      </p>
                      <p>Cantidad:</p>
                      <select
                        value={producto.cantidad}
                        className="select"
                        onChange={(e) =>
                          actualizarCantidad({
                            id: producto.id,
                            cantidad: e.target.value,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className="subtotal">
                        Subtotal:{" "}
                        <span>${producto.precio * producto.cantidad}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => eliminarProduto(producto)}
                      className="btn__elm"
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className="resumen">
            <h3>resumen del pedido</h3>
            <p>total a pagar:{total}</p>
          </aside>
        </div>
      </main>
      )}
    </ClientOnly>
  );
};

export default Carrito;
