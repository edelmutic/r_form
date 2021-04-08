import './App.css';
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import content from './static';


function App() {

  const schema = Yup.object().shape({

    userName: Yup.string().required("username is required"),
    password: Yup.string().required('Password is required').min(6)
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log(data)

  return (
    <div className="App">
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              <p>
                <label>{input.label}</label>
              </p>
              <p>
                <input name={input.name} className="input" type={input.type} />
              </p>
            </div>
          )
        })}
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

