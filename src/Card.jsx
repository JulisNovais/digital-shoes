function Card(projetor) {
    return (<div>
        <img src="https://imgcentauro-a.akamaihd.net/400x400/9789492R/tenis-nike-revolution-6-masculino-img.jpg" alt="" />
        <p>{projetor.categoria}</p>
        <p>{projetor.nome}</p>
        <p>Price s : <span>R$50</span></p>
        {/* <link to>"/Carrinho</link>   */}
    </div>)
}

export default Card;
