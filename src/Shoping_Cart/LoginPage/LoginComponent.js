import "./LoginComponent.scss";
import { Button, Paper, TextField } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../hooks/UseAuth";

export function LoginComponent() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  useEffect(() => {}, []);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 charactewrs length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // login API call
      localStorage.setItem("token", "some-token");
      navigate("/pages");
      // navigate("login");
    },
  });
  return (
    <>
      <div className="login-component">
        <Paper className="form-container">
          <form
            className="d-flex align-items-center flex-column"
            onSubmit={formik.handleSubmit}
          ></form>
          <h3>Login</h3>
          <TextField
            fullWidth
            name="email"
            label="Email"
            className=" email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            className=" password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="contained">Contained</Button>
        </Paper>
      </div>
    </>
  );
}
