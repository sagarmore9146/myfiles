import { useEffect } from "react";
import { UseAuth } from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import "./LoginComponent.scss";

export function LoginComponent() {
  const navigate = useNavigate();
  const isAuthenticated = UseAuth();
  useEffect(() => {
    // if (isAuthenticated) {
    //   navigate("/pages");
    // }
  }, []);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("token", "some-token");
      navigate("/pages");
    },
  });
  return (
    <div className="login-component">
      <Paper elevation={3} className="form-container">
        <form
          className="d-flex align-item-center flex-colum"
          onSubmit={formik.handleSubmit}
        >
          <h3>Login</h3>
          <TextField
            fullWidth
            name="email"
            label="Email"
            className="mb-3"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>
          <TextField
            fullWidth
            type="password"
            name="password"
            label="password"
            className="mb-3"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              formik.touched.password && Boolean(formik.errors.password)
            }
          ></TextField>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}
