import { useState, useEffect } from 'react'
import './App.css'
import { PokemonInfo } from './components/PokemonInfo';

function App() {
 const [click, clickFun] = useState({ clicks: 0 });
 const [name, setName] = useState("");

  useEffect(() => {
    console.log(
      'Cantidad de veces que ha sido presionado el botón:',
      click.clicks
    );
  },[click]);

  useEffect(() => {
    console.log(
      'Su nombre es:',
      name
    );
  },[name, click]);

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>example useState and useEffect!</h2>
      <p>Este botón ha sido presionado {click.clicks} vece(s)</p>
      <button onClick={() => clickFun({ clicks: click.clicks + 1 })}>
        Presioname
      </button>
      <br></br>
      Nombre: <input type="text" name="name" onBlur={(even)=>{setName(even.currentTarget.value)}}></input>
      <p>El nombre del pokemon a buscar es: {name.toLowerCase()}</p>
      <br></br>
      <p>POKEMON API RESULTADO</p>
      <PokemonInfo name={name.toLowerCase()}></PokemonInfo>
    </div>
  );
}

export default App
