import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function GestionarVehiculos() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getVehiculos")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const onClickDelete = (vehiculo_id) => {
    const variable = {vehiculo: vehiculo_id}

    axios.post("http://localhost:5000/api/admin/deleteVehiculo", variable).then(response => {
      if (response.data.success) {
        console.log("sec")
        peticionGet()
      } else {
        console.log("ter")
        alert('Failed to Remove')
      }
    })
  }

  const renderVehiculos = Data.map((vehiculo, index) => {
    return (
      <tr className="userData" key={index}>
        <td className="text-center">{vehiculo.vehiculo_id}</td>
        <td>
          <div className="d-flex justify-content-center">{vehiculo.marca}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{vehiculo.modelo}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{vehiculo.dominio}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{vehiculo.año}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{vehiculo.tipo}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{vehiculo.color}</div>
        </td>
        <td>
          <button onClick={()=> onClickDelete(vehiculo._id._id) } className="d-flex justify-content-center">Eliminar</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <div className="mb-5 titleLogin container rounded mt-5 d-flex justify-content-center">
          <h1 className="text-white" > Vehiculos </h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
                <th className="thAuditory">
                  <h4 className="text-info text-center">ID</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Marca</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Modelo</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Dominio</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Año</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Tipo</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Color</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderVehiculos}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default GestionarVehiculos;