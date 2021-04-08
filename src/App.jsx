import React from "react";
import './App.css'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(6),
})


export default function App() {
  const classes = useStyles();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),


  });


  const onSubmit = (data) => alert(data)




  return (
    <div className="App">
      <h1>React hook form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>

        <TextField id="standard-basic" label="Username" {...register("username")} />
        <br />

        <TextField id="standard-basic" label="Password" {...register("password")} />
        <br />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  );
}