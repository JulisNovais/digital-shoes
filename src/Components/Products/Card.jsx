import produtoTenis from "./produtoTenis.svg";

function Card(props) {
    return (
    <div>
      <div className="ImageArea">
          <img src={produtoTenis} alt=""/>
      </div>
         <p>{props.categoria}</p>
         <p>{props.nome}</p>
         <p><span><b>$ {props.valor}</b></span></p>
    </div>)
}

export default Card;
