import './App.css';
import content from './static'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {

  const { control, handleSubmit, errors } = useForm()

  const classes = useStyles();

  const onSubmit = (data: ITextField) => console.log(data);

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              {/* <TextField id="standard-basic" label={input.label} type={input.type} /> */}
              <Controller
                name={input.label}
                control={control}
                defaultValue={input.type}
                render={({ field }) => <input {...field} />}
              />
            </div>
          )
        })
        }
        <Button variant="contained" color="primary" type="submit">
          Submit
      </Button>
      </form>
    </div>
  )
}

export default App;

