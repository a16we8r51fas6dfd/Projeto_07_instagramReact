import Sugestao from "./Sujestao"
import Usuario from "./Usuario"

const sugestoes = [
  {
    image: "assets/img/bad.vibes.memes.svg",
    nome: "bad.vibes.memes"
  },
  {
    image: "assets/img/chibirdart.svg",
    nome: "chibirdart"
  },
  {
    image: "assets/img/razoesparaacreditar.svg",
    nome: "razoesparaacreditar"
  },
  {
    image: "assets/img/adorable_animals.svg",
    nome: "adorable_animals"
  },
  {
    image: "assets/img/smallcutecats.svg",
    nome: "smallcutecats"
  }
]

export default function Sidebar() {
    return (
      <div class="sidebar">
        <Usuario image="/assets/img/catanacomics.svg" nome="Catana" username="catanacomics" />
  
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {sugestoes.map((s) => (
            <Sugestao image={s.image} nome={s.nome} />
          ))}
          
        </div>
  
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
  
        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}