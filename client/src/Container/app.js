import React, { Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hook/auth";
import LandingPage from "../components/views/LandingPage/landingPage.js";
import RegisterPage from "../components/views/Modelo de Seguridad/Register page/registerPage";
import NavBar from "../components/views/NavBar/NavBar";
import LoginPage from "../components/views/Modelo de Seguridad/Login page/Login home/loginHome";
import forgotPassword from "../components/views/Modelo de Seguridad/Login page/Forgot password/forgotPassword";
import changePassword from "../components/views/Modelo de Seguridad/Login page/Reset password/resetPassword";
import AddVehiculo from "../components/views/Pages/AdminAddVehiculos/adminAddVehiculo";
import AddEntrevista from "../components/views/Pages/AdminAddEntrevistas/adminAddEntrevista";
import AddAsegurado from "../components/views/Pages/AdminAddAsegurados/adminAddAsegurado";
import AddTercero from "../components/views/Pages/AdminAddTerceros/adminAddTercero";
import AddSiniestro from "../components/views/Pages/AdminAddSiniestros/adminAddSiniestro";
import AddNovedad from "../components/views/Pages/AdminAddNovedades/adminAddNovedad";
import Auditory from "../components/views/Auditory/index";
import gestionarNovedad from "../components/views/Pages/gestionarNovedades/gestionarNovedad";
import gestionarEntrevista from "../components/views/Pages/gestionarEntrevistas/gestionarEntrevista";
import gestionarVehiculo from "../components/views/Pages/gestionarVehiculos/gestionarVehiculo";
import gestionarAsegurado from "../components/views/Pages/gestionarAsegurados/gestionarAsegurado";
import gestionarTercero from "../components/views/Pages/gestionarTerceros/gestionarTercero";
import gestionarSiniestro from "../components/views/Pages/gestionarSiniestros/gestionarSiniestro";
import gestionarUser from "../components/views/Pages/gestionarUsers/gestionarUser";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside
class App extends Component {
  render() {
    return (
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <div style={{ paddingTop: "69px", minHeight: "calc(10vh - 5px)" }}>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, true)}
            />
            <Route
              exact
              path="/forgotPassword"
              component={Auth(forgotPassword, false)}
            />
            <Route
              exact
              path="/changePassword"
              component={Auth(changePassword, true)}
            />
            <Route exact path="/Audits" component={Auth(Auditory, true)} />
            <Route exact path="/AddVehiculo" component={Auth(AddVehiculo, true)} />
            <Route exact path="/AddAsegurado" component={Auth(AddAsegurado, true)} />
            <Route exact path="/AddTercero" component={Auth(AddTercero, true)} />
            <Route exact path="/AddSiniestro" component={Auth(AddSiniestro, true)} />
            <Route exact path="/AddNovedad" component={Auth(AddNovedad, true)} />
            <Route exact path="/AddEntrevista" component={Auth(AddEntrevista, true)} />
            <Route exact path="/gestionarNovedad" component={Auth(gestionarNovedad, true)}/>
            <Route exact path="/gestionarEntrevista" component={Auth(gestionarEntrevista, true)}/>
            <Route exact path="/gestionarVehiculo" component={Auth(gestionarVehiculo, true)}/>
            <Route exact path="/gestionarSiniestro" component={Auth(gestionarSiniestro, true)}/>
            <Route exact path="/gestionarTercero" component={Auth(gestionarTercero, true)}/>
            <Route exact path="/gestionarAsegurado" component={Auth(gestionarAsegurado, true)}/>
            <Route exact path="/gestionarUser" component={Auth(gestionarUser, true)}/>
          </div>
        </Suspense>
      </Switch>
    );
  }
}

export default App;
