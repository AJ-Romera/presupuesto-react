import React from 'react';
import Gasto from './Gasto';

function Listado({ gastos }) {
    return (
        <div className='listado gastos-realizados'>
            {gastos.map((gasto) => (
                <Gasto key={gasto.id} gasto={gasto} />
            ))}
        </div>
    );
}

export default Listado;
