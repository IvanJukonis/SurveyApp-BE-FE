import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addEmpleado } from "../../../../_actions/empleados_actions";
import { useDispatch } from "react-redux";
import "./style.css";

import { Form, Input, Button } from "antd";

function AddEmpleado(props) {
  const dispatch = useDispatch();
  return (
    
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        dni: "",
        email: "",
        direccion: "",
        telefono: "",
        obraSocial: "",
        departamento: "",
        remuneracion: "",
        puesto: "",
        fechaContratacion:"",
      }}
      validationSchema={Yup.object().shape({
        nombre: Yup.string().required("Ingrese un nombre valido"),
        apellido: Yup.string().required("Ingrese un apellido valido"),
        fechaNacimiento: Yup.string().required("Ingrese una fecha de nacimiento valida"),
        dni: Yup.number().required("Ingrese un dni valido"),
        email: Yup.string().required("Ingrese un email valido"),
        direccion: Yup.string().required("Ingrese una direccion valida"),
        telefono: Yup.number().required("Ingrese un numero valido"),
        obraSocial: Yup.string().required("Ingrese una obra social valida"),
        departamento: Yup.string().required("Seleccionar un valor"),
        remuneracion: Yup.number().required("Ingrese una remuneracion valida"),
        puesto: Yup.string().required("Seleccionar un puesto"),
        fechaContratacion: Yup.string().required("Ingrese una fecha de contratacion valida"),
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
            direccion: values.direccion,
            telefono: values.telefono,
            obraSocial: values.obraSocial,
            departamento: values.departamento,
            remuneracion: values.remuneracion,
            puesto: values.puesto,
            fechaContratacion: values.fechaContratacion,
          };

          dispatch(addEmpleado(dataToSubmit)).then((response) => {
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
              <h2 className="text-white titleEmpleados text-center rounded mb-2">
                Agregar Empleado
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>

                <Form.Item required label="Nombre">
                  <Input
                    id="nombre"
                    placeholder="Ingresar nombre del empleado"
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
                    placeholder="Ingresar apellido del empleado"
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
                    placeholder="Ingresar dni del empleado"
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
                    placeholder="Ingresar email del empleado"
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

                <Form.Item required label="Direccion">
                  <Input
                    id="Direccion"
                    placeholder="Ingresar direccion del empleado"
                    type="text"
                    value={values.direccion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.direccion && touched.direccion
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.direccion && touched.direccion && (
                    <div className="inputFeedback">{errors.direccion}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Telefono">
                  <Input
                    id="telefono"
                    placeholder="Ingresar telefono del empleado"
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

                <Form.Item required label="Obra Social">
                  <Input
                    id="obraSocial"
                    placeholder="Ingresar obra social del empleado"
                    type="text"
                    value={values.obraSocial}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.obraSocial && touched.obraSocial
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.obraSocial && touched.obraSocial && (
                    <div className="inputFeedback">{errors.obraSocial}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Departamento">
                  <select
                    name="departamento"
                    value={values.departamento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                  <option value="" label="" />
                  <option value="Recursos Humanos" label= "Recursos Humanos"  />
                  <option value="Administracion" label= "Administracion"  />
                  <option value="Produccion" label= "Produccion"  />
                  <option value="Marketing" label= "Marketing"  />
                  </select>
                  {errors.departamento && touched.departamento && (
                      <div className="inputFeedback">{errors.departamento}</div>
                    )}
                </Form.Item>

                <Form.Item required label="Remuneracion">
                  <Input
                    id="remuneracion"
                    placeholder="Ingresar remuneracion del empleado"
                    type="text"
                    value={values.remuneracion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.remuneracion && touched.remuneracion
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.remuneracion && touched.remuneracion && (
                    <div className="inputFeedback">{errors.remuneracion}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Puesto">
                  <select
                    name="puesto"
                    value={values.puesto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                  <option value="" label="" />
                  <option value="Gerente" label= "Gerente"  />
                  <option value="Regular" label= "Regular"  />
                  <option value="Relevador" label= "Relevador"  />
                  </select>
                  {errors.puesto && touched.puesto && (
                      <div className="inputFeedback">{errors.puesto}</div>
                    )}
                </Form.Item>

                <Form.Item required label="Fecha de Contratacion">
                  <Input
                    id="fechaContratacion"
                    placeholder="Ingresar fecha de contratacion del empleado"
                    type="text"
                    value={values.fechaContratacion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fechaContratacion && touched.fechaContratacion
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fechaContratacion && touched.fechaContratacion && (
                    <div className="inputFeedback">{errors.fechaContratacion}</div>
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

export default AddEmpleado;
