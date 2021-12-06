export default function Usuario(props) {
    return (
      <div class="usuario">
        <img src={props.image} />
        <div class="texto">
          <strong>{props.username}</strong>
          {props.nome}
        </div>
      </div>
    )
}