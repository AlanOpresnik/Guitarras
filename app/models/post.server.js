 export async function getPosts(){
    const respuesta  = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const resutado = await respuesta.json()
    return resutado
 }