import React, { useState } from 'react';
import Error from './Error';
import { nanoid } from 'nanoid';

function Formulario({ setGasto, setCrearGasto }) {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Cuando el usuario añade un gasto
    const agregarGasto = (e) => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return; /* Para terminar ahí, que no siga ejecutándose */
        }
        setError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: nanoid(),
        };

        // Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        // Restear el form
        setNombre('');
        setCantidad(0);
    };

    return (
        <div className='formulario'>
            <form onSubmit={agregarGasto}>
                <h2>Agrega tus gatos aquí</h2>

                {error ? (
                    <Error mensaje='Todos los campos son obligatorios o Presupuesto Incorrecto' />
                ) : null}

                <div className='campo'>
                    <label>Nombre Gasto</label>
                    <input
                        type='text'
                        className='u-full-width'
                        placeholder='Ej. Transporte'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label>Cantidad Gasto</label>
                    <input
                        type='number'
                        className='u-full-width'
                        placeholder='Ej. 300'
                        value={cantidad}
                        onChange={(e) =>
                            setCantidad(parseInt(e.target.value, 10))
                        }
                    />
                </div>

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Agregar Gasto'
                />
            </form>
        </div>
    );
}

export default Formulario;
