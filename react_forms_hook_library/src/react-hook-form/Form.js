import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const [users, setUsers] = useState({});

  const schema = yup.object().shape({
    //   Checking for the type of string !
    fullname: yup.string().required("Your Full Name is Required"),

    //   checking for the email
    email: yup.string().email().required(),

    //   making the age valid
    age: yup.number().positive().integer().min(18).required(),

    //   Creating a strong passwrod validation
    password: yup.string().min(4).max(20).required(),

    //   Making a confirm password !
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(schema);

  const onSubmit = (data) => {
    console.log("Hellow World!");
    console.log(data);

    setUsers(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="FullName" {...register("fullname")} />
        <p>{errors.fullname?.message}</p>
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="age" {...register("age")} />
        <input type="text" placeholder="Password" {...register("password")} />
        <input
          type="text"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <input type="submit" />
      </form>

      <div>
        <h3>{users.fullname}</h3>
        <h3>{users.email}</h3>
        <h3>{users.age}</h3>
        <h3>{users.password}</h3>
      </div>
    </>
  );
};

export default Form;
