import Post from "./Post"

const postContent = [
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
      {postContent.map((p) => (
        <Post userImage={p.userImage} name={p.user} image={p.image} curtidasImage={p.curtidasImage} curtidoTexto={p.curtidoTexto} pessoasTexto={p.pessoasTexto} />
      ))}
    </div>
  )
}