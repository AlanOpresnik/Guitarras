import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/post.server"
import {getCurso } from '../models/curso.server'
import ListadoGuitarras from '../components/listadoGuitarras'
import ListadoPosts from "../components/listadoPosts"
import Curso from "../components/curso"
import styles from '../styles/guitarras.css'
import stylesPost from '../styles/blog.css'
import styleCurso from '../styles/curso.css'

export function meta(){
  viewport: "width=device-width, initial-scale=1.0"
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    },{
      rel: "stylesheet",
      href: stylesPost
    },{
      rel: "stylesheet",
      href: styleCurso
    }
  ]
}

export async function loader(){
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  console.log(guitarras)
  console.log(curso)
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {
  const {guitarras,posts, curso} =  useLoaderData()

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}/>
      </main>
      <section>
        <Curso curso={curso.attributes}/>
      </section>
      <section>
      <h2 className="heading">Algunos de nuestros blogs</h2>
        <ListadoPosts posts={posts}/>
      </section>
    </>
  )
}

export default Index