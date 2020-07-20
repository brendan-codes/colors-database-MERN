import React, {useEffect, useState} from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import logo from './logo.svg';
import Colors from './views/Colors';
import Color from './views/Color';
import CreateColor from './views/CreateColor';
import './App.css';
import Axios from 'axios';

function App() {

  const [colors, setColors] = useState([]);

  useEffect(() => {
    getAllColorsAPI();
  }, [])

  const getAllColorsAPI = () => {
    axios.get("http://localhost:9001/api/colors")
        .then(response => {
          console.log(response.data);
          setColors(response.data);
        })
        .catch(err => {
          console.log(err.response);
        })
  }

  const addColor = (color) => {
    setColors([...colors, color])
  };

  return (
    <div className="App">
      <h1>Welcome to the Color app!</h1>
      <Router>
        <Colors path="/" colors={colors}></Colors>
        <Color path="/color/:id"></Color>
        <CreateColor path="/new" addColor={addColor} getAllColorsAPI={getAllColorsAPI}></CreateColor>
      </Router>
    </div>
  );
}

export default App;
