import React, {useState, useEffect} from 'react';
import axios from 'axios';
import  {Link } from '@reach/router';

const Color = ({id}) => {

    const [color, setColor] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:9001/api/colors/${id}`)
            .then(response => {
                console.log(response.data);
                setColor(response.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <div>
            hello world! welcome to Color
            {loaded && <div>
                <p>{color.name}</p>
                <p>{color.hex}</p>
                <p><Link to={`/update/${id}`}>Update!</Link></p>
            </div>}

            <p><Link to="/">Go back?</Link></p>
        </div>
    )

}

export default Color;