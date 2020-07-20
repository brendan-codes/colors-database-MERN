import React from 'react';
import { Link } from '@reach/router';

const Colors = ({colors}) => {





    return (
        <div>
            <p><Link to="/new">Create a color!</ Link></p>
            {
                colors.map((color, idx) => {
                    return (
                        <div key={idx} style={{background: color.hex, height: "200px", width: "200px", display: "inline-block"}}>
                            <p>Name: <Link to={`/color/${color._id}`}>{color.name}</Link></p>
                            <p>Hex: {color.hex}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Colors;