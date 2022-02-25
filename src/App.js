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
  const [resultado, setResultado] = useState({})
  // para cuando no encuentre el clima de la ciudad
  const [error, setError] = useState(false);

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

        //detecta el tipo de resultado en la consulta
        if (resultado.cod === "404") {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consultarAPI();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consultar])

  // carga condicional de componentes
  let componente;
  if (error) {
    componente = <p className='sin-resultado'>No hay resultados</p>
  } else {
    componente = <Clima resultado={resultado}/>
  }

  return (
    <>
      <Header />
      <main className='main'>
        <Formulario busqueda={busqueda}
          setBusqueda={setBusqueda}
          setConsultar={setConsultar} />

        <div>
          {componente}
        </div>
      </main>
    </>
  );
}

export default App;
