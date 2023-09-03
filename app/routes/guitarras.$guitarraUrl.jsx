import { getGuitarra } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import styles from "../styles/guitarras.css";
import Button from '@mui/material/Button';

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
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={nombre} />

      <div className="contenido">
        <h3 className="">{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>
      <Button color="primary" size="medium" variant="contained">Agregar al carrito</Button>
      </div>
    </main>
  );
};

export default GuitarraUrl;
