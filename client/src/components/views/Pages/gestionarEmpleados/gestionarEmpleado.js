import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function GestionarEmpleados() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getEmpleados")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderEmpleados = Data.map((empleado, index) => {
    return (
      <tr className="userData" key={index}>
        <td className="text-center">{empleado.empleado_id}</td>
        <td>
          <div className="d-flex justify-content-center">{empleado.nombre}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.apellido}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.fechaNacimiento}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.dni}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.email}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.direccion}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.telefono}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.obraSocial}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.departamento}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.remuneracion}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.puesto}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{empleado.fechaContratacion}</div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <div className="mb-5 titleLogin container rounded mt-5 d-flex justify-content-center">
          <h1 className="text-white" > Empleados </h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
                <th className="thAuditory">
                  <h4 className="text-info text-center">ID</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Nombre</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Apellido</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha Nacimiento</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">DNI</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Email</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Direccion</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Telefono</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Obra Social</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Departamento</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Remuneracion</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Puesto</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha de Contratacion</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderEmpleados}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default GestionarEmpleados;