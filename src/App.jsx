import { Row, Col } from "react-bootstrap";
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
        <h1 className="text-start">Lista de colaboradores</h1>
        <section>
          <div>
            {/* Crear componente Buscador */}
            <h1>Buscador</h1>
            <Buscador />
          </div>
        </section>
        <section className="listadoFormulario">
          <div>
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
