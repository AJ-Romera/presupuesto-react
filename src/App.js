import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
    // Definir el state
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [mostrarPregunta, setMostrarPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);

    // Función que se ejecuta cuando agregamos un nuevo gasto
    const agregarNuevoGasto = (gasto) => {
        setGastos([...gastos, gasto]);
    };

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
                                    agregarNuevoGasto={agregarNuevoGasto}
                                />
                            </div>

                            <div className='one-half column'>
                                <Listado gastos={gastos} />
                                <ControlPresupuesto
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
