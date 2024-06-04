import "./App.css";
// import HelloWorld from "./components/HelloWorld";
// import SayMyName from "./components/SayMyName";
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase/Frase";
// import List from "./components/List/List";
import Evento from "./components/Evento/Evento";
import Form from "./components/Form/Form";

function App() {

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form />
    </div>
  );
}

export default App;
