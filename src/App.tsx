import React, {useState} from 'react';
import './App.css';
import AbsoluteRedirect from './components/AbsoluteRedirect';

const App = () => {
  const [user, setUser] = useState() 
  console.log(process.env)
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
    var redirect_url = `${process.env.REACT_APP_AUTH_PROVIDER_URI}?response_type=code&client_id=${process.env.REACT_APP_AUTH_CLIENT_ID}&redirect_uri=${window.location.origin}/callback`
    return (
      <AbsoluteRedirect to={redirect_url} />
    );
  }

}

export default App;
