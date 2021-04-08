import React from "react";
import './App.css'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(6),
})


export default function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)

  });
  const onSubmit = (data) => console.log(data);


  return (
    <div className="App">
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(onSubmitnpm)}>
        <p><label>Username</label></p>
        <p>
          <input className="input" {...register("userName")} />
        </p>
        <p><label>Password</label></p>
        <p>
          <input className="input" {...register("Password")} />
        </p>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}