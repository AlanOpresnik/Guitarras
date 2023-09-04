import styles from "../styles/guitarras.css";
import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import ListadoGuitarras from "../components/listadoGuitarras";

export function meta() {
  return [
    {
      title: "GuitarLa - Tienda",
      description: "GuitarLa la tienda con las mejores guitarras ",
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

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}
const Tienda = () => {
  const guitarras = useLoaderData();

  return   <ListadoGuitarras guitarras={guitarras} />;
};

export default Tienda;
