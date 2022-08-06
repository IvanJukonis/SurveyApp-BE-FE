import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function GestionarSiniestros() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getSiniestros")
      .then((response) => {
        setData(response.data.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderSiniestros = Data.map((siniestro, index) => {
    return (
      <tr className="userData" key={index}>
        <td>
          <div className="d-flex justify-content-center">{siniestro.numPoliza}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.numSiniestro}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.fechaSiniestro}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.fechaVencimiento}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.fechaDenuncia}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.descripcionDenuncia}</div>
        </td>
        <td className={siniestro.estadoSiniestro}>
          <div className="d-flex justify-content-center">{siniestro.estadoSiniestro}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.tipoInforme}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.tipoRelevamiento}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.provinciaSiniestro}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.ciudadSiniestro}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.ubicacionSiniestro}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.asegurado.apellido }</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{siniestro.tercero.apellido }</div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <div className="mb-5 titleLogin container rounded mt-5 d-flex justify-content-center">
          <h1 className="text-white" > Siniestros </h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
                <th className="thAuditory">
                  <h4 className="text-info text-center">Numero Poliza</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Numero Siniestro</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha Siniestro</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha Vencimiento</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha Denuncia</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Descripcion Denuncia</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Estado Siniestro</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Tipo Informe</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Tipo Relevamiento</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Provincia Siniestro</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Ciudad Siniestro</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Ubicacion Siniestro</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Asegurado</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Tercero</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderSiniestros}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default GestionarSiniestros;