import React, {useEffect, useState} from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import logo from './logo.svg';
import Colors from './views/Colors';
import Color from './views/Color';
import CreateColor from './views/CreateColor';
import './App.css';
import UpdateColor from './views/UpdateColor';

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

  const deleteColor = (id) => {
    setColors(colors.filter(color => color._id !== id));
  }

  const addColor = (color) => {
    setColors([...colors, color])
  };

  const updateColor = (id, color) => {
    let idx = 0;
    for(let i = 0; i<colors.length; i++){
      if(colors[i]._id === id){
        idx = i;
      }
    }
    const colorsCopy = [...colors];
    colorsCopy[idx] = {name: color.name, hex: color.hex}

    setColors(colorsCopy);
  }

  return (
    <div className="App">
      <h1>Welcome to the Color app!</h1>
      <Router>
        <Colors path="/" colors={colors} deleteColor={deleteColor}></Colors>
        <Color path="/color/:id"></Color>
        <CreateColor path="/new" addColor={addColor} getAllColorsAPI={getAllColorsAPI}></CreateColor>
        <UpdateColor path="/update/:id" updateColor={updateColor}></UpdateColor>
      </Router>
    </div>
  );
}

export default App;
