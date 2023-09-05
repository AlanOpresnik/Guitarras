import Post from "./post"

const ListadoPosts = ({posts}) => {
  return (
    <>
         <main className="contenedor">
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
    </>
  )
}

export default ListadoPosts