import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";
import UserServices from "../services/userServices";

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Not valid email")
        .required("Email is required"),
      password: Yup.string().min(5).required("Password is required"),
    }),
    onSubmit: (values) => {
      UserServices.loginUser(values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      formik.resetForm();
    },
  });

  const showErrors = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];
  return (
    <div className="bg-whiteTextColor pt-[10px]">
      <h2 className="text-blackTextColor text-2xl uppercase text-center">
        Login page
      </h2>
      <div className="container mx-auto flex-center justify-center py-[10px] px-[18px]">
        <form
          className="flex flex-col w-[500px] gap-[15px] border border-slate-300 rounded-md p-[20px] bg-gray-200"
          onSubmit={formik.handleSubmit}
        >
          {/* email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className={`text-xs ${showErrors("email") ? "text-red-600" : ""}`}
            >
              {showErrors("email") ? showErrors("email") : "Email"}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={`border rounded-md py-[3px] px-[15px] outline-none ${
                showErrors("email") ? "border-red-600" : ""
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {/* password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className={`text-xs ${
                showErrors("password") ? "text-red-600" : ""
              }`}
            >
              {showErrors("password") ? showErrors("password") : "Password"}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={`border rounded-md py-[3px] px-[15px] outline-none ${
                showErrors("password") ? "border-red-600" : ""
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-mainBlue text-whiteTextColor py-[3px] px-[15px] rounded-md text-center hover:bg-[#002438] transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
