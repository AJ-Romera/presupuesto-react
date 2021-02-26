import React from 'react';
import Gasto from './Gasto';

function Listado({ gastos }) {
    return (
        <div className='listado gastos-realizados'>
            <h2>Listado</h2>
            {gastos.map((gasto) => (
                <Gasto key={gasto.id} gasto={gasto} />
            ))}
        </div>
    );
}

export default Listado;
