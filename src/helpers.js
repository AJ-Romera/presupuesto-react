// Los helpers contienen funciones que se usan en varios componentes
export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if (presupuesto / 4 > restante) {
        clase = 'alert alert-danger';
    } else if (presupuesto / 2 > restante) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }

    return clase;
};
