import { Table } from "react-bootstrap";
import "./Listado.css";

export const Listado = ({ colaboradores }) => {
  return (
    <>
      <Table class="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}

          {/* {renderTablaColaboradores()} */}
        </tbody>
      </Table>
    </>
  );
};
