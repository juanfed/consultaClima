import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  // state del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false)

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = 'fafe14e9dc78b3b170440e07886a4358';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado)
      }
    }
    consultarAPI();
  }, [consultar])


  return (
    <>
      <Header />
      <main>
        <Formulario busqueda={busqueda}
          setBusqueda={setBusqueda}
          setConsultar={setConsultar} />
      </main>
    </>
  );
}

export default App;
