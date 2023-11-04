import { Listado } from "./components/listado/Listado";
// obtener data de archivo baseColaboradores
import { baseColaboradores } from "./db/BaseColaboradores";
import { useState } from "react";
import { Formulario } from "./components/formulario/Formulario";
import { Alert } from "./components/alert/Alert";
import "./App.css";
import Buscador from "./components/buscador/Buscador";

const App = () => {
  // almacenar data en un hook
  const [colaboradores, setColaboradores] = useState(baseColaboradores); // []

  const [alert, setAlert] = useState({
    color: "",
    mensaje: "",
  });

  return (
    <>
      <div className="contenido">
        <h1 className="titulo">Lista de colaboradores</h1>
        <hr className="hr" />
        <section>
          <div className="buscador">
            <Buscador />
          </div>
        </section>
        <br />
        <section className="listadoFormulario">
          <div className="listado">
            <Listado colaboradores={colaboradores} />
          </div>
          <div className="formulario">
            <h2>Agregar colaborador</h2>
            <Formulario
              setAlert={setAlert}
              setColaboradores={setColaboradores}
              colaboradores={colaboradores}
            />
            {alert.mensaje !== "" && <Alert>{alert.mensaje}</Alert>}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
