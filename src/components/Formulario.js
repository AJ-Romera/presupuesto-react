import React from 'react';

function Formulario() {
    return (
        <div className='formulario'>
            <form>
                <h2>Agrega tus gatos aquí</h2>

                <div className='campo'>
                    <label>Nombre Gasto</label>
                    <input
                        type='text'
                        className='u-full-width'
                        placeholder='Ej. Transporte'
                    />
                </div>

                <div className='campo'>
                    <label>Cantidad Gasto</label>
                    <input
                        type='number'
                        className='u-full-width'
                        placeholder='Ej. 300'
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
