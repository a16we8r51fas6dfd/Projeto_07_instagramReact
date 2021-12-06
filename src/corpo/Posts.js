import Post from "./Post"

const posts = [
  {
    userImage: "assets/img/meowed.svg",
    user: "meowed",
    image: "assets/img/gato-telefone.svg",
    curtidasImage: "assets/img/respondeai.svg",
    curtidoTexto: "respondeai",
    pessoasTexto: "outras 101.523 pessoas"
  },
  {
    userImage: "assets/img/barked.svg",
    user: "barked",
    image: "assets/img/dog.svg",
    curtidasImage: "assets/img/adorable_animals.svg" ,
    curtidoTexto: "adorable_animals",
    pessoasTexto: "outras 99.159 pessoas"
  }
]

export default function Posts() {
  return (
    <div class="posts">  
      {posts.map((post) => (
        <Post userImage={post.userImage} name={post.user} image={post.image} curtidasImage={post.curtidasImage} curtidoTexto={post.curtidoTexto} pessoasTexto={post.pessoasTexto} />
      ))}
    </div>
  )
}