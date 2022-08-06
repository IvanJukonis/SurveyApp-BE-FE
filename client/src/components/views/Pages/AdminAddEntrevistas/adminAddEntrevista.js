import React, {useState, useEffect} from "react";
import moment from "moment";
import Axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { addEntrevista } from "../../../../_actions/entrevistas_actions";
import { useDispatch } from "react-redux";
import "./style.css";
import { Form, Input, Button } from "antd";


function AddEntrevista(props) {
  const [siniestros, setSiniestros] = useState([])
  const dispatch = useDispatch(); 
  const obtenerSiniestros = async () => {
    await Axios
      .get("http://localhost:5000/api/admin/getSiniestros")
      .then((response) => {
        console.log(response.data.data)
        setSiniestros(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    obtenerSiniestros();
  }, []);
  return (
    <Formik
      initialValues={{
        fechaEntrevista: "",
        horaEntrevista: "",
        fechaOcurrencia: "",
        horaOcurrencia: "",
        calleAsegurado: "",
        calleTercero: "",
        direccionTercero: "",
        direccionAsegurado: "",
        lesionesAsegurado: "",
        dañosAsegurado: "",
        lesionesTercero: "",
        dañosTercero: "",
        descripcionEntrevista: "",
        siniestro:"",
      }}
      validationSchema={Yup.object().shape({
        fechaEntrevista: Yup.string().required("Ingrese una fecha de entrevista valida"),
        horaEntrevista: Yup.string().required("Ingrese una hora de entrevista valida"),
        fechaOcurrencia: Yup.string().required("Ingrese una fecha de ocurrencia valida"),
        horaOcurrencia: Yup.string().required("Ingrese una hora de ocurrencia valida"),
        calleAsegurado: Yup.string().required("Ingrese una calle valida"),
        calleTercero: Yup.string().required("Ingrese una calle valida"),
        direccionTercero: Yup.string().required("Ingrese una direccion valida"),
        direccionAsegurado: Yup.string().required("Ingrese una direccion valida"),
        lesionesAsegurado: Yup.string().required("Ingrese las lesiones del asegurado"),
        dañosAsegurado: Yup.string().required("Ingrese los daños del asegurado"),
        lesionesTercero: Yup.string().required("Ingrese las lesiones del tercero"),
        dañosTercero: Yup.string().required("Ingrese los daños del tercero"),
        descripcionEntrevista: Yup.string().required("Ingrese la descripcion de la entrevista"),
        siniestro: Yup.string().required("Selecciona un siniestro valido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // let dataToSubmit = {
          //   fechaEntrevista: values.fechaEntrevista,
          //   horaEntrevista: values.horaEntrevista,
          //   fechaOcurrencia: values.fechaOcurrencia,
          //   horaOcurrencia: values.horaOcurrencia,
          //   calleAsegurado: values.calleAsegurado,
          //   calleTercero: values.calleTercero,
          //   direccionTercero: values.dañosTercero,
          //   direccionAsegurado: values.dañosAsegurado,
          //   lesionesAsegurado: values.lesionesAsegurado,
          //   dañosAsegurado: values.dañosAsegurado,
          //   lesionesTercero: values.lesionesTercero,
          //   dañosTercero: values.dañosTercero,
          //   descripcionEntrevista: values.descripcionEntrevista,
          // };

          dispatch(addEntrevista(values)).then((response) => {
            if (response.payload.success) {
              props.history.push("/");
            } else {
              alert(response.payload.err.errmsg);
            }
          });

          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="mt-5 d-flex justify-content-center flex-column">
            <div className="mb-4 d-flex justify-content-center">
              <h2 className="text-white titleEntrevistas text-center rounded mb-2">
                Agregar Entrevista
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>

                <Form.Item required label="Fecha de Entrevista">
                  <Input
                    id="fechaEntrevista"
                    placeholder="Ingresar fecha de la entrevista"
                    type="text"
                    value={values.fechaEntrevista}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaEntrevista && touched.fechaEntrevista
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaEntrevista && touched.fechaEntrevista && (
                    <div className="inputFeedback">{errors.fechaEntrevista}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Hora de Entrevista">
                  <Input
                    id="horaEntrevista"
                    placeholder="Ingresar hora de la entrevista"
                    type="text"
                    value={values.horaEntrevista}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.horaEntrevista && touched.horaEntrevista
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.horaEntrevista && touched.horaEntrevista && (
                    <div className="inputFeedback">{errors.horaEntrevista}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Fecha de Ocurrencia">
                  <Input
                    id="fechaOcurrencia"
                    placeholder="Ingresar fecha de ocurrencia del siniestro"
                    type="text"
                    value={values.fechaOcurrencia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaOcurrencia && touched.fechaOcurrencia
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaOcurrencia && touched.fechaOcurrencia && (
                    <div className="inputFeedback">{errors.fechaOcurrencia}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Hora de Ocurrencia">
                  <Input
                    id="horaOcurrencia"
                    placeholder="Ingresar hora de ocurrencia del siniestro"
                    type="number"
                    value={values.horaOcurrencia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.horaOcurrencia && touched.horaOcurrencia
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.horaOcurrencia && touched.horaOcurrencia && (
                    <div className="inputFeedback">
                      {errors.horaOcurrencia}
                    </div>
                  )}
                </Form.Item>

                <Form.Item required label="Calle de circulacion del Vehiculo Asegurado">
                  <Input
                    id="calleAsegurado"
                    placeholder="Ingresar calle de circulacion del asegurado"
                    type="text"
                    value={values.calleAsegurado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.calleAsegurado && touched.calleAsegurado
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.calleAsegurado && touched.calleAsegurado && (
                    <div className="inputFeedback">{errors.calleAsegurado}</div>
                  )}

                </Form.Item>
                <Form.Item required label="Calle de circulacion del Vehiculo Tercero">
                  <Input
                    id="calleTercero"
                    placeholder="Ingresar calle de circulacion del tercero"
                    type="text"
                    value={values.calleTercero}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.calleTercero && touched.calleTercero
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.calleTercero && touched.calleTercero && (
                    <div className="inputFeedback">{errors.calleTercero}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Direccion de Circulacion del Vehiculo Tercero">
                  <Input
                    id="direccionTercero"
                    placeholder="Ingresar direccion de circulacion del vehiculo tercero"
                    type="text"
                    value={values.direccionTercero}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.direccionTercero && touched.direccionTercero
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.direccionTercero && touched.direccionTercero && (
                    <div className="inputFeedback">{errors.direccionTercero}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Direccion de Circulacion del Vehiculo Asegurado">
                  <Input
                    id="direccionAsegurado"
                    placeholder="Ingresar direccion de circulacion del vehiculo asegurado"
                    type="text"
                    value={values.direccionAsegurado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.direccionAsegurado && touched.direccionAsegurado
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.direccionAsegurado && touched.direccionAsegurado && (
                    <div className="inputFeedback">{errors.direccionAsegurado}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Describir Lesiones del Asegurado">
                  <Input
                    id="lesionesAsegurado"
                    placeholder="Ingresar lesiones del asegurado"
                    type="text"
                    value={values.lesionesAsegurado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lesionesAsegurado && touched.lesionesAsegurado
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.lesionesAsegurado && touched.lesionesAsegurado && (
                    <div className="inputFeedback">{errors.lesionesAsegurado}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Describir Daños del Vehiculo Asegurado">
                  <Input
                    id="dañosAsegurado"
                    placeholder="Ingresar daños del vehiculo asegurado"
                    type="text"
                    value={values.dañosAsegurado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.dañosAsegurado && touched.dañosAsegurado
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.dañosAsegurado && touched.dañosAsegurado && (
                    <div className="inputFeedback">{errors.dañosAsegurado}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Describir Lesiones del Tercero">
                  <Input
                    id="lesionesTercero"
                    placeholder="Ingresar lesiones del tercero"
                    type="text"
                    value={values.lesionesTercero}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lesionesTercero && touched.lesionesTercero
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.lesionesTercero && touched.lesionesTercero && (
                    <div className="inputFeedback">{errors.lesionesTercero}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Describir Daños del Vehiculo Tercero">
                  <Input
                    id="dañosTercero"
                    placeholder="Ingresar daños del vehiculo tercero"
                    type="text"
                    value={values.dañosTercero}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.dañosTercero && touched.dañosTercero
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.dañosTercero && touched.dañosTercero && (
                    <div className="inputFeedback">{errors.dañosTercero}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Relato Entrevista">
                  <Input
                    id="descripcionEntrevista"
                    placeholder="Ingresar la descripcion de la entrevista"
                    type="text"
                    value={values.descripcionEntrevista}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.descripcionEntrevista && touched.descripcionEntrevista
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.descripcionEntrevista && touched.descripcionEntrevista && (
                    <div className="inputFeedback">{errors.descripcionEntrevista}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Siniestro">
                  <select
                    name="siniestro"
                    value={values.siniestro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                      <option value="">Selecciona un siniestro</option>
                      {siniestros.map((siniestro) => {
                        return (
                          <option value={siniestro._id} key={siniestro._id}>
                            {siniestro.numSiniestro}
                          </option>
                        )
                      })}
                    </select>
                    {errors.siniestro && touched.siniestro && (
                      <div className="inputFeedback">{errors.siniestro}</div>
                    )}
                  </Form.Item>

               
                <div className="d-flex justify-content-center">
                  <Form.Item>
                    <Button
                      onClick={handleSubmit}
                      type="primary"
                      disabled={isSubmitting}
                    >
                      Agregar
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default AddEntrevista;
