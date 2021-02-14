import React, {useState} from 'react';
import logo from './logo.svg';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import AbsoluteRedirect from './components/AbsoluteRedirect';
const App = () => {
  const [code, setCode] = useState()
  const [token, setToken] = useState()
  const [user, setUser] = useState() 
  
  if (user) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            User logged in
          </p>
        </header> 
      </div>
    );
  } else {
    var redirect_url = `https://gurbs_oidc_server/auth?response_type=code&redirect_url=${window.location.href}`
    return (
      <AbsoluteRedirect to={redirect_url} />
    );
  }

}

export default App;
