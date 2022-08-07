import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector((state) => state.user);
  let body;
  if (
    
    (user.userData && user.userData.isAuth === false)
  ) {
    body = (
      <Menu mode={props.mode}>
        <Menu.Item key="Start">
          <a href="/">Inicio</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    body = (
      <Menu mode={props.mode}>
        <SubMenu title={<span>Siniestros</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="gestionarSiniestro">
              <a href="/gestionarSiniestro">Gestionar Siniestros</a>
            </Menu.Item>
            <Menu.Item key="addSiniestro">
              <a href="/addSiniestro">Agregar Siniestro</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Terceros</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="gestionarTercero">
              <a href="/gestionarTercero">Gestionar Terceros</a>
            </Menu.Item>
            <Menu.Item key="addTercero">
              <a href="/addTercero">Agregar Tercero</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Asegurados</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="gestionarAsegurado">
              <a href="/gestionarAsegurado">Gestionar Asegurados</a>
            </Menu.Item>
            <Menu.Item key="addAsegurado">
              <a href="/addAsegurado">Agregar Asegurado</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Vehiculos</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="gestionarVehiculo">
              <a href="/gestionarVehiculo">Gestionar Vehiculos</a>
            </Menu.Item>
            <Menu.Item key="addVehiculo">
              <a href="/addVehiculo">Agregar Vehiculo</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Entrevistas</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="gestionarEntrevista">
              <a href="/gestionarEntrevista">Gestionar Entrevistas</a>
            </Menu.Item>
            <Menu.Item key="addEntrevista">
              <a href="/addEntrevista">Agregar Entrevista</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Novedades</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="gestionarNovedad">
              <a href="/gestionarNovedad">Gestionar Novedades</a>
            </Menu.Item>
            <Menu.Item key="addNovedad">
              <a href="/addNovedad">Agregar Novedad</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Instructivos</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="landing">
              <a href="/landing">Manual</a>
            </Menu.Item>
            <Menu.Item key="landing">
              <a href="/landing">Archivos</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
      
    );
  }
  return body;
}

export default LeftMenu;
