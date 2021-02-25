import React from 'react';

function Pregunta() {
    return (
        <div className='pregunta'>
            <h2>Coloca tu presupuesto</h2>

            <form>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
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
