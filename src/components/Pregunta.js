import React, { useState } from 'react';

function Pregunta() {
    // Definir el state
    const [cantidad, setCantidad] = useState(0);

    // Función que lee el presupuesto
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    };

    // Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        // Validar

        // Si se pasa la validación
    };

    return (
        <div className='pregunta'>
            <h2>Coloca tu presupuesto</h2>

            <form>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                />
            </form>
        </div>
    );
}

export default Pregunta;
