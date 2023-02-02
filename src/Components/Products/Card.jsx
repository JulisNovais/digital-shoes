import produtoTenis from "./produtoTenis.svg";

function Card(props) {
    return (
    <div>
      <div className="ImageArea">
          <img src={produtoTenis} alt=""/>
      </div>
         <p>{props.categoria}</p>
         <p>{props.nome}</p>
         {/* <p style={{overline: 200'}}</p> */}
         <p>$200 <b>$ {props.valor}</b></p>
    </div>)
}

export default Card;
