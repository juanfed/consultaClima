import React from 'react';
import '../styles/clima.css';

const Clima = ({ resultado }) => {

    //extrallendo los valores
    const { name, main } = resultado;
    if (!name) {
        return null
    }

    // pasar de grados kelvin a grados celcius

    const kelvin = 273.15;

    return (
        <div className='resultado'>
            <h2 className='resultado--title'>El clima de {name} es: </h2>
            <p className='resultado--promedio'>Tempretara promedio de: {parseFloat( main.temp - kelvin, 10).toFixed(2)} °C</p>
            <p className='resultado--max'>Temperatura minima: {parseFloat( main.temp_min - kelvin, 10).toFixed(2)} °C</p>
            <p className='resultado--min'>Temperatura maxima: {parseFloat( main.temp_max - kelvin, 10).toFixed(2)} °C</p>
            <p className='resultado--humedad'>Humedad: {main.humidity}%</p>
        </div>
    )
}

export default Clima