import produtoTenis from "../assets/produtoTenis.svg";

function Card(props) {
    return (<div>
       <img src={produtoTenis} alt=""/>
        <p>{props.categoria}</p>
        <p>{props.nome}</p>
        <p>Prices : <span>R$50</span></p>
     </div>)
}

export default Card;
