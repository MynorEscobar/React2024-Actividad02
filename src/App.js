import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de gastos</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <Contador></Contador>
      </section>
    </div>
  );
}

export default App;
