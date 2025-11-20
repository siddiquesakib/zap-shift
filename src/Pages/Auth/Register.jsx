import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import SocialLogin from "./Social/SocialLogin";

const Register = () => {
  const { register, handleSubmit } = useForm();
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
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input"
            placeholder="Email"
          />

          {/* pass */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("Password")}
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
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
