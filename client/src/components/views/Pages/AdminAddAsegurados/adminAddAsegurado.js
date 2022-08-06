import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addAsegurado } from "../../../../_actions/asegurados_actions";
import { useDispatch } from "react-redux";
import "./style.css";

import { Form, Input, Button } from "antd";

function AddAsegurado(props) {
  const dispatch = useDispatch();
  return (
    
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        dni: "",
        email: "",
        telefono: "",
        conductor: "",
        licencia:"",
      }}
      validationSchema={Yup.object().shape({
        nombre: Yup.string().required("Ingrese un nombre valido"),
        apellido: Yup.string().required("Ingrese un apellido valido"),
        fechaNacimiento: Yup.string().required("Ingrese una fecha de nacimiento valida"),
        dni: Yup.number().required("Ingrese un dni valido"),
        email: Yup.string().required("Ingrese un email valido"),
        telefono: Yup.number().required("Ingrese un telefono valido"),
        conductor: Yup.string().required("Seleccionar un valor"),
        licencia: Yup.string().required("Seleccionar un valor"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setTimeout(() => {
          let dataToSubmit = {
            nombre: values.nombre,
            apellido: values.apellido,
            fechaNacimiento: values.fechaNacimiento,
            dni: values.dni,
            email: values.email,
            telefono: values.telefono,
            conductor: values.conductor,
            licencia: values.licencia,
          };

          dispatch(addAsegurado(dataToSubmit)).then((response) => {
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
              <h2 className="text-white titleAsegurados text-center rounded mb-2">
                Agregar Asegurado
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>

                <Form.Item required label="Nombre">
                  <Input
                    id="nombre"
                    placeholder="Ingresar nombre del asegurado"
                    type="text"
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.nombre && touched.nombre
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.nombre && touched.nombre && (
                    <div className="inputFeedback">{errors.nombre}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Fecha de Nacimiento">
                  <Input
                    id="fechaNacimiento"
                    placeholder="Ingresar fecha de nacimiento"
                    type="text"
                    value={values.fechaNacimiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaNacimiento && touched.fechaNacimiento
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaNacimiento && touched.fechaNacimiento && (
                    <div className="inputFeedback">{errors.fechaNacimiento}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Apellido">
                  <Input
                    id="apellido"
                    placeholder="Ingresar apellido del asegurado"
                    type="text"
                    value={values.apellido}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.apellido && touched.apellido
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.apellido && touched.apellido && (
                    <div className="inputFeedback">{errors.apellido}</div>
                  )}
                </Form.Item>

                <Form.Item required label="DNI">
                  <Input
                    id="dni"
                    placeholder="Ingresar dni del asegurado"
                    type="number"
                    value={values.dni}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.dni && touched.dni
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.dni && touched.dni && (
                    <div className="inputFeedback">{errors.dni}</div>
                  )}
                </Form.Item>

                <Form.Item required label="E-mail">
                  <Input
                    id="email"
                    placeholder="Ingresar email del asegurado"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="inputFeedback">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Telefono">
                  <Input
                    id="telefono"
                    placeholder="Ingresar telefono del asegurado"
                    type="text"
                    value={values.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.telefono && touched.telefono
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.telefono && touched.telefono && (
                    <div className="inputFeedback">{errors.telefono}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Licencia de Conducir">
                  <select
                    name="licencia"
                    value={values.licencia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                  <option value="" label="" />
                  <option value="En renovacion con comprobante" label="En renovacion con comprobante" />
                  <option value="En renovacion sin comprobante" label="En renovacion sin comprobante" />
                  <option value="En vigencia" label="En vigencia" />
                  <option value="Vencida sin renovacion" label="Vencida sin renovacion" />
                  <option value="Nunca tuvo" label= "Nunca tuvo" />
                  </select>
                  {errors.licencia && touched.licencia && (
                      <div className="inputFeedback">{errors.licencia}</div>
                    )}
                </Form.Item>

                <Form.Item required label="Conductor">
                  <select
                    name="conductor"
                    value={values.conductor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                  <option value="" label="" />
                  <option value="Conducia el vehiculo asegurado" label= "Conducia el vehiculo asegurado"  />
                  <option value="No conducia el vehiculo asegurado" label= "No conducia el vehiculo asegurado"  />
                  </select>
                  {errors.conductor && touched.conductor && (
                      <div className="inputFeedback">{errors.conductor}</div>
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

export default AddAsegurado;
