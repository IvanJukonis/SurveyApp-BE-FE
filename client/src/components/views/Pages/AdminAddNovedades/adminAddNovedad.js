import React, {useState, useEffect} from "react";
import moment from "moment";
import Axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { addNovedad } from "../../../../_actions/novedades_actions";
import { useDispatch } from "react-redux";
import "./style.css";

import { Form, Input, Button } from "antd";

function AddNovedad(props) {
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
        fechaNovedad: "",
        descripcion: "",
        estadoNovedad: "",
        siniestro: "",
      }}
      validationSchema={Yup.object().shape({
        fechaNovedad: Yup.string().required("Ingrese una fecha valida"),
        descripcion: Yup.string().required("Ingrese una descripcion valida"),
        estadoNovedad: Yup.string().required("Ingrese un estado valido"),
        siniestro: Yup.string().required("Seleccionar un siniestro valido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // let dataToSubmit = {
          //   fechaNovedad: values.fechaNovedad,
          //   descripcion: values.descripcion,
          //   estadoNovedad: values.estadoNovedad,
          // };

          dispatch(addNovedad(values)).then((response) => {
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
              <h2 className="text-white titleNovedades text-center rounded mb-2">
                Agregar Novedad
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>

                <Form.Item required label="Fecha">
                  <Input
                    id="fechaNovedad"
                    placeholder="Ingresar fecha de la novedad"
                    type="text"
                    value={values.fechaNovedad}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaNovedad && touched.fechaNovedad
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaNovedad && touched.fechaNovedad && (
                    <div className="inputFeedback">{errors.fechaNovedad}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Descripcion">
                  <Input
                    id="descripcion"
                    placeholder="Ingresar descripcion de la novedad"
                    type="text"
                    value={values.descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.descripcion && touched.descripcion
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.descripcion && touched.descripcion && (
                    <div className="inputFeedback">{errors.descripcion}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Estado">
                  <Input
                    id="estadoNovedad"
                    placeholder="Ingresar estado de la novedad"
                    type="text"
                    value={values.estadoNovedad}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.estadoNovedad && touched.estadoNovedad
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.estadoNovedad && touched.estadoNovedad && (
                    <div className="inputFeedback">{errors.estadoNovedad}</div>
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

export default AddNovedad;


