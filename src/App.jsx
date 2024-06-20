import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

// variavel que armazena a URL
const baseURL = "https://jsonplaceholder.typicode.com/posts"

export default function App() {

  // state pra armazenar a resposta da requisição get (formato de objeto)
  const [post, setPost] = useState(null)

  // função pra buscar o objeto do servidor
  useEffect(() => {

    axios
      .get(`${baseURL}/1`)
      .then((response) => {
        setPost(response.data)
      })

  }, [])


  // função para criar a postagem
  function createPost() {
    axios
      // arg1 = variavel da url; arg2 = propriedades do objeto
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      // atribui o objeto pro state
      .then((response) => {
        setPost(response.data)
      })
  }


  // função para atualizar o post
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Novo post atualizado",
        body: "Esse é um post novo atualizado"
      })
      .then((response) => {
        setPost(response.data)
      })
  }

  // função para deletar o post
  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!")
        setPost(null)
      })
  }

  // caso nao tenha post, retorna que nao tem post
  if (!post) return "No post!"

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Update Post</button>
    </>
  )
}