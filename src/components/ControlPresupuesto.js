import React from 'react';
import { revisarPresupuesto } from '../helpers';

function ControlPresupuesto({ presupuesto, restante }) {
    return (
        <div className='controlPresupuesto'>
            <div className='alert alert-primary'>
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </div>
    );
}

export default ControlPresupuesto;
