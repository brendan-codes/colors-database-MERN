import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {navigate} from '@reach/router';


const CreateColor = ({addColor, getAllColorsAPI}) => {

  const [name, setName] = useState("");
  const [hex, setHex] = useState("");
  const [errors, setErrors] = useState([]);

  const formValidator = (e) => {
    e.preventDefault();

    let hasErrors = false;

    if(name.length < 2){
      setErrors([...errors, "Name must be 2 or greater!"])
      hasErrors = true;
    }

    // if()

    // if()

    if(!hasErrors){
      createColorAPI();
    }
  }

  const createColorAPI = () => {


    let newColor = {
      name: name,
      hex: hex
    };

    axios.post("http://localhost:9001/api/colors", newColor)
      .then(response => {
        console.log(response);
        addColor(response.data);
        // getAllColorsAPI();
        navigate("/");
      })
      .catch(err => {
        console.log(err.response);
        console.log(err.response.data.errors);

        const errorsArray = [];
        for(const key of Object.keys(err.response.data.errors)){
          errorsArray.push(err.response.data.errors[key].properties.message);
        };
        console.log(errorsArray);
        setErrors(errorsArray);
        setName("");
        setHex("");
      })
  }

  return (
    <div className="App">
      <div>
        <div>
        {errors.map((err, i) => <p key={i}>{err}</p>)}
        </div>
        <form onSubmit={formValidator}>
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