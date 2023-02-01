import logo from "./headerCarrinho.svg";
import CarrinhoAberto from './CarrinhoAberto'
import {useState} from 'react'

function Carrinho(){
    const [open, setOpen] = useState(false)
    
    return <div>
        <img src={logo} alt="" onClick={()=> setOpen(!open)} />
        {open && <CarrinhoAberto />}
    </div>

        
}


export default Carrinho;
