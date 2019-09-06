import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import "./App.css"


class App extends React.Component {
constructor(){
  super()

};

  render(){
  return (
    <div className="App">
    <Header />
    <Dashboard />
    <Form />
      
    </div>
  )
}
}

export default App;
