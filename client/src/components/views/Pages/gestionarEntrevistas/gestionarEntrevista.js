import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function GestionarEntrevistas() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getEntrevistas")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const renderEntrevistas = Data.map((entrevista, index) => {
    return (
      <tr className="userData" key={index}>
        <td>
          <div className="d-flex justify-content-center">{entrevista.fechaEntrevista}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.horaEntrevista}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.fechaOcurrencia}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.horaOcurrencia}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.calleAsegurado}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.calleTercero}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.direccionTercero}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.direccionAsegurado}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.lesionesAsegurado}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.dañosAsegurado}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.lesionesTercero}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.dañosTercero}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.descripcionEntrevista}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{entrevista.siniestro.numPoliza }</div>
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
          <h1 className="text-white" > Entrevistas </h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha Entrevista</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Hora Entrevista</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha Ocurrencia</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Hora Ocurrencia</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Calle Asegurado</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Calle Tercero</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Direccion Tercero</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Direccion Asegurado</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Lesiones Asegurado</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Daños Asegurado</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Lesiones Tercero</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Daños Tercero</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Descripcion Entrevista</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Siniestro</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderEntrevistas}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default GestionarEntrevistas;