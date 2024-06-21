1. npm install axios                        - instala o axios no projeto

2. import axios from 'axios'                - importa o axios para o componente

3. const baseURL = "url"                    - cria variável com a url

4. const [post, setPost] = useState(null)   - useState para armazenar os dados da requisição


5. useEffect(() => {
    axios.get(`${baseURL}/1`)
        .then((response) => {
            setPost(response.data)
        })
   }, [])

axios.get() - solicitação para obter/pegar dados do endpoint. a callback .then() serve para obter de volta a resposta do servidor. a resposta volta como objeto.
Os dados que volta da solicitação, são colocados dentro do state chamado post.

axios.post() - para criar dados, se faz uma solicitação post. como primeiro arg, usa-se a variável que possui a url do endpoint, como segundo arg, inclua-se uma propriedade do objeto que especifica como vc quer que seja a sua nova publicação. 
.then() novamente para obter os dados da resposta e substituir a primeira publicação pela nova. Isso é bastante semelhante ao método .get(), mas o novo recurso que você quer criar é fornecido como o segundo argumento após o endpoint da API.

.delete() - unico argumento com o que é pra deletar. o .then() permanece pra alertar que algo foi deletado e setPost(null) pra zerar a variavel que recebe o post.

.catch() - quando acontece um erro na url, ao inves de executar a callback .then(), o axios executará a função callback .catch(). nesta função pegamos os dados do erro e enviamos pro state error. dessa forma podemos exibir a mensagem de erro com esse state.

-------------------------------------------------------------------------------------------------------------------------------------


CÓDIGO SEM USO DO ASYNC/AWAIT


import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export default function App() {

  const [post, setPost] = useState(null)
  const [err, setErr] = useState(null)

  // fetch
  useEffect(() => {
    client.get("/1").then((res) => {
      setPost(res.data)
    }).catch(err => {
      setErr(err)
    })
  }, [])

  // create
  function createPost() {
    client.post("/", {
      title: "Hello World!",
      body: "This is a new post."
    })
      .then((res) => {
        setPost(res.data)
      }).catch(err => {
        setErr(err)
      })
  }

  // update
  function updatePost() {
    client.put("/1", {
      title: "Novo post atualizado",
      body: "Esse é um post novo atualizado"
    })
      .then((res) => {
        setPost(res.data)
      })
  }

  // delete
  function deletePost() {
    client.delete("/1").then(() => {
      alert("Post deleted!")
      setPost(null)
    })
  }

  if (err) return `err: ${err.message}`
  if (!post) return "No post!"

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </>
  )
}


-------------------------------------------------------------------------------------------------------------------------------------


CÓDIGO COM USO DO ASYNC/AWAIT


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
-------------------------------------------------------------------------------------------------------------------------------------


HOOK USEAXIOS PERSONALIZADO
https://www.freecodecamp.org/portuguese/news/como-usar-o-axios-com-o-react-o-guia-definitivo-2021/#:~:text=superior%20do%20componente.-,Como,-voc%C3%AA%20j%C3%A1%20n%C3%A3o