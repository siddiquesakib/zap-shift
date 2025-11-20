import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import SocialLogin from "./Social/SocialLogin";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = UseAuth();

  const handleLogin = (data) => {
    console.log(data);
    registerUser(data.email, data.Password)
      .then((result) => {
        console.log(result);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-16 mb-6">
        <h1 className=" font-extrabold text-3xl text-secondary">
          Welcome Back
        </h1>
        <p>Login with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600" role="alert">
              email required
            </p>
          )}

          {/* pass */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("Password", {
              required: true,
              minLength: 6,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.Password?.type === "required" && (
            <p className="text-red-600" role="alert">
              Password required
            </p>
          )}
          {errors.Password?.type === "minLength" && (
            <p className="text-red-600" role="alert">
              Password required
            </p>
          )}
          <div>
            <p>
              Forgot password? New here{" "}
              <Link className="link link-hover" to={"/register"}>
                Register
              </Link>{" "}
            </p>
          </div>
          <button className="btn btn-neutral w-fit  mt-4">Login here</button>
        </fieldset>
      </form>
      or
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
