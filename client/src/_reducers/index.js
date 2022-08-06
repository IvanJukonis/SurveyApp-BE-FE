import { combineReducers } from "redux";
import user from "./user_reducer";
import Vehiculo from "./vehiculosReducer";
import Entrevista from "./entrevistasReducer";
import Novedad from "./novedadesReducer";
import Siniestro from "./siniestrosReducer";
import Tercero from "./tercerosReducer";
import Asegurado from "./aseguradosReducer";

const rootReducer = combineReducers({
  user,
  Vehiculo,
  Entrevista,
  Novedad,
  Siniestro,
  Asegurado,
  Tercero,
});

export default rootReducer;
