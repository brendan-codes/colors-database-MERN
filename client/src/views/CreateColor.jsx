import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {navigate} from '@reach/router';


const CreateColor = ({addColor, getAllColorsAPI}) => {

  const [name, setName] = useState("");
  const [hex, setHex] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    let newColor = {
      name: name,
      hex: hex
    };

    console.log(newColor);
    axios.post("http://localhost:9001/api/colors", newColor)
      .then(response => {
        console.log(response);
        addColor(response.data);
        // getAllColorsAPI();
        navigate("/");
      })
      .catch(err => {
        console.log(err.response.data.errors);
        setName("");
        setHex("");
      })
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={formHandler}>
          <p>Name your color:</p>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
          <p>Select your color:</p>
          <input type='color' value={hex} onChange={(e) => setHex(e.target.value)}></input>
          <p></p>
          <input type="submit" value="Create!"></input>
        </form>
      </div>
    </div>
  );

}

export default CreateColor;