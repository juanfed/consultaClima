import React, { useState } from 'react'
import '../styles/formulario.css';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    const [error, setError] = useState(false)

    // estraigo ciudad y pais
    const { ciudad, pais } = busqueda;


    // funcion que coloca los elemetos en el state

    const handleChange = (e) => {
        // actualizar state
        // console.log("hola")
        setBusqueda({
            ...busqueda, [e.target.name]: e.target.value
        });
    }

    // cuando el usuario da sutmit al formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // validacion
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        setError(false)
        // componente principal

        setConsultar(true)
    }

    return (
        <div className='formulario'>
            <form action="" onSubmit={handleSubmit} className='form'>
                {error ? (alert("Datos invalidos")) : null}
                <label htmlFor="ciudad">Ciudad: </label>
                <input type="text"
                    name='ciudad'
                    id='ciudad'
                    placeholder='Ciudad'
                    value={ciudad}
                    onChange={handleChange} 
                    required 
                    className=''/>

                <label htmlFor="pais">País</label>
                <select name="pais" id='pais' value={pais} onChange={handleChange} className='form--select'>
                    <option> --Selecciona un país-- </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="CL">Chile</option>
                    <option value="FR">Francia</option>
                    <option value="JP">Japon</option>
                </select>

                <div className='form--buton'>
                    <input type='submit'
                        value="buscar clima"
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario