import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function GestionarUsers() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getUsers")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const renderUsers = Data.map((user, index) => {
    return (
      <tr className="userData" key={index}>
        <td className="text-center">{user.email}</td>
        <td>
          <div className="d-flex justify-content-center">{user.name}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{user.lastName}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{user.role}</div>
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
      <div>
        <div className="mb-5 titleLogin container rounded mt-5 d-flex justify-content-center">
          <h1 className="text-white" > Empleados </h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
                <th className="thAuditory">
                  <h4 className="text-info text-center">Correo Electronico</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Nombre</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Apellido</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Rol</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderUsers}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default GestionarUsers;