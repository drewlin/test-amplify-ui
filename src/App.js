import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  const testGet = () => {
    const apiName = 'apiping';
    const path = '/ping';
    const myInit = { // OPTIONAL
      headers: {}, // OPTIONAL
    };
  
    return API
      .get(apiName, path)
      .then(response => {
        // Add your code here
        console.log('success', response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  
  testGet();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
