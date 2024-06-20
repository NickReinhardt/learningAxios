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



