import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';
// import 'antd/dist/antd.css'; // 使用了按需引入后就不需要再引入了

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 11and save to reload.
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
