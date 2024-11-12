import React,{useState} from "react";
function ListaTareas(){
    //lista que posteriormente se vaciara en lista u otro elemento
    const [lista, setLista]=useState([]);
    
    //caja de texto donde se escribe valor de la lista
    const [txtValor, setTxtValor]=useState('');
    const [id, setId]=useState(0);
    const handleInputChange = (e) => {
        setTxtValor(e.target.value);
      };

    //agregar elemento a la lista
    const agregarElemento=()=>{
        setLista([...lista,txtValor]);
        setTxtValor('');
        setId(id +1);
        
    }
    
    

    return(
        <div>
            <h1>Lista de Tareas</h1>
            <input
                type="text"
                value={txtValor}
                placeholder="Escribe un texto"
                onChange={handleInputChange}
            
            />
            <button onClick={agregarElemento}>Agregar elemento</button>
            
            <ul>
                {lista.map((item, index) =>(
                    <li>
                        {item}
                    </li>
                ))}
                
            </ul>

        </div>

    );
}
export default ListaTareas;