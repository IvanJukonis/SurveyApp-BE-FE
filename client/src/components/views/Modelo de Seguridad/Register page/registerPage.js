import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import "./style.css";

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        lastName: "",
        name: "",
        password: "",
        confirmPassword: "",
        accountType: "Cuenta gratuita",
        role: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
        role: Yup.string().required("Seleccionar un valor"),
      })}
      onSubmit={(values, { setSubmitting }) => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            lastName: values.lastName,
            role: values.role,
            accountType: "Cuenta gratuita",
          };
          dispatch(registerUser(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg);
            }
          });

          setSubmitting(false);
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
          handleReset,
        } = props;
        return (
          <div className="mt-5 d-flex justify-content-center flex-column">
            <div className="mb-4 d-flex justify-content-center">
              <h2 className="text-center">Registro</h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={()=>{console.log("corrio")}}>
                <Form.Item required label="Nombre">
                  <Input
                    id="name"
                    placeholder="Escribe tu nombre"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.name && touched.name && (
                    <div className="inputFeedback">{errors.name}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Apellido">
                  <Input
                    id="lastName"
                    placeholder="Escribe tu apellido"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="inputFeedback">{errors.lastName}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label="Email"
                  hasFeedback
                  validateStatus={
                    errors.email && touched.email ? "error" : "success"
                  }
                >
                  <Input
                    id="email"
                    placeholder="Escribe tu mail"
                    type="email"
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

                <Form.Item
                  required
                  label="Contraseña"
                  hasFeedback
                  validateStatus={
                    errors.password && touched.password ? "error" : "success"
                  }
                >
                  <Input
                    id="password"
                    placeholder="Escribe tu contraseña"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="inputFeedback">{errors.password}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Repetir Contraseña" hasFeedback>
                  <Input
                    id="confirmPassword"
                    placeholder="Escribe nuevamente la contraseña"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="inputFeedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </Form.Item>

                <Form.Item required label="Rol">
                  <select
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: 'block' }}
                  >
                  <option value="" label="" />
                  <option value="Admin" label="Admin" />
                  <option value="Empleado" label="Empleado" />
                  <option value="Contaduria" label="Contaduria"/>
                  </select>
                  {errors.role && touched.role && (
                      <div className="inputFeedback">{errors.role}</div>
                    )}
                </Form.Item>
                <div className="d-flex justify-content-center">
                  <Form.Item>
                    <Button
                      onClick={handleSubmit}
                      type="primary"
                      disabled={isSubmitting}
                    >
                      Enviar
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

export default RegisterPage;
