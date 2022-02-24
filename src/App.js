import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';


function App() {
  // state del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false)
  // 
  const [resultado, setResultado] = useState({})

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = 'fafe14e9dc78b3b170440e07886a4358';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado)
        // para que me reinicie los datos una vez haga la consulta
        setConsultar(false)

         //console.log(resultado) // para poder mirar en consola si me esta trallendo los datos
      }
    }
    consultarAPI();
  }, [consultar])


  return (
    <>
      <Header />
      <main>
        <section>
        <Formulario busqueda={busqueda}
          setBusqueda={setBusqueda}
          setConsultar={setConsultar} />

        <Clima 
        resultado={resultado}/>
        </section>
      </main>
    </>
  );
}

export default App;
