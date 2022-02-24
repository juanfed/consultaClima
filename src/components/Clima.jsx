import React from 'react'

const Clima = ({ resultado }) => {

    //extrallendo los valores
    const { name, main } = resultado;
    if (!name) {
        return null
    }

    // pasar de grados kelvin a grados celcius

    const kelvin = 273.15;

    return (
        <div>
            <h2>El clima de {name} es: </h2>
            <p>Tempretara promedio de: {parseFloat( main.temp - kelvin, 10).toFixed(2)} °C</p>
            <p>Temperatura minima: {main.temp_min} °C</p>
            <p>Temperatura maxima: {main.temp_max} °C</p>
            <p>Humedad: {main.humidity}%</p>
        </div>
    )
}

export default Clima