import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Auditory() {
  const [Data, setData] = useState([]);
  const [Cashes, setCashes] = useState([]);

  useEffect(() => {
    peticionGet();
    peticionCashPays();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getUsersAuditory")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionCashPays = async () => {
    await axios.get("/api/checkout/getCashPays").then((response) => {
      if (response.data.success) {
        console.log(response.data.data);
        setCashes(response.data.data);
      } else {
        alert("Failed to get cashes");
      }
    });
  };
  console.log("data fuera del axios", Data);
  console.log("data de los pagos", Cashes);

  const renderCards = Data.map((user, index) => {
    return (
      <tr className="userData" key={index}>
        <td className="text-center">{user.user_id}</td>
        <td>
          <div className="d-flex justify-content-center">{user.username}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{user.loginDate}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{user.logoutDate}</div>
        </td>
      </tr>
    );
  });

  const renderPays = Cashes.map((pay, index) => {
    return (
      <tr className="userData" key={index}>
        <td className="text-center">{pay._id._id}</td>
        <td>
          <div className="d-flex justify-content-center">{pay.userName}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">
            {pay.UserLastName}
          </div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{pay.mountOfPay}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{pay.date}</div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <div>
          <br></br>

          <div className="d-flex justify-content-center">
            <table className="tableAuditory ml-5 mr-5">
              <thead>
                <tr className="trAuditory">
                  
                </tr>
              </thead>
              <tbody>{renderPays}</tbody>
            </table>
          </div>
        </div>
        <div className="mb-5 titleLogin container rounded mt-5 d-flex justify-content-center">
          <h1 className="text-white" >Auditoria (SECCION A PRUEBAS)</h1>
        </div>
        <div className="d-flex justify-content-center">
          <table className="tableAuditory ml-5 mr-5">
            <thead>
              <tr className="trAuditory">
                <th className="thAuditory">
                  <h4 className="text-info text-center">ID</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Usuario</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha login</h4>
                </th>
                <th className="thAuditory">
                  <h4 className="text-info text-center">Fecha logout</h4>
                </th>
              </tr>
            </thead>
            <tbody>{renderCards}</tbody>
          </table>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default Auditory;
