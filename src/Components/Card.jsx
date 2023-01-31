import produtoTenis from "../assets/produtoTenis.svg";

function Card(props) {
    return (<div>
      <div style={{background: '#fff'}}>
      <img src={produtoTenis} alt=""/>
      </div>
        <p>{props.categoria}</p>
        <p>{props.nome}</p>
        <p>Prices : <span>R$ {props.valor}</span></p>
     </div>)
}

export default Card;
