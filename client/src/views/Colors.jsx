import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Colors = ({colors, deleteColor}) => {


    const deleteHandler = (id) => {
        axios.delete(`http://localhost:9001/api/colors/${id}`)
            .then(response => {
                console.log(response);
                deleteColor(id);
            })
            .catch(err => {
                console.log(err);
            })
    }




    return (
        <div>
            <p><Link to="/new">Create a color!</ Link></p>
            {
                colors.map((color, idx) => {
                    return (
                        <div key={idx} style={{background: color.hex, height: "200px", width: "200px", display: "inline-block"}}>
                            <p>Name: <Link to={`/color/${color._id}`}>{color.name}</Link></p>
                            <p>Hex: {color.hex}</p>
                            <button onClick={(e) => { deleteHandler(color._id) }}>Delete {color.name}</button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Colors;