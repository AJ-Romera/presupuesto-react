import React from 'react';
import PropTypes from 'prop-types';

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

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired,
};

export default Gasto;
