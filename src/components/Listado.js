import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

function Listado({ gastos }) {
    return (
        <div className='listado gastos-realizados'>
            {gastos.map((gasto) => (
                <Gasto key={gasto.id} gasto={gasto} />
            ))}
        </div>
    );
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
};

export default Listado;
