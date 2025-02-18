import * as Yup from "yup";
import { useFormik } from "formik";
import UserServices from "../services/userServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterFormComponent() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(
          /^[A-Z][a-zA-Z-]+$/,
          "First name must start with a capital letter and contain only letters and hyphens"
        )
        .required("First name is required"),
      lastName: Yup.string()
        .matches(
          /^[A-Z][a-zA-Z-]+$/,
          "Last name must start with a capital letter and contain only letters and hyphens"
        )
        .required("Last name is required"),
      email: Yup.string()
        .email("Not valid email")
        .required("Email is required"),
      password: Yup.string().min(5).required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      UserServices.registerUser(values)
        .then((res) => {
          toast.success(res.data);
          navigate("/");
        })
        .catch((error) => {
          toast.error(
            error.response?.data?.error || "An error happened, try again."
          );
        });
      formik.resetForm();
    },
  });

  const showErrors = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];
  return (
    <form
      className="flex flex-col w-[500px] gap-[15px] border border-slate-300 rounded-md p-[20px] bg-gray-200"
      onSubmit={formik.handleSubmit}
    >
      {/* firstName */}
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className={`text-xs ${showErrors("firstName") ? "text-red-600" : ""}`}
        >
          {showErrors("firstName") ? showErrors("firstName") : "First Name"}
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          className={`border rounded-md py-[3px] px-[15px] outline-none ${
            showErrors("firstName") ? "border-red-600" : ""
          }`}
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      {/* lastName */}
      <div className="flex flex-col">
        <label
          htmlFor="lastName"
          className={`text-xs ${showErrors("lastName") ? "text-red-600" : ""}`}
        >
          {showErrors("lastName") ? showErrors("lastName") : "Last Name"}
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          className={`border rounded-md py-[3px] px-[15px] outline-none ${
            showErrors("lastName") ? "border-red-600" : ""
          }`}
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>
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
          className={`text-xs ${showErrors("password") ? "text-red-600" : ""}`}
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
      {/* confirmPassword */}
      <div className="flex flex-col">
        <label
          htmlFor="confirmPassword"
          className={`text-xs ${
            showErrors("confirmPassword") ? "text-red-600" : ""
          }`}
        >
          {showErrors("confirmPassword")
            ? showErrors("confirmPassword")
            : "Confirm Password"}
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          className={`border rounded-md py-[3px] px-[15px] outline-none ${
            showErrors("confirmPassword") ? "border-red-600" : ""
          }`}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-mainBlue text-whiteTextColor py-[3px] px-[15px] rounded-md text-center hover:bg-[#002438] transition-all duration-300"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterFormComponent;
