import { useEffect, useState } from "react";

function Component() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(() => {
    console.log("Linha 6 - State inicial");
    return 0;
  });

  // Sempre que precisarmos usar o valor atual para mudar nosso state precisamos usar o prev.
  const add = () => setCount(prevState => prevState + 1);

  // Executa em toda renderização.
  useEffect(() => console.log("Sem dependencia"));

  // Executa apenas uma vez quando o componente for renderizado.
  useEffect(() => {
    console.log("Linha 13 - MOUNT");
    document.title = `CLICOU ${count} vezes`;
  }, []);

  // Os dois useEffect a baixo executam uma vez quando o componente for rendereizado e sempre que o estado na dependencia mudar.
  useEffect(() => {
    console.log("Linha 18 - COUNT");
    document.title = `CLICOU ${count} vezes`;
  }, [count]);

  useEffect(() => {
    console.log("Linha 23 - NAME");
    document.title = `CLICOU ${count} vezes`;
  }, [name]);

  console.log("Linha 27");

  return (
    <div className="App">
      <h1>Codar.me - useEffect</h1>
      <p>
        {name} clicou no botão {count} vezes
      </p>

      <button onClick={add}>Add +</button>
      <button onClick={() => setName("Bruno")}>Adicionar Nome</button>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);

  // Precisamos retornar uma função de limpeza para quando o componente for desmontado.
  // Precisamso fazer isso sempre que tivermos listeners, contadores, etc...
  useEffect(() => {
    const i = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(i);
  });

  return (
    <div>
      <h3>Contador: {count}</h3>
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>Esconder</button>
      {show && <Count />}
    </div>
  );
}
