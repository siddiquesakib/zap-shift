import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import SocialLogin from "./Social/SocialLogin";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = UseAuth();

  const handleRegister = (data) => {
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
    <div className=" ">
      <div className="mt-16 mb-6">
        <h1 className=" font-extrabold text-3xl text-secondary">Register</h1>
        <p>register with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">
          
          {/* name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}

          {/* photo image field */}
          <label className="label">Photo</label>

          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500">Photo is required.</p>
          )}

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
            <p>
              already have account?{" "}
              <Link className="link link-hover" to={"/login"}>
                Login here
              </Link>
            </p>
          </div>
          <button className="btn w-fit btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      or
      <SocialLogin />
    </div>
  );
};

export default Register;
