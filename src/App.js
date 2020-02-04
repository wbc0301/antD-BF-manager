import React from 'react';
// import './App.css';

// import { Button } from 'antd';
// import 'antd/dist/antd.css'; // 使用了按需引入后就不需要再引入了

class App extends React.Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
