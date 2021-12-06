export default function Story({image, user}) {
    return (
        <div class="story">
        <div class="imagem">
            <img src={image}/>
        </div>
        <div class="usuario">
            {user}
        </div>
        </div>
    )
}