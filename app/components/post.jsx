import {Link} from '@remix-run/react'
const Post = ({post}) => {
    const {contenido, imagen, titulo, url, publishedAt} = post.attributes;
    
  return (
    <article className='post'>
     <img src={imagen.data.attributes.formats.medium.url} />
     <h2>{titulo}</h2>
     <p className="fecha">{publishedAt}</p>
     <p className="resumen">{contenido}</p>
     <Link className='enlace' to={url}>Ver blog completo</Link>
    </article>
  )
}

export default Post