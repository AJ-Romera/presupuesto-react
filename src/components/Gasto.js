import React from 'react';

function Gasto({ gasto }) {
    return (
        <div className='gasto'>
            <li className='gastos'>
                <p>
                    {gasto.nombre}

                    <span className='gasto'>$ {gasto.cantidad}</span>
                </p>
            </li>
        </div>
    );
}

export default Gasto;
