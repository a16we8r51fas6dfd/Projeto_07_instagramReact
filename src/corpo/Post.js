export default function Post({ userImage, name, image, curtidasImage, curtidoTexto, pessoasTexto }) {
    return (
      <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={userImage} alt=""/>
                {name}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
    
            <div class="conteudo">
              <img src={image} alt="" />
            </div>
    
            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
    
              <div class="curtidas">
                <img src={curtidasImage} alt="" />
                <div class="texto">
                  Curtido por <strong>{curtidoTexto}</strong> e <strong>{pessoasTexto}</strong>
                </div>
              </div>
            </div>
          </div>
    )
  }