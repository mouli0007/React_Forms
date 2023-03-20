import FormInput from "./components/FormInput";
import "./App.css";
import { useState } from "react";
import Form from "./react-hook-form/Form";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    errormessage: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errormessage: "Username should be 3-16 chracters",
      required: true,
      pattern: "^[A-Za-z0-9]{4,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errormessage: "it should be a valid email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      errormessage: "Password must be 8-20 chracters",
      required: true,
    },
    {
      id: 1,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      label: "confirmPassword",
      errormessage: "password didnt match",
      required: true,
      patern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onchange={onchange}
              />
            );
          })}
          <button>Submit</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <Form />
      <br />
      <br />
    </>
  );
}

export default App;
