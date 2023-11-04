import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./Formulario.css";

export const Formulario = ({ setAlert, setColaboradores, colaboradores }) => {
  const [formulario, setFormulario] = useState({
    correo: "",
    nombre: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const onchange = (valor) => {
    setFormulario({ ...formulario, [valor.target.name]: valor.target.value });
  };

  console.log(formulario);

  const onsubmit = (e) => {
    e.preventDefault();

    if (
      formulario.nombre == "" ||
      formulario.correo == "" ||
      formulario.edad == "" ||
      formulario.cargo == "" ||
      formulario.telefono == ""
    ) {
      setAlert({
        color: "danger",
        mensaje: "Deben estar llenos los campos",
      });
      return;
    } else {
      setAlert({
        color: "success",
        mensaje: "Registro exitoso",
      });
    }
    //No se están limpiando correctamente
    setFormulario({
      correo: "",
      nombre: "",
      edad: "",
      cargo: "",
      telefono: "",
    });

    // Agregar registro
    // id unico / UUID
    const newColaborador = { ...formulario, id: "asdasd" };
    setColaboradores([...colaboradores, newColaborador]);
  };

  return (
    <Form onSubmit={onsubmit}>
      <Form.Group className="inputsForm">
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Nombre"
          onChange={onchange}
          value={formulario.nombre}
        />
        <Form.Control
          name="correo"
          type="email"
          placeholder="correo"
          onChange={onchange}
        />
        <Form.Control
          name="edad"
          type="number"
          placeholder="Edad"
          onChange={onchange}
        />
        <Form.Control
          name="cargo"
          type="text"
          placeholder="Cargo"
          onChange={onchange}
        />
        <Form.Control
          className="inputForm"
          name="telefono"
          type="number"
          placeholder="Teléfono"
          onChange={onchange}
        />
        <Button variant="info" type="submit" className="w-100">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
};
