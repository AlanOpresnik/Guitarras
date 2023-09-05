import {Link} from '@remix-run/react'
import { formatearFecha } from '../utils/helpers';
const Post = ({post}) => {
    const {contenido, imagen, titulo, url, publishedAt, id} = post.attributes;
    
  return (
    <article key={id} className='post'>
     <img src={imagen.data.attributes.formats.medium.url} />
     <h2>{titulo}</h2>
     <p className="fecha">{formatearFecha(publishedAt)}</p>
     <p className="resumen">{contenido}</p>
     <Link className='enlace' to={url}>Ver blog completo</Link>
    </article>
  )
}

export default Post