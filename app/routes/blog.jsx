import Post from "../components/post";
import { getPosts } from "../models/post.server";
import { useLoaderData } from "@remix-run/react";
import style from '../styles/blog.css'
import ListadoPosts from "../components/listadoPosts";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}
export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1 className="heading">Blog</h1>
      <ListadoPosts posts={posts}/>
    </div>

  );
};

export default Blog;
