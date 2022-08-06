import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addTercero } from "../../../../_actions/terceros_actions";
import { useDispatch } from "react-redux";
import "./style.css";

import { Form, Input, Button } from "antd";

function AddTercero(props) {
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
      }}
      validationSchema={Yup.object().shape({
        nombre: Yup.string().required("Ingrese un nombre valido"),
        apellido: Yup.string().required("Ingrese un apellido valido"),
        fechaNacimiento: Yup.string().required("Ingrese una fecha de nacimiento valida"),
        dni: Yup.number().required("Ingrese un DNI valido"),
        email: Yup.string().required("Ingrese un email valido"),
        telefono: Yup.number().required("Ingrese un telefono valido"),
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
          };

          dispatch(addTercero(dataToSubmit)).then((response) => {
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
              <h2 className="text-white titleTerceros text-center rounded mb-2">
                Agregar Tercero
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>

                <Form.Item required label="Nombre">
                  <Input
                    id="nombre"
                    placeholder="Ingresar nombre del tercero"
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
                    placeholder="Ingresar apellido del tercero"
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
                    placeholder="Ingresar dni del tercero"
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
                    placeholder="Ingresar email del tercero"
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
                    placeholder="Ingresar telefono del tercero"
                    type="number"
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

export default AddTercero;
