import React, { useEffect, useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Error from './components/Error';

function App() {
    // Definir el state
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [mostrarPregunta, setMostrarPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);
    const [gasto, setGasto] = useState({});
    const [crearGasto, setCrearGasto] = useState(false);
    const [error, setError] = useState(false);

    // useEffect para actualizar el restante
    useEffect(() => {
        if (crearGasto) {
            // Agrega nuevo presupuesto
            setGastos([...gastos, gasto]);

            // Resta del presupuesto actual
            const presupuestoRestante = restante - gasto.cantidad;
            setRestante(presupuestoRestante);

            // Comprueba si nos hemos pasado del presupuesto
            if (restante < gasto.cantidad) {
                setError(true);
                setCrearGasto(false);
                return;
            }

            // Resetear a false
            setCrearGasto(false);
            setError(false);
        }
    }, [gasto, crearGasto, gastos, restante]);

    return (
        <div className='container'>
            <header>
                <h1>Gasto Semanal</h1>

                <div className='contenido-principal contenido'>
                    {mostrarPregunta ? (
                        <Pregunta
                            setPresupuesto={setPresupuesto}
                            setRestante={setRestante}
                            setMostrarPregunta={setMostrarPregunta}
                        />
                    ) : (
                        <div className='row'>
                            <div className='one-half column'>
                                <Formulario
                                    setGasto={setGasto}
                                    setCrearGasto={setCrearGasto}
                                />
                            </div>

                            <div className='one-half column'>
                                <ControlPresupuesto
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />
                                {error ? (
                                    <Error mensaje='¡Has excedido tu presupuesto!' />
                                ) : null}
                                <Listado gastos={gastos} />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
