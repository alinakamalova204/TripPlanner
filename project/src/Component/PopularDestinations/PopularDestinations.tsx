import {useEffect, useState} from "react";
import axios from "axios";

const PopularDestinations = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('http://your-server-url.com/image')
            .then(response => {
                setImage(response.data);
                setTitle(response.data.title);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
}
export default PopularDestinations