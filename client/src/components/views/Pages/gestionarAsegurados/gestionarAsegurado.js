import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

function GestionarAsegurados() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getAsegurados")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderAsegurados = Data.map((asegurado, index) => {
    return (
      <tr className="userData" key={index}>
        <td>
          <div className="d-flex justify-content-center">{asegurado.nombre}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{asegurado.apellido}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{asegurado.fechaNacimiento}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{asegurado.dni}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{asegurado.email}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{asegurado.telefono}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{asegurado.licencia}</div>
        </td>
        <td className="botonesRows">
          <button  className="botones">Eliminar</button>
        </td>
        <td className="botonesRows">
          <button  className="botones">Modificar</button>
        </td>
        <td className="botonesRows">
          <button  className="botones">Exportar</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="fondo">
        <div className="mb-5 titleLogin container rounded mt-5 d-flex justify-content-center">
          <h1 className="text-white" > Asegurados </h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
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
                  <h4 className="text-info text-center">Telefono</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Licencia</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderAsegurados}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default GestionarAsegurados;