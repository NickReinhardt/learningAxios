import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export default function App() {

  const [post, setPost] = useState(null)

  // fetch
  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1")
      setPost(response.data)
    }
    getPost()
  }, [])


  // delete
  async function deletePost() {
    await client.delete("/1")
    alert("Post deleted!")
    setPost(null)
  }

  if (!post) return "No post!"

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </>
  )
}