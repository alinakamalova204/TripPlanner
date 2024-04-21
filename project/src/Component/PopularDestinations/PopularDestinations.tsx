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

// import React from 'react';
// import styles from './styles.module.sass'
// import {popularDestinations} from "./data";
// import Swiper from "swiper";
// const PopularDestinations: React.FC = () => {
//     const gallerySlider = new Swiper('.gallery', {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: true,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     })
//
//     return (
//         <div className={styles.galleryAll}>
//             <h2>Популярные направления</h2>
//             <div className={styles.gallery}>
//                 {popularDestinations.map((destination, index: number) => (
//                     <div className={styles.item} key={index}>
//                         <img className={styles.image} src={destination.image} alt={destination.country} />
//                         <p className={styles.title}>{destination.country}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default PopularDestinations;


import React, { useEffect } from 'react';
import Swiper from 'swiper';
import styles from './styles.module.sass'
import {popularDestinations} from "./data";

const PopularDestinations = () => {
    useEffect(() => {
        new Swiper('.swiper-container', {
            // параметры Swiper здесь
            slidesPerView: 'auto',
            spaceBetween: 10,
        });
    }, []);

    return (
        <div className={styles.galleryAll}>
            <h2>Популярные направления</h2>
            <div className={styles.swiper_container}>
                <div className={styles.swiper_wrapper}>
                    {popularDestinations.map((destination, index: number) => (
                        <div className={styles.swiper_slide} key={index}>
                            <img className={styles.image} src={destination.image} alt={destination.country} />
                            <p className={styles.title}>{destination.country}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default PopularDestinations