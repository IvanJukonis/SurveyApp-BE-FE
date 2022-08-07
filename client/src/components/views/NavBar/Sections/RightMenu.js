/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../Modelo de Seguridad/Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import "../style.css";
import { OmitProps } from "antd/lib/transfer/renderListBody";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  //acceder a los datos del estado (mapStateToProps)
  const user = useSelector((state) => state.user);

  /*const userAuditory = () => {
    var dt = new Date();
    var time =
      dt.getDate() +
      "/" +
      (dt.getMonth() + 1) +
      "/" +
      dt.getFullYear() +
      "/" +
      dt.getHours() +
      ":" +
      dt.getMinutes() +
      ":" +
      dt.getSeconds();

    const user_id = user.userData._id;
    const username = user.userData.name;
    const cookies = new Cookies();
    const loginDate = cookies.get("logDate");
    const logoutDate = time;

    const body = {
      user_id,
      username,
      loginDate,
      logoutDate,
    };
    console.log(body);
    axios
      .post("http://localhost:5000/api/admin/addAuditoryUser", body)
      .then((res) => {
        if (res.success !== false) {
          console.log("Auditoria de login guardada");
          cookies.remove("logDate");
        } else {
          console.log("error, no se pudo guardar");
        }
      });
  };*/

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        //userAuditory();
        props.history.push("/login");
      } else {
        alert("Fallo el login");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Ingresar</a>
        </Menu.Item>   
      </Menu>
    );
  } else {
    return (
      <div>
        <Menu mode={props.mode}>
          <SubMenu title={<span>Usuario</span>}>
            <MenuItemGroup className="mr-5" title="">
              <Menu.Item key="setting:2">
                <a href="/changePassword">Cambiar contraseña</a>
              </Menu.Item>
              <Menu.Item key="logout">
                <a className="containerLogout" onClick={logoutHandler}>
                  Logout
                </a>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={<span>Sistema</span>}>
            <MenuItemGroup className="mr-5" title="">
              <Menu.Item key="gestionarUser">
              <a href="/gestionarUser">Usuarios</a>
            </Menu.Item>
              <Menu.Item key="app">
                <a onClick={()=> {props.history.push("/register")}}>Crear Usuario</a>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={<span>Administracion</span>}>
            <MenuItemGroup className="mr-5" title="">
              <Menu.Item key="contabilidad">
                <a href="/contabilidad">Contabilidad</a>
              </Menu.Item>
              <Menu.Item key="gestionarEmpleado">
              <a href="/gestionarEmpleado">Empleados</a>
            </Menu.Item>
            <Menu.Item key="addEmpleado">
              <a href="/addEmpleado">Agregar Empleado</a>
            </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(RightMenu);
