import { getGuitarra } from "../models/guitarras.server";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import styles from "../styles/guitarras.css";


export async function loader({ request, params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  console.log(guitarra);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "404 , Guitarra no encontrada",
    });
  }
  return guitarra;
}

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: `GuitarLa Guitarra no encontrada`,
      },
    ];
  }
  return [
    {
      title: `GuitarLa - ${data.data[0].attributes.nombre}`,
    },
  ];
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const GuitarraUrl = () => {
const {agregarCarrito} = useOutletContext()

  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;


const handleSubmit = (e) => {
  e.preventDefault();
  if (cantidad === 0){
    alert('La cantidad tiene que ser mqyor a 0')
  } else{
    const guitarraSeleccionada = {
      nombre,
      imagen: imagen.data.attributes.url,
      precio,
      cantidad,
      id: guitarra.data[0].id
    }
    console.log(guitarraSeleccionada)
  
    agregarCarrito(guitarraSeleccionada)
  }

  
}

  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={nombre} />

      <div className="contenido">
        <h3 className="">{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>
        <form  onSubmit={handleSubmit} className="formulario">
          <label htmlFor='cantidad'>
            Cantidad
          </label>
          <select
           className="cantidad" 
           onChange={(e) => setCantidad(parseInt(e.target.value))}
           id="cantidad"
           >
          <option value='0' >---Seleccione---</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>

          </select>

          <input
            type="submit"
            value="Agregar al carrito"
          />
        </form>
      
      </div>
    </main>
  );
};

export default GuitarraUrl;
