import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { deleteNovedades } from "../../../../_actions/novedades_actions";



function GestionarNovedades() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getNovedades")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickDelete = (novedad_id) => {
    console.log("primero")

    const variable = {_id: novedad_id}

    axios.post("http://localhost:5000/api/admin/deleteNovedad", variable).then(response => {
      if (response.data.success) {
        console.log("sec")
        peticionGet()
      } else {
        console.log("ter")
        alert('Failed to Remove ')
      }
    })
  }

  


  const renderNovedades = Data.map((novedad, index) => {
    console.log(novedad._id._id)
    return (
      <tr className="userData" key={index}>
        <td>
          <div className="d-flex justify-content-center">{novedad.fechaNovedad}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{novedad.descripcion}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{novedad.estadoNovedad}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{novedad.siniestro.numPoliza }</div>
        </td>
        <td>
          <button onClick={()=> onClickDelete(novedad._id._id) } className="d-flex justify-content-center">Eliminar</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <div className="mb-5 titleLogin container rounded mt-5 d-flex justify-content-center">
          <h1 className="text-white" > Novedades </h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
                
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Descripcion</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Estado</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Siniestro</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderNovedades}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default GestionarNovedades;