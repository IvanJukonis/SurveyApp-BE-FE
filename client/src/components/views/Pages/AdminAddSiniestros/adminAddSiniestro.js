import React, {useState, useEffect} from "react";
import moment from "moment";
import Axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { addSiniestro } from "../../../../_actions/siniestros_actions";
import { useDispatch } from "react-redux";
import "./style.css";
import { Form, Input, Button, Select } from "antd";
import { mapValues } from "lodash";


function AddSiniestro(props) {
  const [asegurados, setAsegurados] = useState([])
  const [terceros, setTerceros] = useState([])
  const dispatch = useDispatch();
  const obtenerAsegurados = async () => {
    await Axios
      .get("http://localhost:5000/api/admin/getAsegurados")
      .then((response) => {
        console.log(response.data.data)
        setAsegurados(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const obtenerTerceros = async () => {
    await Axios
      .get("http://localhost:5000/api/admin/getTerceros")
      .then((response) => {
        console.log(response.data.data)
        setTerceros(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    obtenerTerceros();
    obtenerAsegurados();
  }, []);

  return (
    <Formik
      initialValues={{
        numPoliza: "",
        numSiniestro: "",
        fechaSiniestro: "",
        fechaVencimiento: "",
        fechaDenuncia: "",
        descripcionDenuncia: "",
        estadoSiniestro: "",
        tipoInforme: "",
        tipoRelevamiento: "",
        provinciaSiniestro: "",
        ciudadSiniestro: "",
        ubicacionSiniestro: "",
        asegurado: "",
        tercero: "",
      }}
      validationSchema={Yup.object().shape({
        numPoliza: Yup.number().required("Ingrese un numero de poliza valido"),
        numSiniestro: Yup.number().required("Ingrese un numero de poliza valido"),
        fechaSiniestro: Yup.string().required("Ingrese una fecha de siniestro valida"),
        fechaVencimiento: Yup.string().required("Ingrese una fecha de vencimiento de siniestro valida"),
        fechaDenuncia: Yup.string().required("Ingrese una fecha de denuncia de siniestro valida"),
        descripcionDenuncia: Yup.string().required("Ingrese una descripcion de denuncia valida"),
        estadoSiniestro: Yup.string().required("Seleccionar un valor"),
        tipoInforme: Yup.string().required("Ingrese un tipo de informe valido"),
        tipoRelevamiento: Yup.string().required("Ingrese un tipo de relevamiento valido"),
        provinciaSiniestro: Yup.string().required("Ingrese provincia valida"),
        ciudadSiniestro: Yup.string().required("Ingrese una ciudad valida"),
        ubicacionSiniestro: Yup.string().required("Ingrese una ubicacion valida"),
        asegurado: Yup.string().required("Selecciona un asegurado valido"),
        tercero: Yup.string().required("Selecciona un asegurado valido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // let dataToSubmit = {
          //   responsables: values.responsables,
          //   numPoliza: values.numPoliza,
          //   numSiniestro: values.numSiniestro,
          //   fechaSiniestro: values.fechaSiniestro,
          //   fechaVencimiento: values.fechaVencimiento,
          //   fechaDenuncia: values.fechaDenuncia,
          //   descripcionDenuncia: values.descripcionDenuncia,
          //   estadoSiniestro: values.estadoSiniestro,
          //   tipoInforme: values.tipoInforme,
          //   tipoRelevamiento: values.tipoRelevamiento,
          //   provinciaSiniestro: values.provinciaSiniestro,
          //   ciudadSiniestro: values.ciudadSiniestro,
          //   ubicacionSiniestro: values.ubicacionSiniestro,
          // };

          dispatch(addSiniestro(values)).then((response) => {
            console.log(values)
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
              <h2 className="text-white titleSiniestros text-center rounded mb-2">
                Agregar Siniestro
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>

                <Form.Item required label="Numero de Poliza">
                  <Input
                    id="numPoliza"
                    placeholder="Ingresar numero de poliza del asegurado"
                    type="number"
                    value={values.numPoliza}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.numPoliza && touched.numPoliza
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.numPoliza && touched.numPoliza && (
                    <div className="inputFeedback">{errors.numPoliza}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Numero de Siniestro">
                  <Input
                    id="numSiniestro"
                    placeholder="Ingresar numero de siniestro"
                    type="number"
                    value={values.numSiniestro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.numSiniestro && touched.numSiniestro
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.numSiniestro && touched.numSiniestro && (
                    <div className="inputFeedback">{errors.numSiniestro}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Fecha de Siniestro">
                  <Input
                    id="fechaSiniestro"
                    placeholder="Ingresar fecha del siniestro"
                    type="text"
                    value={values.fechaSiniestro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaSiniestro && touched.fechaSiniestro
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaSiniestro && touched.fechaSiniestro && (
                    <div className="inputFeedback">{errors.fechaSiniestro}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Fecha de Vencimiento">
                  <Input
                    id="fechaVencimiento"
                    placeholder="Ingresar fecha de vencimiento del siniestro"
                    type="text"
                    value={values.fechaVencimiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaVencimiento && touched.fechaVencimiento
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaVencimiento && touched.fechaVencimiento && (
                    <div className="inputFeedback">
                      {errors.fechaVencimiento}
                    </div>
                  )}
                </Form.Item>

                <Form.Item required label="Fecha de Denuncia">
                  <Input
                    id="fechaDenuncia"
                    placeholder="Ingresar fecha de denuncia del siniestro"
                    type="text"
                    value={values.fechaDenuncia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaDenuncia && touched.fechaDenuncia
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaDenuncia && touched.fechaDenuncia && (
                    <div className="inputFeedback">{errors.fechaDenuncia}</div>
                  )}

                </Form.Item>
                <Form.Item required label="Descripcion de Denuncia">
                  <Input
                    id="descripcionDenuncia"
                    placeholder="Ingresar descripcion de denuncia del siniestro"
                    type="text"
                    value={values.descripcionDenuncia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.descripcionDenuncia && touched.descripcionDenuncia
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.descripcionDenuncia && touched.descripcionDenuncia && (
                    <div className="inputFeedback">{errors.descripcionDenuncia}</div>
                  )}
                </Form.Item>
                
                <Form.Item required label="Estado de Siniestro">
                  <select
                    name="estadoSiniestro"
                    value={values.estadoSiniestro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                  <option value="" label="" />
                  <option value="Ingresado" label="Ingresado"/>
                  <option value="Asignado" label= "Asignado"/>
                  <option value="Finalizado" label= "Finalizado"/>
                  <option value="Facturado" label= "Facturado"/>
                  <option value="Prorroga" label= "Prorroga"/>
                  </select>
                  {errors.estadoSiniestro && touched.estadoSiniestro && (
                      <div className="inputFeedback">{errors.estadoSiniestro}</div>
                    )}
                </Form.Item>

                <Form.Item required label="Tipo de Informe">
                  <Input
                    id="tipoInforme"
                    placeholder="Ingresar tipo de informe del siniestro"
                    type="text"
                    value={values.tipoInforme}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.tipoInforme && touched.tipoInforme
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.tipoInforme && touched.tipoInforme && (
                    <div className="inputFeedback">{errors.tipoInforme}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Tipo de Relevamiento">
                  <Input
                    id="tipoRelevamiento"
                    placeholder="Ingresar tipo de relevamiento del siniestro"
                    type="text"
                    value={values.tipoRelevamiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.tipoRelevamiento && touched.tipoRelevamiento
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.tipoRelevamiento && touched.tipoRelevamiento && (
                    <div className="inputFeedback">{errors.tipoRelevamiento}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Provincia del Siniestro">
                  <Input
                    id="provinciaSiniestro"
                    placeholder="Ingresar provincia del siniestro"
                    type="text"
                    value={values.provinciaSiniestro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.provinciaSiniestro && touched.provinciaSiniestro
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.provinciaSiniestro && touched.provinciaSiniestro && (
                    <div className="inputFeedback">{errors.provinciaSiniestro}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Ciudad del Siniestro">
                  <Input
                    id="ciudadSiniestro"
                    placeholder="Ingresar ciudad del siniestro"
                    type="text"
                    value={values.ciudadSiniestro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.ciudadSiniestro && touched.ciudadSiniestro
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.ciudadSiniestro && touched.ciudadSiniestro && (
                    <div className="inputFeedback">{errors.ciudadSiniestro}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Ubicacion del Siniestro">
                  <Input
                    id="ubicacionSiniestro"
                    placeholder="Ingresar ubicacion del siniestro"
                    type="text"
                    value={values.ubicacionSiniestro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.ubicacionSiniestro && touched.ubicacionSiniestro
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.ubicacionSiniestro && touched.ubicacionSiniestro && (
                    <div className="inputFeedback">{errors.ubicacionSiniestro}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Asegurado">
                  <select
                    name="asegurado"
                    value={values.asegurado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                      <option value="">Selecciona un asegurado</option>
                      {asegurados.map((asegurado) => {
                        return (
                          <option value={asegurado._id} key={asegurado._id}>
                            {asegurado.apellido}
                          </option>
                        )
                      })}
                    </select>
                    {errors.asegurado && touched.asegurado && (
                      <div className="inputFeedback">{errors.asegurado}</div>
                    )}
                  </Form.Item>

                  <Form.Item required label="Tercero">
                  <select
                    name="tercero"
                    value={values.tercero}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                      <option value="">Selecciona un tercero</option>
                      {terceros.map((tercero) => {
                        return (
                          <option value={tercero._id} key={tercero._id}>
                            {tercero.apellido}
                          </option>
                        )
                      })}
                    </select>
                    {errors.tercero && touched.tercero && (
                      <div className="inputFeedback">{errors.tercero}</div>
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

export default AddSiniestro;
