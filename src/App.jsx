
import './App.css';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("Email can not be empty")
  const [passwordError, setPasswordError] = useState("Password can not be empty")

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email')
    }
    else {
      setEmailError("")
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break

    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Password should be longer than 3 and shortet than 8')
    } if (!e.target.value) {
      setPasswordError("Password can not be empty")
    }
    else {
      setPasswordError('')
    }
  }


  return (
    <div className="App">
      <form className="form">
        <h1>Registration</h1>
        {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="text" name="email" placeholder="Enter your email..." />
        <br />
        {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Enter your password..." />
        <br />
        <button type="reset">Registration</button>

      </form>

    </div>
  );
}

export default App;

