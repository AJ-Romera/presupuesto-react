import React, { useState } from 'react';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);

    // Cuando el usuario añade un gasto
    const agregarGasto = (e) => {
        e.preventDefault();

        // Validar

        // Construir el gasto

        // Pasar el gasto al componente principal

        // Restear el form
    };

    return (
        <div className='formulario'>
            <form onSubmit={agregarGasto}>
                <h2>Agrega tus gatos aquí</h2>

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
