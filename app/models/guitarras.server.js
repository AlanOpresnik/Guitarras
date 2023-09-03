export async function getGuitarras(){
    const respuesta  = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const resutado = await respuesta.json()
    return resutado
}

export async function getGuitarra(id){
    const respuesta  = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${id}&populate=imagen`)
    return await respuesta.json()
}