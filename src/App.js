import './App.css';
import Card from './components/Card';
import CardNew from './components/CardNew';
import Contador from './components/Contador';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <h1 className="text-3xl font-bold font-mono text-orange-300">Hola Mundo</h1>
      <Saludo name='Ana' edad='20'/>
      <Saludo name='Juan' edad='22'/>
      <Saludo name='Maria' edad='24'/>

      <Card>
        <Saludo name='Agustin' edad='28'/>
      </Card> */}

      <CardNew otroComponente={Saludo}></CardNew>
      <Contador></Contador>
    </div>
  );
}

export default App;


// ctrl + spacio = click primera opción te hace el import