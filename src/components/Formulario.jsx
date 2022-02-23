import React, { useState } from 'react'

const Formulario = () => {

    // state del formulario
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

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
    }

    return (
        <div>
            <h3>Formulario</h3>
            <form action="" onSubmit={handleSubmit}>
                {error ? (alert("Datos invalidos")) : null}
                <label htmlFor="ciudad">Ciudad: </label>
                <input type="text"
                    name='ciudad'
                    id='ciudad'
                    placeholder='Ciudad'
                    value={ciudad}
                    onChange={handleChange} 
                    required />

                <label htmlFor="pais">País</label>
                <select name="pais" id='pais' value={pais} onChange={handleChange}>
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

                <br />
                <br />

                <div>
                    <input type='submit'
                        value="buscar clima"
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario