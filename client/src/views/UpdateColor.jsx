import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {navigate} from '@reach/router';


const UpdateColor = ({id, updateColor}) => {

  const [name, setName] = useState("");
  const [hex, setHex] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:9001/api/colors/${id}`)
            .then(response => {
                setName(response.data.name);
                setHex(response.data.hex);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

  const formHandler = (e) => {
    e.preventDefault();

    let updatedColor = {
      name: name,
      hex: hex
    };

    axios.put(`http://localhost:9001/api/colors/${id}`, updatedColor)
      .then(response => {
        console.log(response);

        // getAllColorsAPI();
        updateColor(id, {name: name, hex: hex});
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
          <input type="submit" value="Update!"></input>
        </form>
      </div>
    </div>
  );

}

export default UpdateColor;