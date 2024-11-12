import React,{useState} from "react";
function Contador(){
    const [numero, setNumero]=useState(0);
    const aumentarValor=()=>{
        setNumero(numero + 1);
    };
    const disminuirValor=()=>{
        setNumero(numero - 1);
    };
    const resetear=()=>{
        setNumero(0);
    };
    return(
        <div>
            <h1>Contador</h1>
            <h2>Valor: {numero}</h2>
            <button className="btn btn-primary m-1" onClick={aumentarValor}>Aumentar</button>
            <button className="btn btn-secondary m-1" onClick={disminuirValor}>Disminuir</button>
            <button className="btn btn-danger m-1" onClick={resetear}>Resetear</button>

        </div>

    );

}
export default Contador;