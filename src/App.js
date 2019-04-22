import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AllocationPage from './pages/AllocationPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <AllocationPage />
        </div>
      </div>
    );
  }
}

export default App;
