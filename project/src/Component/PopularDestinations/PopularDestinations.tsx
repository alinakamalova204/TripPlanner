// import {useEffect, useState} from "react";
// import axios from "axios";
//
// const PopularDestinations = () => {
//     const [image, setImage] = useState('');
//     const [title, setTitle] = useState('');
//
//     useEffect(() => {
//         axios.get('http://localhost:8080/data')
//             .then(response => {
//                 setImage(response.data);
//                 setTitle(response.data.title);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, []);
//
//     return (
//         <div>
//             <img src={image} alt={title} />
//             <p>{title}</p>
//         </div>
//     );
// }
// export default PopularDestinations

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Promo from "../Promo/Promo";

const PopularDestinations = () => {
    // <Promo/>
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     axios.get('http://localhost:8080/data')
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);
    //
    // const firstItemKey = data.length > 0 ? data[1] : { image: '', name: '' };
    // return (
    //             <div>
    //                 <img src={`images/${firstItemKey.image}`} alt={firstItemKey.name} />
    //                 <p>{firstItemKey.name}</p>
    //             </div>
    //         );
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/data')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data.map(item => (
                <img src={'item.image'} alt={'item.name'} className="icon" />
            ))}
        </div>
    );

    // for (let firstItemKey; firstItemKey < data.length; firstItemKey++) {
    //     if (data.length > 0) {
    //         return (
    //             <div>
    //                 <img src={`images/${firstItemKey.image}`} alt={firstItemKey.name} />
    //                 <p>{firstItemKey.name}</p>
    //             </div>
    //         );
    //     }
    // }


}

export default PopularDestinations;

