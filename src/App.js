import "./App.css";
//import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase/Frase";
import List from "./components/List/List";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Ronald" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://placehold.co/150"
      />
      <List />
    </div>
  );
}

export default App;
