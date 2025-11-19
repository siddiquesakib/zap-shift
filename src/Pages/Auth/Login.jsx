import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div>
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
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
