import React from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

function ControlPresupuesto({ presupuesto, restante }) {
    return (
        <div className='controlPresupuesto'>
            <h2>Listado de Gastos</h2>
            <div className='alert alert-primary'>
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </div>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
