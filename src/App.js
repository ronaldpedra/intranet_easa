import { useState } from "react";
import "./App.css";
import SeuNome from "./components/SeuNome/SeuNome";
import Saudacao from "./components/Saudacao/Saudacao";
// import HelloWorld from "./components/HelloWorld";
// import SayMyName from "./components/SayMyName";
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase/Frase";
// import List from "./components/List/List";
// import Evento from "./components/Evento/Evento";
// import Form from "./components/Form/Form";
// import Condicional from "./components/Condicional/Condicional";
// import OutraLista from "./components/OutraLista/OutraLista";


function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
