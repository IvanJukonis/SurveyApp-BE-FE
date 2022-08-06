import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addVehiculo } from "../../../../_actions/vehiculos_actions";
import { useDispatch } from "react-redux";
import "./style.css";

import { Form, Input, Button } from "antd";

function AddVehiculo(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        marca: "",
        modelo: "",
        dominio: "",
        año: "",
        tipo: "",
        color: "",
      }}
      validationSchema={Yup.object().shape({
        marca: Yup.string().required("Ingrese una marca valida"),
        modelo: Yup.string().required("Ingrese un modelo valido"),
        dominio: Yup.string().required("Ingrese un dominio valido"),
        año: Yup.number().required("Ingrese un año valido"),
        tipo: Yup.string().required("Ingrese un tipo valido"),
        color: Yup.string().required("Ingrese un color valido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            marca: values.marca,
            modelo: values.modelo,
            dominio: values.dominio,
            año: values.año,
            tipo: values.tipo,
            color: values.color,
          };

          dispatch(addVehiculo(dataToSubmit)).then((response) => {
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
              <h2 className="text-white titleVehiculos text-center rounded mb-2">
                Agregar Vehiculo
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>

                <Form.Item required label="Marca">
                  <Input
                    id="marca"
                    placeholder="Ingresar MARCA del vehiculo"
                    type="text"
                    value={values.marca}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.marca && touched.marca
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.marca && touched.marca && (
                    <div className="inputFeedback">{errors.marca}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Modelo">
                  <Input
                    id="modelo"
                    placeholder="Ingresar MODELO del vehiculo"
                    type="text"
                    value={values.modelo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.modelo && touched.modelo
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.modelo && touched.modelo && (
                    <div className="inputFeedback">{errors.modelo}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Dominio">
                  <Input
                    id="dominio"
                    placeholder="Ingresar DOMINIO del vehiculo"
                    type="text"
                    value={values.dominio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.dominio && touched.dominio
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.dominio && touched.dominio && (
                    <div className="inputFeedback">{errors.dominio}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Año">
                  <Input
                    id="año"
                    placeholder="Ingresar AÑO del vehiculo"
                    type="number"
                    value={values.año}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.año && touched.año
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.año && touched.año && (
                    <div className="inputFeedback">
                      {errors.año}
                    </div>
                  )}
                </Form.Item>

                <Form.Item required label="Tipo">
                  <Input
                    id="tipo"
                    placeholder="Ingresar TIPO de vehiculo"
                    type="text"
                    value={values.tipo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.tipo && touched.tipo
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.tipo && touched.tipo && (
                    <div className="inputFeedback">{errors.tipo}</div>
                  )}

                </Form.Item>
                <Form.Item required label="Color">
                  <Input
                    id="color"
                    placeholder="Ingresar COLOR del vehiculo"
                    type="text"
                    value={values.color}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.color && touched.color
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.color && touched.color && (
                    <div className="inputFeedback">{errors.color}</div>
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

export default AddVehiculo;
