import { getPost } from "../models/post.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "../utils/helpers";
import styles from '../styles/blog.css'

export function links(){
    return[
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export async function loader({params}) {
    const { blogUrl } = params;
    const post = await getPost(blogUrl);

    if (post.data.length === 0) {
        throw new Response("",{
            status: 404,
            statusText: "No se encontro el post"
        });
    }
    console.log(post)
    return post
}

const BlogUrl = () => {
    const post = useLoaderData();
   const {titulo,imagen, contenido, publishedAt} = post.data[0].attributes
  return (
    <article className="contenedor post post__url">
    <img className="imagen" src={imagen.data.attributes.formats.small.url}/>
    <div className="contenido">
        <h1>{titulo}</h1>
        <p className="fecha">Publicado el {formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
        
    </div>

    </article>

  )
}

export default BlogUrl