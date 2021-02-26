import React from 'react';

function ControlPresupuesto({ presupuesto, restante }) {
    return (
        <div className='controlPresupuesto'>
            <div className='alert alert-primary'>
                Presupuesto: $ {presupuesto}
            </div>
            <div className='alert'>Restante: $ {restante}</div>
        </div>
    );
}

export default ControlPresupuesto;
