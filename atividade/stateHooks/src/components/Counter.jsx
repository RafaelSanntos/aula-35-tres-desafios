import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // retorna um array com 2 elementos (valor atual do estado e função para atualizar o estado)

    return (
        <div>
            <p> Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}></button>
            Clique aqui
        </div>
    )
}

export default Counter